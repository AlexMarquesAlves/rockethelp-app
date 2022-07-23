import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { VStack } from "native-base";
import { useState } from "react";
import { Alert } from "react-native";
import { Button, Input } from "../../components";
import { Header } from "../../components";

export function Register() {
  const [isloading, setIsloading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");

  function handleNewOrderRegster() {
    if (!patrimony || !description) {
      Alert.alert("Registrar", "Preencha todos os campos.");
    }

    setIsloading(true);

    firestore()
      .collection("orders")
      .add({
        patrimony,
        description,
        status: `open`,
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert("Solicitação", "Solicitação registrada com sucesso");
      });
  }

  return (
    <VStack flex={1} p={6} bg={"gray.600"}>
      <Header title={"Nova solicitação"} />

      <Input placeholder={"Número do patrimônio"} mt={4} />

      <Input
        placeholder={"Descrição do problema"}
        mt={5}
        flex={1}
        multiline
        textAlignVertical={"top"}
      />

      <Button title={"Cadastrar"} mt={5} />
    </VStack>
  );
}

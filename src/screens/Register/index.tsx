import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";
import { useState } from "react";
import { Alert } from "react-native";
import { Button, Header, Input } from "../../components";

export function Register() {
  const [isloading, setIsloading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");

  const navigation = useNavigation();

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
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
        setIsloading(false);
        return Alert.alert(
          "Solicitação",
          "Não foi possível Registrar a solicitação"
        );
      });
  }

  return (
    <VStack flex={1} p={6} bg={"gray.600"}>
      <Header title={"Solicitação"} />

      <Input
        placeholder={"Número do patrimônio"}
        mt={4}
        onChangeText={setPatrimony}
      />

      <Input
        placeholder={"Descrição do problema"}
        mt={5}
        flex={1}
        multiline
        textAlignVertical={"top"}
        onChangeText={setDescription}
      />

      <Button
        title={"Cadastrar"}
        mt={5}
        isLoading={isloading}
        onPress={handleNewOrderRegster}
      />
    </VStack>
  );
}

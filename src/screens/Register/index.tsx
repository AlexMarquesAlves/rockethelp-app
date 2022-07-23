import { VStack } from "native-base";
import { useState } from "react";
import { Button, Input } from "../../components";
import { Header } from "../../components";

export function Register() {
  const [isloading, setIsloading] = useState(false);
  const [patrimony, setPatrimony] = useState("");
  const [description, setDescription] = useState("");

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

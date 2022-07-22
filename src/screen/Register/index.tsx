import { VStack } from "native-base";
import { Button, Input } from "../../components";
import { Header } from "../../components";

export function Register() {
  return (
    <VStack flex={1} p={6} bg={"gray.600"}>
      <Header title={"Nova solicitação"} />

      <Input placeholder={"Número do patrimônio"} mt={4} />
    </VStack>
  );
}

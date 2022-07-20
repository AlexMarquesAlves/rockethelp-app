import { Heading, Icon, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import Logo from "../../assets/logo_primary.svg";
import { Input } from "../../components";

export const SignIn = () => {
  return (
    <VStack flex={1} alignItems={"center"} bg={"gray.600"} px={24}>
      <Logo />

      <Heading color={"gray.100"} fontSize={"xl"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder={"E-mail"}
        mb={4}
        InputLeftElement={<Icon as={<Envelope />} />}
      />
      <Input placeholder={"Senha"} InputLeftElement={<Icon as={<Key />} />} />
    </VStack>
  );
};

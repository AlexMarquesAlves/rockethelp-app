import { Heading, Icon, useTheme, VStack } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import Logo from "../../assets/logo_primary.svg";
import { Input, Button } from "../../components";

export const SignIn = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems={"center"} bg={"gray.600"} px={24}>
      <Logo />

      <Heading color={"gray.100"} fontSize={"xl"} mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        mb={4}
        placeholder={"E-mail"}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
      />
      <Input
        mb={8}
        placeholder={"Senha"}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
      />

      <Button title={"Entrar"} w={"full"} />
    </VStack>
  );
};

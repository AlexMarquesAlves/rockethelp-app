import {
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from "native-base";
import Logo from "../../assets/logo-secondary.svg";
import { SignOut } from "phosphor-react-native";
import { Filter } from "../../components";

export function Home() {
  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg={"gray.700"}>
      {/* Heading Bar */}
      <HStack
        w={"full"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"gray.600"}
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      {/* Info */}
      <VStack flex={1} px={6}>
        <HStack
          w={"full"}
          mt={8}
          mb={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading color={colors.gray[100]}>Meus chamados</Heading>
          <Text color={"gray.200"}>3</Text>
        </HStack>

        <HStack>
          {/* Filters */}
          <Filter type={"open"} title={"Em andamento"} />
          <Filter type={"closed"} title={"Finalizados"} />
        </HStack>
      </VStack>
    </VStack>
  );
}

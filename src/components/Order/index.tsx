import { Box, Circle, HStack, Text, useTheme, VStack } from "native-base";
import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
};

type Props = {
  data: OrderProps;
};

export function Order({ data, ...rest }: Props) {
  const { colors } = useTheme();

  const statusColors =
    data.status === "open" ? colors.secondary[700] : colors.green[300];

  return (
    <HStack
      bg={"gray.600"}
      mb={4}
      alignItems={"center"}
      justifyContent={"space-between"}
      rounded={"sm"}
      overflow={"hidden"}
    >
      <Box h={"full"} w={2} bg={statusColors} />
      <VStack flex={1} my={5} ml={5}>
        <Text color={"white"} fontSize={"md"}>
          Patrimonio{data.patrimony}
        </Text>
        {/* icons */}
        <HStack alignItems={"center"}>
          <ClockAfternoon size={15} color={colors.gray[300]} />
          <Text color={"gray.200"} fontSize={"xs"} ml={1}>
            {data.when}
          </Text>
        </HStack>
      </VStack>

      <Circle></Circle>
    </HStack>
  );
}

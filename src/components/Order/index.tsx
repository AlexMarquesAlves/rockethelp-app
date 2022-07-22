import { Box, HStack, Text, useTheme } from "native-base";

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
      <Text color={"white"} fontSize={"md"}>
        Patrimonio{data.patrimony}
      </Text>
    </HStack>
  );
}

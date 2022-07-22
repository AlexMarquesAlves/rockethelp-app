import { HStack, IconButton } from "native-base";
import { CaretLeft } from "phosphor-react-native";

export function Header() {
  return (
    <HStack
      w={"full"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"gray.600"}
      pb={6}
      pt={12}
    >
      <IconButton icon={<CaretLeft />} />
    </HStack>
  );
}

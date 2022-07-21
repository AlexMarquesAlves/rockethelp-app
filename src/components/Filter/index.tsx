import { Text, Button, IButtonProps, useTheme } from "native-base";

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: "open" | "closed";
};

export function Filter({ title, isActive = false, type, ...rest }: Props) {
  return (
    <Button
      variant={"outline"}
      borderWidth={isActive ? 1 : 0}
      borderColor={""}
      bgColor={"gray.700"}
      flex={1}
      size={"sm"}
    >
      <Text>{title}</Text>
    </Button>
  );
}

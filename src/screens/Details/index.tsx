import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { useRoute } from "@react-navigation/native";
import { Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Header } from "../../components";
import { OrderProps } from "../../components/Order";

type RouteParams = {
  orderId: string;
};

type OrderDetails = OrderProps & {
  description: string;
  solution: string;
  closed: string;
};

export function Details() {
  const [isloading, setIsloading] = useState(true);
  const [solution, setSolution] = useState(``);
  const [order, setOrder] = useState<OrderDetails>({} as OrderDetails);

  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  useEffect(() => {
    firestore().collection;

    return () => {};
  }, []);

  return (
    <VStack flex={1} bg={"gray.700"}>
      <Header title={"Solicitação"} />
      <Text color={"white"}>{orderId}</Text>
    </VStack>
  );
}

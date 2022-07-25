import { useRoute } from "@react-navigation/native";
import { Text, VStack } from "native-base";
import { useEffect, useState } from "react";
import { Header } from "../../components";
import { OrderProps } from "../../components/Order";

type RouteParams = {
  orderId: string;
};

type OderDetails = OrderProps & {
  description: string;
  solution: string;
  closed: string;
};

export function Details() {
  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  return (
    <VStack flex={1} bg={"gray.700"}>
      <Header title={"Solicitação"} />
      <Text color={"white"}>{orderId}</Text>
    </VStack>
  );
}

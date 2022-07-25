import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { useRoute } from "@react-navigation/native";
import { HStack, ScrollView, Text, useTheme, VStack } from "native-base";
import {
  CircleWavyCheck,
  Clipboard,
  DesktopTower,
  Hourglass,
} from "phosphor-react-native";
import { useEffect, useState } from "react";
import { CardDetails, Header, Input, Loading } from "../../components";
import { OrderProps } from "../../components/Order";
import { OrderFirestoreDTO } from "../../DTOs/OrderFirestoreDTO";
import { dateFormat } from "../../utils/firestoreDateFormat";

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

  const { colors } = useTheme();

  const route = useRoute();
  const { orderId } = route.params as RouteParams;

  useEffect(() => {
    firestore()
      .collection<OrderFirestoreDTO>("orders")
      .doc(orderId)
      .get()
      .then((doc) => {
        const {
          patrimony,
          description,
          status,
          created_at,
          closed_at,
          solution,
        } = doc.data();
        const closed = closed_at ? dateFormat(closed_at) : null;

        setOrder({
          id: doc.id,
          patrimony,
          description,
          status,
          solution,
          when: dateFormat(created_at),
          closed,
        });

        setIsloading(false);
      });

    return () => {};
  }, []);

  if (isloading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bg={"gray.700"}>
      <Header title={"Solicitação"} />

      <HStack bg={`gray.500`} justifyContent={`center`} p={4}>
        {order.status === "closed" ? (
          <CircleWavyCheck size={22} color={colors.green[300]} />
        ) : (
          <Hourglass size={22} color={colors.secondary[700]} />
        )}

        <Text
          fontSize={`sm`}
          color={
            order.status === `closed`
              ? colors.green[300]
              : colors.secondary[700]
          }
          ml={2}
          textTransform={`uppercase`}
        >
          {order.status === `closed` ? `Finalizado` : `Em andamento`}
        </Text>
      </HStack>

      <ScrollView mx={5} showsVerticalScrollIndicator={false}>
        <CardDetails
          title="Equipamento"
          description={`Patrimonio ${order.patrimony}`}
          icon={DesktopTower}
          footer={order.when}
        />

        <CardDetails
          title="Descricao do problema"
          description={order.description}
          icon={Clipboard}
        />

        <CardDetails
          title="Solucao"
          icon={CircleWavyCheck}
          footer={order.closed && `Encerrado em ${order.closed}`}
        >
          <Input
            placeholder="Descricao da solucao"
            onChangeText={setSolution}
            h={24}
            textAlignVertical={`top`}
            multiline
          />
        </CardDetails>
      </ScrollView>
    </VStack>
  );
}

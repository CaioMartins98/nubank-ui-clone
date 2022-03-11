import React from "react";
import { Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  Amount,
  AvailableLimit,
  Container,
  ContainerCurrentInvoice,
  ContainerIcon,
  ContainerSplitPurchases,
  ContainerTitle,
  CurrentInvoice,
  SplitPurchases,
  Title,
} from "./styles";
import * as Font from "expo-font";

const CardCredit = () => {
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <ContainerIcon>
        <AntDesign name="creditcard" size={24} color="black" />
      </ContainerIcon>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>
          Cartão de crédito
        </Title>
        <Ionicons name="chevron-forward" size={22} color="#777" />
      </ContainerTitle>
      <ContainerCurrentInvoice>
        <CurrentInvoice style={{ fontFamily: "Poppins-SemiBold" }}>
          Fatura atual
        </CurrentInvoice>
        <Amount style={{ fontFamily: "Poppins-SemiBold" }}>R$ 0,00</Amount>
        <AvailableLimit style={{ fontFamily: "Poppins-SemiBold" }}>
          Limite disponível de R$ 5.000,00
        </AvailableLimit>
      </ContainerCurrentInvoice>
        <ContainerSplitPurchases>
          <SplitPurchases style={{ fontFamily: "Poppins-SemiBold" }}>
            Parcelar compras
          </SplitPurchases>
        </ContainerSplitPurchases>
    </Container>
  );
};

export default CardCredit;

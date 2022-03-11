import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, View } from "react-native";
import Emprestimo from "../../assets/emprestimo.png";
import {
  Container,
  ContainerDescription,
  ContainerIcon,
  ContainerTitle,
  Description,
  Title,
} from "./styles";
import * as Font from "expo-font";

const Loan = () => {
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
        <Image source={Emprestimo} />
      </ContainerIcon>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>Empréstimo</Title>
        <Ionicons name="chevron-forward" size={22} color="#777" />
      </ContainerTitle>
      <ContainerDescription>
        <Description style={{ fontFamily: "Poppins-SemiBold" }}>
          Crie um aviso para saber quando um empréstimo ficar disponível.
        </Description>
      </ContainerDescription>
    </Container>
  );
};

export default Loan;

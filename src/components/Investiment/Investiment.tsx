import React from "react";
import { View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Container,
  ContainerDescription,
  ContainerIcon,
  ContainerTitle,
  Description,
  Title,
} from "./styles";
import * as Font from "expo-font";
const Investiment = () => {
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
        <Feather name="bar-chart" size={24} color="black" />
      </ContainerIcon>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>Investimentos</Title>
      <Ionicons name="chevron-forward" size={22} color="#777" />
      </ContainerTitle>
      
      <ContainerDescription>
        <Description style={{ fontFamily: "Poppins-SemiBold" }}>
          O jeito Nu de investir: sem asteriscos, linguagem fácil e a partir de
          R$1. Saiba mais.
        </Description>
      </ContainerDescription>
    </Container>
  );
};

export default Investiment;

import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  ContainerDescription,
  ContainerIcon,
  ContainerTitle,
  Description,
  Title,
} from "./styles";
import * as Font from "expo-font";
const LifeInsurance = () => {
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
        <MaterialIcons name="favorite-border" size={24} color="black" />
      </ContainerIcon>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>Seguro de vida</Title>
        <Ionicons name="chevron-forward" size={22} color="#777" />
      </ContainerTitle>
      <ContainerDescription>
        <Description style={{ fontFamily: "Poppins-SemiBold" }}>
          Conheça Nubank Vida: um seguro simples e que cabe no bolso.
        </Description>
      </ContainerDescription>
    </Container>
  );
};

export default LifeInsurance;

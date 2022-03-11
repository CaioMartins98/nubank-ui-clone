import React from "react";
import { View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Container,
  ContainerDescription,
  ContainerIcon,
  ContainerTitle,
  Description,
  Title,
} from "./styles";
import * as Font from "expo-font";
const Shop = () => {
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
        <MaterialCommunityIcons
          name="shopping-outline"
          size={24}
          color="black"
        />
      </ContainerIcon>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>Shopping</Title>
        <Ionicons name="chevron-forward" size={22} color="#777" />
      </ContainerTitle>
      <ContainerDescription>
        <Description style={{ fontFamily: "Poppins-SemiBold" }}>
          Vantagens exclusivas das nossas marcas preferidas{" "}
        </Description>
      </ContainerDescription>
    </Container>
  );
};

export default Shop;

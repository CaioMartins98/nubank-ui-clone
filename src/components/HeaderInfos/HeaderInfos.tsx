import React from "react";
import { Text, View } from "react-native";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import {
  Container,
  ContainerHelloUser,
  ContainerIcons,
  ContainerOptionsIcon,
  ContainerPersonIcon,
  HelloUser,
} from "./styles";
import * as Font from "expo-font";

const HeaderInfos = () => {
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Container>
      <ContainerIcons>
        <ContainerPersonIcon>
          <AntDesign name="user" size={24} color="#fff" />
        </ContainerPersonIcon>
        <ContainerOptionsIcon>
          <Feather name="eye" size={20} color="#FFF" />
          <AntDesign name="questioncircleo" size={20} color="#FFF" />
          <FontAwesome name="envelope-o" size={20} color="#FFF" />
        </ContainerOptionsIcon>
      </ContainerIcons>
      <ContainerHelloUser>
        <HelloUser style={{ fontFamily: "Poppins-SemiBold" }}>
          Olá, Caio
        </HelloUser>
      </ContainerHelloUser>
    </Container>
  );
};

export default HeaderInfos;

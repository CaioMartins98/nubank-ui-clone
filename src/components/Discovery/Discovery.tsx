import React from "react";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import {
  BgImage,
  ButtonDiscovery,
  ButtonText,
  Container,
  ContainerDescription,
  ContainerDiscovery,
  ContainerTitle,
  Description,
  DescriptionTitle,
  Title,
} from "./styles";
import Discovery1 from "../../assets/discovery1.jpg";
import Discovery2 from "../../assets/discovery2.jpg";
import Discovery3 from "../../assets/discovery3.jpg";
import Discovery4 from "../../assets/discovery4.png";
import * as Font from "expo-font";

interface IDiscovery {
  title: string;
  description: string;
  button: string;
  img: any;
}

const Discovery = () => {
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const discovery: IDiscovery[] = [
    {
      title: "Portabilidade de salário",
      description: "Sua liberdade financeira começa com voce escolhend...",
      button: "Conhecer",
      img: Discovery1,
    },
    {
      title: "Conta PJ",
      description:
        "A gente te ajuda a gerenciar suas finanças de um jeito fácil...",
      button: "Pedir conta PJ",
      img: Discovery2,
    },
    {
      title: "Indique seus amigos",
      description: "Mostre aos seus amigos como é fácil ter uma vida sem...",
      button: "Indicar amigos",
      img: Discovery3,
    },
    {
      title: "WhatsApp",
      description: "Pagamentos seguros, rápidos e sem tarifa. A experiência...",
      button: "Quero conhecer",
      img: Discovery4,
    },
  ];

  return (
    <Container>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>Descubra mais</Title>
      </ContainerTitle>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {discovery.map((item, i) => (
          <View key={i}>
            <ContainerDiscovery>
              <ImageBackground
                resizeMode="cover"
                source={item.img}
                style={{ flex: 1, width: 290, height: 150 }}
                imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
              />
              <ContainerDescription>
                <DescriptionTitle style={{ fontFamily: "Poppins-SemiBold" }}>
                  {item.title}
                </DescriptionTitle>
                <Description style={{ fontFamily: "Poppins-Regular" }}>
                  {item.description}
                </Description>
                <ButtonDiscovery>
                  <ButtonText style={{ fontFamily: "Poppins-SemiBold" }}>
                    {item.button}
                  </ButtonText>
                </ButtonDiscovery>
              </ContainerDescription>
            </ContainerDiscovery>
          </View>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Discovery;

import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import * as Font from "expo-font";
import {
  Amount,
  Container,
  ContainerAmount,
  ContainerInformations,
  ContainerMyCards,
  ContainerOptions,
  ContainerTitle,
  ContainerTitleMyCards,
  Informations,
  InformationText,
  InformationTextEmphasis,
  MyCards,
  Option,
  OptionsField,
  SubtitleOption,
  Title,
  TitleMyCards,
} from "./styles";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import Barras from "../../assets/barras.png";
import Smartphone from "../../assets/smartphone.png";
import Pix from "../../assets/pix.png";
import Donate from "../../assets/donate.png";
import Transfer from "../../assets/transferir.png";
import Deposite from "../../assets/depositar.png";
import Cobrar from "../../assets/cobrar.png";
import Internac from "../../assets/internac.png";

interface IOptions {
  id: string;
  name: string;
  icon: any;
}
const Account = () => {
  const [loaded] = Font.useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const options: IOptions[] = [
    {
      id: "1",
      name: "Área Pix",
      icon: Pix,
    },
    {
      id: "2",
      name: "Pagar",
      icon: Barras,
    },
    {
      id: "3",
      name: "Transferir",
      icon: Transfer,
    },
    {
      id: "4",
      name: "Depositar",
      icon: Deposite,
    },
    {
      id: "5",
      name: "Recarga de celular",
      icon: Smartphone,
    },
    {
      id: "6",
      name: "Cobrar",
      icon: Cobrar,
    },
    {
      id: "7",
      name: "Doação",
      icon: Donate,
    },
    {
      id: "8",
      name: "Transferir Internac.",
      icon: Internac,
    },
  ];

  return (
    <Container>
      <ContainerTitle>
        <Title style={{ fontFamily: "Poppins-SemiBold" }}>Conta</Title>
        <Ionicons name="chevron-forward" size={22} color="#777" />
      </ContainerTitle>
      <ContainerAmount>
        <Amount style={{ fontFamily: "Poppins-SemiBold" }}>
          R$ 1.500.000,00
        </Amount>
      </ContainerAmount>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ContainerOptions>
          {options.map((item, i) => (
            <View key={i}>
              <OptionsField>
                <View style={{ display: "flex", borderColor: "black" }}>
                  {item.id === "5" || item.id === "8" ? (
                    <View style={{ marginTop: "23%" }}>
                      <Option>
                        <Image source={item.icon} />
                      </Option>
                    </View>
                  ) : (
                    <Option>
                      <Image source={item.icon} />
                    </Option>
                  )}
                </View>
                <SubtitleOption style={{ fontFamily: "Poppins-SemiBold" }}>
                  {item.name}
                </SubtitleOption>
              </OptionsField>
            </View>
          ))}
        </ContainerOptions>
      </ScrollView>
      <ContainerMyCards>
        <MyCards>
          <ContainerTitleMyCards>
            <AntDesign name="creditcard" size={20} color="black" />
            <TitleMyCards style={{ fontFamily: "Poppins-SemiBold" }}>
              Meus cartões
            </TitleMyCards>
          </ContainerTitleMyCards>
        </MyCards>
      </ContainerMyCards>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ContainerInformations>
          <Informations>
            <InformationText style={{ fontFamily: "Poppins-Regular" }}>
              Seu{" "}
              <InformationTextEmphasis>
                informe de rendimentos
              </InformationTextEmphasis>{" "}
              2021 já está disponível
            </InformationText>
          </Informations>
          <Informations>
            <InformationText style={{ fontFamily: "Poppins-Regular" }}>
              Conheça a{" "}
              <InformationTextEmphasis>conta PJ</InformationTextEmphasis> :
              prática e livre de burocracia para seu negócio.
            </InformationText>
          </Informations>
          <Informations>
            <InformationText style={{ fontFamily: "Poppins-Regular" }}>
              Invista em{" "}
              <InformationTextEmphasis>
                CDBs escolhidos pelo Nu
              </InformationTextEmphasis>
              , a partir de R$100,00.
            </InformationText>
          </Informations>
          <Informations>
            <InformationText style={{ fontFamily: "Poppins-Regular" }}>
              Salve seus amigos da burocracia.{" "}
              <InformationTextEmphasis>
                Faça um convite para o Nubank.
              </InformationTextEmphasis>
            </InformationText>
          </Informations>
        </ContainerInformations>
      </ScrollView>
    </Container>
  );
};

export default Account;

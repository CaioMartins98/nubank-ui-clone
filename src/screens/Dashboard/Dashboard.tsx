import React from "react";
import { ScrollView, StyleSheet, Text, View, Platform } from "react-native";
import Account from "../../components/Account";
import CardCredit from "../../components/CardCredit/CardCredit";
import Discovery from "../../components/Discovery";
import HeaderInfos from "../../components/HeaderInfos";
import Investiment from "../../components/Investiment";
import LifeInsurance from "../../components/LifeInsurance";
import Loan from "../../components/Loan";
import Shop from "../../components/Shop";
import { Container, Divider } from "./styles";

// import { Container } from './styles';

const Dashborad = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderInfos />
        <Account />
        <Divider />
        <CardCredit />
        <Divider />
        <Loan />
        <Divider />
        <Investiment />
        <Divider />
        <LifeInsurance />
        <Divider />
        <Shop />
        <Divider />
        <Discovery />
      </ScrollView>
    </Container>
  );
};

export default Dashborad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

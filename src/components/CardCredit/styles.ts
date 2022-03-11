import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  width: 100%;
  height: 380px;
`;

export const ContainerIcon = styled.View`
  width: 90%;

  margin-top: 20px;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  margin-top: 10px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #222;
  /* margin-left: 20px; */
`;

export const ContainerCurrentInvoice = styled.View`
  width: 90%;
  height: 130px;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const CurrentInvoice = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Amount = styled.Text`
  font-size: 24px;
  color: #222;
`;

export const AvailableLimit = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const ContainerSplitPurchases = styled.View`
  background: #f0f1f5;
  width: 190px;
  height: 50px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding: 10px ;
  margin-left: 20px;
  margin-top: 25px;
`;

export const SplitPurchases = styled.Text`
  font-size: 18px;
  color: #222;
  
`;

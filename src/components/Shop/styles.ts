import styled from "styled-components/native";

export const Container = styled.View`
  height: 210px;
  width: 100%;
  background: #fff;
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

export const ContainerDescription = styled.View`
  width: 90%;
  height: 50px;
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
`;

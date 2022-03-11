import styled from "styled-components/native";

export const Container = styled.View`
  background: #830ad1;
  /* margin-top: 50px; */
  height: 150px;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerIcons = styled.View`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

export const ContainerPersonIcon = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background: #9b3bdc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerOptionsIcon = styled.View`
  margin-right: -20px;
  width: 180px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerHelloUser = styled.View`
  width: 100%;
  height: 55px;
  margin-top: 20px;
  padding: 12px;
`;

export const HelloUser = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-left: 5px;
`;

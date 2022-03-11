import styled from "styled-components/native";

export const Container = styled.View`
  background: #fff;
  width: 100%;
  height: 550px;
  /* margin-bottom: 150px ; */
  margin-top: 150px;
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

export const ContainerAmount = styled.View`
  width: 100%;
  /* height: 70px; */
  /* margin-bottom:20px ; */
  padding: 20px;
`;

export const Amount = styled.Text`
  font-size: 24px;
  color: #222;
`;

export const ContainerOptions = styled.View`
  width: 100%;
  height: 160px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsField = styled.View`
  height: 160px;

  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  background: #f0f1f5;
  border-radius: 100px;
  margin-bottom: 5px;
  display: flex;
 
  align-items: center;
  justify-content: center;
`;

export const SubtitleOption = styled.Text`
  font-size: 14px;
  margin-top: 10px;
`;

export const ContainerMyCards = styled.View`
  width: 100%;
  height: 100px;

  margin-bottom: 0px;
  padding: 20px;
`;

export const MyCards = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  background: #f0f1f5;
  border-radius: 10px;
`;

export const ContainerTitleMyCards = styled.View`
  width: 200px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const TitleMyCards = styled.Text`
  font-size: 14px;
  color: #222;
`;

export const ContainerInformations = styled.View`
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Informations = styled.TouchableOpacity`
  width: 285px;
  height: 80px;
  background: #f0f1f5;
  border-radius: 10px;
  margin-right: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 18px;
`;

export const InformationText = styled.Text`
  font-size: 14px;
  color: #222;
`;

export const InformationTextEmphasis = styled.Text`
  font-size: 14px;
  color: #830ad1;
`;

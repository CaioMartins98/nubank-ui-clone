import styled from "styled-components/native";


export const Container = styled.View`
  height: 500px;
  width: 100%;
  background: #fff;
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

export const ContainerDiscovery = styled.View`
  width: 290px;
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  border-radius: 8px;
  background-color: #f0f1f5;
  margin-left: 20px;
margin-top: 20px;
  margin-right: 10px;
  /* padding: 12px; */
`;
export const BgImage = styled.View`
  height: 120px;
  width: 250px;

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ContainerDescription = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
export const DescriptionTitle = styled.Text`
  font-size: 16px;
  color: #222;
  /* margin-top: 80px; */
  padding: 12px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #999;
  padding: 12px;
  
`;

export const ButtonDiscovery = styled.TouchableOpacity`
  width: 160px;
  height: 50px;
  border-radius: 100px;
  background: #830ad1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  margin-left: 12px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  padding: 12px;
  /* margin-top: 80px; */
`;

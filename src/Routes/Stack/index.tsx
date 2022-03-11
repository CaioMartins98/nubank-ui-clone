import { RootStackParams } from "./models";
import Dashboard from "../../screens/Dashboard";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header/Header";
import { Platform } from "react-native";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParams>();

const Stack = () => {
  return (
    
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      {Platform.OS === "ios" ? (<Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          // headerBackground: () => <Header />,
          
        }}
      />) : (<Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          // headerBackground: () => <Header />,
          
        }}
      />)}
      
    </Navigator>
  );
};

export default Stack;

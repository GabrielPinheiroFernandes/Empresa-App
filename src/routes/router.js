import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home";
import { headerstyle } from "../constants/headerstyle";
import { Text } from "react-native";
import ListEmp from "../screens/ListEmpresas/listEmp";
import EmpDetail from "../screens/EmpDetail/EmpDetail";
import Blank from "../screens/Blank/blank";

// Declarar o Stack fora do componente Routes
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blank">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ListEmp"
          component={ListEmp}
          options={{ ...headerstyle, title: "Empresas" }}
        />

        <Stack.Screen
          name="EmpDetail"
          component={EmpDetail}
          options={{ ...headerstyle, title: "Empresa" }}
        />
        <Stack.Screen
          name="Blank"
          component={Blank}
          options={{ ...headerstyle, title: "Testes" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

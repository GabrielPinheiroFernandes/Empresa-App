import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home";
import { headerstyle } from "../constants/headerstyle";
import { Text } from "react-native";
import ListEmp from "../screens/ListEmpresas/listEmp";
import EmpDetail from "../screens/EmpDetail/EmpDetail";

// Declarar o Stack fora do componente Routes
const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListEmp">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}
      //   options={{
      //         ...headerstyle, // Inclui todos os estilos importados
      //         headerRight: () => ( // Exceção ou complemento (adiciona algo à direita)
      //         <Text style={{color: 'green', marginRight: 10}}>Right Text</Text>
      //         ),
      //     }}                                                                 
          />

        <Stack.Screen name="ListEmp" component={ListEmp} options={{...headerstyle,title:"Empresas"}}/>
        
        <Stack.Screen name="EmpDetail" component={EmpDetail} options={{...headerstyle,title:"Empresa"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

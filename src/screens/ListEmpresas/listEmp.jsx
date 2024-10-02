import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';
import empresa from '../../api/empresa';
import CardEmp from '../../components/cardEmp/cardEmp';
import { style } from './listEmp.style';
import { useNavigation } from "@react-navigation/native"

export default function ListEmp({route}) {
  const navigator = useNavigation();

  // console.log(route.params)
  // const authtoken = route.params.token
  const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoxLCJpYXQiOjE3Mjc3ODM3NTksImV4cCI6MTcyODc4Mzc1OH0.J0Ak8YJbzNpUuQ5eDQEnD2AsWeQCxOB9vy9UfSsMxuM'
  // console.log(authtoken)
  const [itens, setItens] = useState([]); // Corrigido o useState

  // useEffect para fazer a requisição ao carregar a página
  useEffect(() => {
    async function fetchEmpresas() {
      try {
        const result = await empresa.GetEmpresas(authtoken); // Faz a requisição
        setItens(result); // Define o estado com os itens recebidos
      } catch (error) {
        console.log("Erro ao buscar empresas:", error);
      }
    }
    

    fetchEmpresas();
  }, []); // Executa apenas uma vez ao montar o componente

  
  return (
      <View style={style.container}>
      <FlatList
        data={itens} // Dados a serem renderizados
        style={style.flatList}
        keyExtractor={(item, index) => index.toString()} // Garante uma key única
        renderItem={({ item }) => <CardEmp data={item} OnPress={()=>{
          navigator.navigate('EmpDetail',{id_empresa:item.ID,title:item.RAZAO_SOCIAL,Token:authtoken})
        }}/>}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // Define um espaço de 10px entre os itens
      />
      <StatusBar style="auto" />
    </View>
  );
}

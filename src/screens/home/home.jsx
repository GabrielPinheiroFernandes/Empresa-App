import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import { style } from "./home.style";
import InputText from "../../components/inputBox/inputBox.jsx";
import icons from "../../constants/icons.js";
import { color } from "../../constants/theme.js";
import { useState } from "react";
import Usuario from "../../api/Usuario.js";
import { useNavigation } from "@react-navigation/native";

function Home(){
    const navigator = useNavigation();

    const [email,setEmail] = useState();    
    const [senha,setSenha] = useState();  

    async function Login(ema,sen){
        const ok = await Usuario.GetUsuario(ema,sen)

        
        if (ok.Erro) {
            Alert.alert('Erro', ok.Erro);  
        } else if (ok.ID) {

            navigator.navigate('ListEmp',{ token: ok.token,ID_Usuario:ok.ID });  // A navegação está correta
        } else {
            Alert.alert('Erro', 'Alguma coisa deu errado ao tentar entrar');  // Título e mensagem para o alerta genérico
        }
    }



    return <>
        <View style={style.container}>
           <Text style={style.header}>Login</Text>
           <View style={{width:"100%",gap:10}}>
                <InputText placeholder='example@hotmail.com' label='Email' image={icons.mail} onChangeText={setEmail}/>
                <InputText placeholder='*****' label='Senha' image={icons.lock} pass onChangeText={setSenha}/>
                <Button 
                    title="Entrar"  // Texto do botão
                    onPress={() => {
                        // console.log("Botão pressionado",email,senha)
                        Login(email,senha);
                    }}  // Ação ao pressionar
                    color={color.secondary} // Cor do botão (opcional)
                />
           </View>
           <TouchableOpacity>
                <Text style={style.cadastro}>Cadastrar-se</Text>
           </TouchableOpacity>
        </View>
    </>
}

export default Home;
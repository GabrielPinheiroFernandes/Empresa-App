import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { style } from "./InputpesqBox.style"
import { color } from "../../constants/theme"
import icons from "../../constants/icons"

function InputPesqBox(props){

    return <View style={style.container}>
        {props.label && <Text style={style.label}>{props.label}</Text>}
        {/* Se a props Image for passada transforma o component para que a imagem seja alocada na esquerda */}
        <View style={style.containerPesq}>
            <TextInput 
                style={[style.inputBox,{height:30}]} 
                placeholderTextColor={color.placeholder} 
                placeholder={props.placeholder}
                secureTextEntry={props.pass ? true : false} 
                onChangeText={(texto) => props.onChangeText(texto)}
                value={Number.isInteger(props.value) ? String(props.value) : props.value} //validação pois quando o numero é um inteiro o componente não o intende bem 
                readOnly={props.readOnly}
            />
            <TextInput 
                style={[style.descbox,{height:30}]} 
                placeholderTextColor={color.placeholder} 
                placeholder={props.placeholder}
                secureTextEntry={props.pass ? true : false} 
                onChangeText={(texto) => props.onChangeText(texto)}
                value={Number.isInteger(props.valueResp) ? String(props.value) : props.valueResp} //validação pois quando o numero é um inteiro o componente não o intende bem 
                readOnly={true}
            />
            <TouchableOpacity style={style.button}>
                <Image source={icons.search} style={[style.image]}/>
            </TouchableOpacity>
          
        </View>
            
    </View>
}

export default InputPesqBox
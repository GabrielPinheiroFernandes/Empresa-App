import { Image, Text, TextInput, View } from "react-native"
import { style } from "./inputBox.style"
import { color } from "../../constants/theme"

function InputText(props){

    return <View style={style.container}>
        {props.label && <Text style={style.label}>{props.label}</Text>}
        {/* Se a props Image for passada transforma o component para que a imagem seja alocada na esquerda */}
        {props.image 
        ? <View style={style.row}>
            <Image 
                source={props.image} 
                style={style.image}
            />
            <TextInput 
                style={[style.inputBox,{flex:1}]} 
                placeholderTextColor={color.placeholder} 
                placeholder={props.placeholder} 
                secureTextEntry={props.pass ? true : false}
                onChangeText={(texto) => props.onChangeText(texto)}
                value={Number.isInteger(props.value) ? String(props.value) : props.value} 
                readOnly={props.readOnly}
                

            />
          </View> 
        : <TextInput 
                style={[style.inputBox,{height:30}]} 
                placeholderTextColor={color.placeholder} 
                placeholder={props.placeholder}
                secureTextEntry={props.pass ? true : false} 
                onChangeText={(texto) => props.onChangeText(texto)}
                value={Number.isInteger(props.value) ? String(props.value) : props.value} //validação pois quando o numero é um inteiro o componente não o intende bem 
                readOnly={props.readOnly}
          />
        }     
    </View>
}

export default InputText
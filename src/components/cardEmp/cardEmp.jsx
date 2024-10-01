import { Image, Text, TouchableOpacity, View } from "react-native"
import { style } from "./cardEmp.style"
import cnpj from "node-cnpj"
import icons from "../../constants/icons"

function CardEmp(props){
    // console.log(props.data)
    const cnpjMasked = cnpj.mask(props.data.CNPJ)

    return <View style={style.container}>
        <TouchableOpacity style={[style.arrow]} onPress={props.OnPress}>
            <Image source={icons.arrowRight} style={style.image}/>
        </TouchableOpacity>
        <View style={[style.data]}>
            <Text style={[style.text]}>Empresa: {props.data.ID+'-'+props.data.RAZAO_SOCIAL}</Text>
            <Text style={[style.text]}>Nome Fantasia: {props.data.NOME_FANTASIA}</Text>
            <Text style={[style.text]}>CNPJ: {cnpjMasked}</Text>
        </View>
    </View>
}

export default CardEmp
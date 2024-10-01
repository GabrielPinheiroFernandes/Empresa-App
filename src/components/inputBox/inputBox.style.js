import { StyleSheet } from "react-native";
import { color, fontSize } from "../../constants/theme";

export const style = StyleSheet.create({
    container: {
        // alignItems: 'center',
        width:'100%',
        // justifyContent: 'center', // Adicione isso se quiser centralizar também verticalmente
        backgroundColor: color.background, // Supondo que você tenha um valor para a cor de fundo
        borderRadius: 5,
        borderColor: color.primary,
        borderWidth: 3, // Adicione isso para que a borda seja visível
        padding:8
    },
    label:{
        color: color.primary,
        fontSize:fontSize.medium,
        fontWeight:"bold",
        paddingLeft:4
    },
    inputBox:{
        borderWidth:2,
        borderRadius: 5,
        color:color.secondary,
        paddingLeft:6,
        borderColor:color.primary,

    },
    image:{
        height:32,
        width:32
    },
    row:{
        flexDirection:"row",
        
    }
})
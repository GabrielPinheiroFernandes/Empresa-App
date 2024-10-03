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
    image:{
        height:32,
        width:32
    },
    row:{
        flexDirection:"row",
        
    },
    containerPesq:{
        flexDirection:"row",
        gap:10
    },
    inputBox:{
        borderWidth:2,
        borderRadius: 5,
        color:color.darkgreen,
        paddingLeft:6,
        borderColor:color.primary,
        width:'13%',
        backgroundColor:color.background
    },
    descbox:{
        borderWidth:2,
        borderRadius: 5,
        color:color.black,
        paddingLeft:6,
        borderColor:color.primary,
        flex:1,
        backgroundColor:color.whitegreen
    },
    image:{
        width:30,
        height:30,
        borderWidth:1,
        borderColor:color.borderdarkgreen
    },
    button:{
        backgroundColor:color.graygreen,
    }
})
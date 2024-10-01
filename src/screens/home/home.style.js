import { StyleSheet } from "react-native";
import { color, fontSize } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:"space-around",
        color:color.background,
        padding:10
    },
    header: {
        fontSize: fontSize.xxl,  // Tamanho grande para destaque
        color: color.accent,     // Cor de destaque para chamar atenção
        fontWeight: "bold",      // Negrito para enfatizar
        fontFamily: "sans-serif", // Uma fonte mais moderna, pode alterar conforme o gosto
        letterSpacing: 1.5,      // Espaçamento entre letras para um visual mais elegante
        textTransform: "uppercase", // Texto em maiúsculas para estilo e ênfase
        textAlign: "center",     // Centralizado horizontalmente
        marginVertical: 20,      // Espaçamento acima e abaixo
        textShadowColor: "#00000033", // Sombra sutil para profundidade
        textShadowOffset: { width: 2, height: 2 }, // Posição da sombra
        textShadowRadius: 5,     // Borrão na sombra para suavidade
    },
    cadastro:{
        color:color.secondary,
        textDecorationLine: "underline",
    }
})
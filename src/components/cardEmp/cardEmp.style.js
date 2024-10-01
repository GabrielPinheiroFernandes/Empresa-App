import { FlatList, StyleSheet } from "react-native";
import { color, fontSize } from "../../constants/theme";

export const style = StyleSheet.create({
    container: {
       flex:1, 
       borderWidth:1,
       borderColor:color.accent,
       borderRadius:4,
       flexDirection:"row",
    },
    text:{
        color:color.darkgreen,
        fontSize:fontSize.medium,
        fontWeight:"500"
    },
    arrow:{
        backgroundColor:color.accent,
        width:"15%",
        alignItems:"center",
        justifyContent:"center"
    },
    data:{
        padding:5,

    },
    image:{
        width:32,
        height:32
    }
    
})
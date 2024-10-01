import { StyleSheet } from "react-native";
import { color, fontSize } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:color.background,
        padding:10
    },
    flatList:{
        width:"100%",
        
        
    },
    button:{
        backgroundColor:color.primary
    }
    
})
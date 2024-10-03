import { StyleSheet } from "react-native";
import { color, fontSize } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.background,
  
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 20,
    },
    spinner: {
        paddingTop: 20,
    },
    loadingText: {
        fontSize: 16,
        color: '#333',
    },
})
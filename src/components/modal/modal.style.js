import { StyleSheet } from "react-native";
import { color, fontSize } from "../../constants/theme";

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: "black",
      },
      contentContainer: {
        padding: 25,
        flexGrow: 1, // Adicione isso para garantir que o conteúdo ocupe o espaço disponível
    
      },
      itemContainer: {
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: 'white',
      },
      itemText: {
        color: "white",
      },
    
})
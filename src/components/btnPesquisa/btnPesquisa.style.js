import { StyleSheet } from "react-native";
import { color } from "../../constants/theme";

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1, // Ocupa toda a altura disponível
    justifyContent: "space-between", // Distribui o conteúdo
    backgroundColor: "black",
    padding: 20,
  },
  closeButton: {
    backgroundColor: color.primary,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  flatListContainer: {
    flex: 1, // Flexível para ocupar o espaço restante entre o título e o botão
    marginTop: 20,
  },
  loadingText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  modal: {
    borderWidth: 2, // Largura da borda
    borderColor: color.primary, // Cor da borda
    borderRadius: 10, // Arredondamento das bordas
    overflow: 'hidden', // Esconde o conteúdo que sair do modal
    flex:1
  }
});

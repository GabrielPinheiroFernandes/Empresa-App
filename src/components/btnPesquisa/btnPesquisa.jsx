import React, { useRef, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { styles } from "./btnPesquisa.style";
import { color } from "../../constants/theme";
import axios from "axios";
import path from "../../constants/PathAPI";
import { ScrollView } from "react-native-web";

// Obtém a altura da tela
const screenHeight = Dimensions.get("screen").height;
console.log(screenHeight);
function BtnPesquisa(props) {
  const modalizeRef = useRef(null);
  const [flatListData, setFlatListData] = useState([]); // Definir estado para os dados do FlatList
  const [loading, setLoading] = useState(true); // Definir estado para carregamento

  useEffect(() => {
    if (props.show) {
      modalizeRef.current?.open(); // Abre o modal se show for true
    } else {
      modalizeRef.current?.close(); // Fecha o modal se show for false
    }
  }, [props.show]);

  // Função para buscar dados da API
  const fetchData = async () => {
    if (props.data && props.route && props.data.token) {
      try {
        const response = await axios.get(path + props.route, {
          headers: {
            Authorization: `Bearer ${props.data.token}`, // Adiciona o Bearer token no cabeçalho
          },
        }); // Faz a requisição usando a rota recebida por props
        setFlatListData(response.data); // Armazena a resposta no estado
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    } else {
      console.log("Rota ou token não informados");
    }
  };

  // Chama a função fetchData quando o modal é exibido
  useEffect(() => {
    if (props.show) {
      fetchData();
    }
  }, [props.show]);

  return (
    <Modalize
      ref={modalizeRef}
      // modalHeight={screenHeight} // Define a altura do modal para ocupar a altura total da tela
      handlePosition="outside"
      overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClosed={props.onClose} // Chama a função onClose quando o modal é fechado
      modalStyle={styles.modal}
    >
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={{ color: "white", fontSize: 18, paddingBottom: 10 }}>
            Conteúdo do modal
          </Text>

          {/* Exibe o FlatList se os dados já foram carregados */}
          {!loading ? (
            <View style={styles.flatListContainer}>
              <FlatList
                data={flatListData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: color.background }}>
                      {item.title}
                    </Text>
                  </View>
                )}
              />
            </View>
          ) : (
            <Text style={styles.loadingText}>Carregando...</Text> // Texto de carregamento
          )}

          <TouchableOpacity style={styles.closeButton} onPress={props.onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modalize>
  );
}

export default BtnPesquisa;

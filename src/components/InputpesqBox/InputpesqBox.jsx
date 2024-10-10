import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./InputpesqBox.style";
import { color } from "../../constants/theme";
import BtnPesquisa from "../btnPesquisa/btnPesquisa";
import icons from "../../constants/icons";

function InputPesqBox(props) {
  const [showModal, setShowModal] = useState(false); // Estado do modal

  const toggleModalStatus = () => {
    setShowModal(true); // Abre o modal
  };

  const closeModal = () => {
    setShowModal(false); // Fecha o modal
  };

  return (
    <>
      <View style={style.container}>
        {props.label && <Text style={style.label}>{props.label}</Text>}
        <View style={style.containerPesq}>
          <TextInput
            style={[style.inputBox, { height: 30 }]}
            placeholderTextColor={color.placeholder}
            placeholder={props.placeholder}
            secureTextEntry={props.pass}
            onChangeText={(texto) => props.onChangeText(texto)}
            value={
              Number.isInteger(props.value) ? String(props.value) : props.value
            }
            editable={!props.readOnly}
          />
          <TextInput
            style={[style.descbox, { height: 30 }]}
            placeholderTextColor={color.placeholder}
            placeholder={props.placeholder}
            secureTextEntry={props.pass}
            value={
              Number.isInteger(props.valueResp)
                ? String(props.valueResp)
                : props.valueResp
            }
            editable={false}
          />
          <TouchableOpacity onPress={toggleModalStatus}>
            <Image source={icons.search} style={style.image} />
          </TouchableOpacity>
        </View>
      </View>

      <BtnPesquisa
        show={showModal} // Passando a prop para controlar a visibilidade
        onClose={closeModal} // Função para fechar o modal
        data={props.data}
        modalcontenttest={props.modalcontenttest}
      />
    </>
  );
}

export default InputPesqBox;

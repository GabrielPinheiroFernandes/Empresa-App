import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Modal from "../../components/modal/modal";
import empresa from "../../api/empresa";
import Usuario from "../../api/Usuario";
import BtnPesquisa from "../../components/btnPesquisa/btnPesquisa";
import InputPesqBox from "../../components/InputpesqBox/InputpesqBox";
import { Modalize } from "react-native-modalize";

function Blank() {
  const [empresas, setEmpresas] = useState([]);
  const [usr, setUsr] = useState([]);
  const [showModalEmp, setShowModalEmp] = useState(false);
  const [showModalUsr, setShowModalUsr] = useState(false);

  const [showModal, showModa] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoxLCJpYXQiOjE3Mjc3ODM3NTksImV4cCI6MTcyODc4Mzc1OH0.J0Ak8YJbzNpUuQ5eDQEnD2AsWeQCxOB9vy9UfSsMxuM";

  async function GetData() {
    try {
      const dataF = await empresa.GetEmpresas(token);
      const usrF = await Usuario.GetUsuario("ADMIN", "123");

      // console.log(token);
      setEmpresas(dataF);
      setUsr(usrF);
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <View style={{backgroundColor:'#fff'}}>
      <InputPesqBox
        modalcontenttest="empresas"
        label="empresas"
        placeholder="empresas"
        route="empresas"
        data={{ token: token, data: {} }}
      />
      <InputPesqBox
        modalcontenttest="abner"
        label="abner"
        placeholder="abnerplaceholder"
        route="fornecedor"
      />
    </View>
  );
}

export default Blank;

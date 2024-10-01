import { Button, ScrollView, View } from "react-native";
import { style } from "./EmpDetail.style";
import { useEffect, useState } from "react"; // Importando useState
import { useNavigation } from "@react-navigation/native";
import empresa from "../../api/empresa";
import InputText from "../../components/inputBox/inputBox"; // Importação corrigida

function EmpDetail({ route }) {
    const navigation = useNavigation();
    const { id_empresa, title, Token } = route.params;
    const [data, setData] = useState(null); // Estado para armazenar os dados da empresa
    const [editable, setEditable] = useState(true); // Estado para definir se os campos são editáveis ou não

    // Setando o useEffect para colocar o título lá em cima 
    useEffect(() => {
        const fetchData = async () => {
            if (title) {
                const newTitle = id_empresa + '-' + title; 
                navigation.setOptions({ title: newTitle });

                // Fazendo a requisição e armazenando os dados
                const result = await empresa.GetEmpresa(id_empresa, Token);
                setData(result); // Armazenando os dados no estado
            }
        };

        fetchData(); // Chama a função para buscar os dados
    }, [navigation, title, id_empresa, Token]); // Adicionando as dependências

    return (
        <View style={style.container}>
            <Button 
                title="Console Log empresa" 
                onPress={() => {        
                    console.log(data); // Acessando os dados armazenados
                    if (data) {
                        console.log(data); // Exibe os dados no console
                        console.log(data.CODIGO_IBGE_CIDADE)
                        setEditable(!editable)
                    } else {
                        console.log("Nenhum dado disponível."); // Mensagem caso data não tenha sido carregada
                    }
                }} 
            />
            <ScrollView style={{ width: '100%' }}>
                {data && ( // Renderiza os campos apenas se os dados estiverem disponíveis
                    <>
                        <InputText label='ID Responsável Sócio' value={data.ID_RESPONSAVEL_SOCIO} readOnly={editable} />
                        <InputText label='ID Matriz' value={data.ID_MATRIZ} readOnly={editable} />
                        <InputText label='ID Sindicato Patronal' value={data.ID_SINDICATO_PATRONAL} readOnly={editable} />
                        <InputText label='ID FPAS' value={data.ID_FPAS} readOnly={editable} />
                        <InputText label='ID Contador' value={data.ID_CONTADOR} readOnly={editable} />
                        <InputText label='Razão Social' value={data.RAZAO_SOCIAL} readOnly={editable} />
                        <InputText label='Nome Fantasia' value={data.NOME_FANTASIA} readOnly={editable} />
                        <InputText label='CNPJ' value={data.CNPJ} readOnly={editable} />
                        <InputText label='Inscrição Estadual' value={data.INSCRICAO_ESTADUAL} readOnly={editable} />
                        <InputText label='Inscrição Estadual ST' value={data.INSCRICAO_ESTADUAL_ST} readOnly={editable} />
                        <InputText label='Inscrição Municipal' value={data.INSCRICAO_MUNICIPAL} readOnly={editable} />
                        <InputText label='Inscrição Junta Comercial' value={data.INSCRICAO_JUNTA_COMERCIAL} readOnly={editable} />
                        <InputText label='Data Inscrição Junta Comercial' value={data.DATA_INSC_JUNTA_COMERCIAL} readOnly={editable} />
                        <InputText label='Tipo' value={data.TIPO} readOnly={editable} />
                        <InputText label='Data Cadastro' value={data.DATA_CADASTRO} readOnly={editable} />
                        <InputText label='Data Início Atividades' value={data.DATA_INICIO_ATIVIDADES} readOnly={editable} />
                        <InputText label='Suframa' value={data.SUFRAMA} readOnly={editable} />
                        <InputText label='Email' value={data.EMAIL} readOnly={editable} />
                        <InputText label='Imagem Logotipo' value={data.IMAGEM_LOGOTIPO} readOnly={editable} />
                        <InputText label='CRT' value={data.CRT} readOnly={editable} />
                        <InputText label='Tipo Regime' value={data.TIPO_REGIME} readOnly={editable} />
                        <InputText label='Aliquota PIS' value={data.ALIQUOTA_PIS} readOnly={editable} />
                        <InputText label='Contato' value={data.CONTATO} readOnly={editable} />
                        <InputText label='Aliquota COFINS' value={data.ALIQUOTA_COFINS} readOnly={editable} />
                        <InputText label='Código IBGE Cidade' value={data.CODIGO_IBGE_CIDADE} readOnly={editable} />
                        <InputText label='Código IBGE UF' value={data.CODIGO_IBGE_UF} readOnly={editable} />
                        <InputText label='Código Terceiros' value={data.CODIGO_TERCEIROS} readOnly={editable} />
                        <InputText label='Código GPS' value={data.CODIGO_GPS} readOnly={editable} />
                        <InputText label='Aliquota SAT' value={data.ALIQUOTA_SAT} readOnly={editable} />
                    </>
                )}
            </ScrollView>
        </View>
    );
}

export default EmpDetail;

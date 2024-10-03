import { Button, ScrollView, View } from "react-native";
import { style } from "./EmpDetail.style";
import { useEffect, useState } from "react"; 
import { useNavigation } from "@react-navigation/native";
import empresa from "../../api/empresa";
import InputText from "../../components/inputBox/inputBox";
import cnpjLib from 'node-cnpj';
import Loading from "../../components/Loading/Loading";
import InputPesqBox from "../../components/InputpesqBox/InputpesqBox";


function EmpDetail({ route }) {
    const navigation = useNavigation();
    const { id_empresa, title, Token } = route.params;
    const [data, setData] = useState(null); 
    const [editable, setEditable] = useState(true); 
    
    //estados de carregamento
    const [loading, setLoading] = useState(true); // Estado de carregamento


    // Estados individuais
    const [ID_RESPONSAVEL_SOCIO, setID_RESPONSAVEL_SOCIO] = useState('');
    const [socioName, setsocioName] = useState('');

    const [ID_MATRIZ, setID_MATRIZ] = useState('');
    const [matrizRazaoSocial, setmatrizRazaoSocial] = useState('');
    
    const [ID_SINDICATO_PATRONAL, setID_SINDICATO_PATRONAL] = useState('');
    const [sindicatoName, setsindicatoName] = useState('');
    
    const [ID_FPAS, setID_FPAS] = useState('');
    const [descricaoFpas, setdescricaoFpas] = useState('');
    
    const [ID_CONTADOR, setID_CONTADOR] = useState('');
    const [contadorName, setcontadorName] = useState('');
    
    const [RAZAO_SOCIAL, setRAZAO_SOCIAL] = useState('');
    const [NOME_FANTASIA, setNOME_FANTASIA] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [INSCRICAO_ESTADUAL, setINSCRICAO_ESTADUAL] = useState('');
    const [INSCRICAO_ESTADUAL_ST, setINSCRICAO_ESTADUAL_ST] = useState('');
    const [INSCRICAO_MUNICIPAL, setINSCRICAO_MUNICIPAL] = useState('');
    const [INSCRICAO_JUNTA_COMERCIAL, setINSCRICAO_JUNTA_COMERCIAL] = useState('');
    const [DATA_INSC_JUNTA_COMERCIAL, setDATA_INSC_JUNTA_COMERCIAL] = useState('');
    const [TIPO, setTIPO] = useState('');
    const [DATA_CADASTRO, setDATA_CADASTRO] = useState('');
    const [DATA_INICIO_ATIVIDADES, setDATA_INICIO_ATIVIDADES] = useState('');
    const [SUFRAMA, setSUFRAMA] = useState('');
    const [EMAIL, setEMAIL] = useState('');
    const [IMAGEM_LOGOTIPO, setIMAGEM_LOGOTIPO] = useState('');
    const [CRT, setCRT] = useState('');
    const [TIPO_REGIME, setTIPO_REGIME] = useState('');
    const [ALIQUOTA_PIS, setALIQUOTA_PIS] = useState('');
    const [CONTATO, setCONTATO] = useState('');
    const [ALIQUOTA_COFINS, setALIQUOTA_COFINS] = useState('');
    const [CODIGO_IBGE_CIDADE, setCODIGO_IBGE_CIDADE] = useState('');
    const [CODIGO_IBGE_UF, setCODIGO_IBGE_UF] = useState('');
    const [CODIGO_TERCEIROS, setCODIGO_TERCEIROS] = useState('');
    const [CODIGO_GPS, setCODIGO_GPS] = useState('');
    const [ALIQUOTA_SAT, setALIQUOTA_SAT] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Inicia o carregamento

                if (title) {
                    const newTitle = id_empresa + '-' + title;
                    navigation.setOptions({ title: newTitle });

                    // Fazendo a requisição e armazenando os dados
                    const result = await empresa.GetEmpresa(id_empresa, Token);
                    setData(result);

                    // Setando as constantes de valor
                    setID_RESPONSAVEL_SOCIO(result.ID_RESPONSAVEL_SOCIO);
                    setsocioName(result.socioName);

                    setID_MATRIZ(result.ID_MATRIZ);
                    setmatrizRazaoSocial(result.matrizRazaoSocial);

                    setID_SINDICATO_PATRONAL(result.ID_SINDICATO_PATRONAL);
                    setsindicatoName(result.sindicatoName);

                    setID_FPAS(result.ID_FPAS);
                    setdescricaoFpas(result.descricaoFpas);

                    setID_CONTADOR(result.ID_CONTADOR);
                    setcontadorName(result.contadorName);
                    

                    // Formatando o CNPJ que vem sem máscara do banco
                    const cnpjFormated = cnpjLib.mask(result.CNPJ);
                    setCNPJ(cnpjFormated);
                    setRAZAO_SOCIAL(result.RAZAO_SOCIAL);
                    setNOME_FANTASIA(result.NOME_FANTASIA);
                    setINSCRICAO_ESTADUAL(result.INSCRICAO_ESTADUAL);
                    setINSCRICAO_ESTADUAL_ST(result.INSCRICAO_ESTADUAL_ST);
                    setINSCRICAO_MUNICIPAL(result.INSCRICAO_MUNICIPAL);
                    setINSCRICAO_JUNTA_COMERCIAL(result.INSCRICAO_JUNTA_COMERCIAL);
                    setDATA_INSC_JUNTA_COMERCIAL(result.DATA_INSC_JUNTA_COMERCIAL);
                    setTIPO(result.TIPO);
                    setDATA_CADASTRO(result.DATA_CADASTRO);
                    setDATA_INICIO_ATIVIDADES(result.DATA_INICIO_ATIVIDADES);
                    setSUFRAMA(result.SUFRAMA);
                    setEMAIL(result.EMAIL);
                    setIMAGEM_LOGOTIPO(result.IMAGEM_LOGOTIPO);
                    setCRT(result.CRT);
                    setTIPO_REGIME(result.TIPO_REGIME);
                    setALIQUOTA_PIS(result.ALIQUOTA_PIS);
                    setCONTATO(result.CONTATO);
                    setALIQUOTA_COFINS(result.ALIQUOTA_COFINS);
                    setCODIGO_IBGE_CIDADE(result.CODIGO_IBGE_CIDADE);
                    setCODIGO_IBGE_UF(result.CODIGO_IBGE_UF);
                    setCODIGO_TERCEIROS(result.CODIGO_TERCEIROS);
                    setCODIGO_GPS(result.CODIGO_GPS);
                    setALIQUOTA_SAT(result.ALIQUOTA_SAT);
                }
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        };

        fetchData(); // Chama a função para buscar os dados
    }, [navigation, title, id_empresa, Token]);

    return (
        <View style={style.container}>
            <Button
                title="Console Log empresa"
                onPress={() => {
                    console.log(data);
                    setEditable(!editable);
                }}
            />
            {/* // Mostra o componente de carregamento enquanto `loading` for `true` */}
            { loading 
            ? ( <Loading /> ) 
            : ( <ScrollView style={{ width: '100%'}}>       
                    <InputPesqBox label='ID Responsável Sócio' value={ID_RESPONSAVEL_SOCIO} valueResp={socioName} readOnly={editable} onChangeText={setID_RESPONSAVEL_SOCIO}/>
                    <InputPesqBox label='ID Matriz' value={ID_MATRIZ} valueResp={matrizRazaoSocial} readOnly={editable} onChangeText={setID_MATRIZ}/>
                    <InputPesqBox label='ID Sindicato Patronal' value={ID_SINDICATO_PATRONAL} valueResp={sindicatoName} readOnly={editable} onChangeText={setID_SINDICATO_PATRONAL}/>
                    <InputPesqBox label='ID FPAS' value={ID_FPAS} valueResp={descricaoFpas} readOnly={editable} onChangeText={setID_FPAS}/>
                    <InputPesqBox label='ID Contador' value={ID_CONTADOR} valueResp={contadorName} readOnly={editable} onChangeText={setID_CONTADOR}/>
                    <InputText label='Razão Social' value={RAZAO_SOCIAL} readOnly={editable} onChangeText={setRAZAO_SOCIAL}/>
                    <InputText label='Nome Fantasia' value={NOME_FANTASIA} readOnly={editable} onChangeText={setNOME_FANTASIA}/>
                    <InputText label='CNPJ' value={CNPJ} readOnly={editable} onChangeText={setCNPJ}/>
                    <InputText label='Inscrição Estadual' value={INSCRICAO_ESTADUAL} readOnly={editable} onChangeText={setINSCRICAO_ESTADUAL}/>
                    <InputText label='Inscrição Estadual ST' value={INSCRICAO_ESTADUAL_ST} readOnly={editable} onChangeText={setINSCRICAO_ESTADUAL_ST}/>
                    <InputText label='Inscrição Municipal' value={INSCRICAO_MUNICIPAL} readOnly={editable} onChangeText={setINSCRICAO_MUNICIPAL}/>
                    <InputText label='Inscrição Junta Comercial' value={INSCRICAO_JUNTA_COMERCIAL} readOnly={editable} onChangeText={setINSCRICAO_JUNTA_COMERCIAL}/>
                    <InputText label='Data Inscrição Junta Comercial' value={DATA_INSC_JUNTA_COMERCIAL} readOnly={editable} onChangeText={setDATA_INSC_JUNTA_COMERCIAL}/>
                    <InputText label='Tipo' value={TIPO} readOnly={editable} onChangeText={setTIPO}/>
                    <InputText label='Data Cadastro' value={DATA_CADASTRO} readOnly={editable} onChangeText={setDATA_CADASTRO}/>
                    <InputText label='Data Início Atividades' value={DATA_INICIO_ATIVIDADES} readOnly={editable} onChangeText={setDATA_INICIO_ATIVIDADES}/>
                    <InputText label='Suframa' value={SUFRAMA} readOnly={editable} onChangeText={setSUFRAMA}/>
                    <InputText label='Email' value={EMAIL} readOnly={editable} onChangeText={setEMAIL}/>
                    <InputText label='Imagem Logotipo' value={IMAGEM_LOGOTIPO} readOnly={editable} onChangeText={setIMAGEM_LOGOTIPO}/>
                    <InputText label='CRT' value={CRT} readOnly={editable} onChangeText={setCRT}/>
                    <InputText label='Tipo Regime' value={TIPO_REGIME} readOnly={editable} onChangeText={setTIPO_REGIME}/>
                    <InputText label='Aliquota Pis' value={ALIQUOTA_PIS} readOnly={editable} onChangeText={setALIQUOTA_PIS}/>
                    <InputText label='Contato' value={CONTATO} readOnly={editable} onChangeText={setCONTATO}/>
                    <InputText label='Aliquota Cofins' value={ALIQUOTA_COFINS} readOnly={editable} onChangeText={setALIQUOTA_COFINS}/>
                    <InputText label='Código IBGE Cidade' value={CODIGO_IBGE_CIDADE} readOnly={editable} onChangeText={setCODIGO_IBGE_CIDADE}/>
                    <InputText label='Código IBGE UF' value={CODIGO_IBGE_UF} readOnly={editable} onChangeText={setCODIGO_IBGE_UF}/>
                    <InputText label='Código Terceiros' value={CODIGO_TERCEIROS} readOnly={editable} onChangeText={setCODIGO_TERCEIROS}/>
                    <InputText label='Código GPS' value={CODIGO_GPS} readOnly={editable} onChangeText={setCODIGO_GPS}/>
                    <InputText label='Aliquota SAT' value={ALIQUOTA_SAT} readOnly={editable} onChangeText={setALIQUOTA_SAT}/>
                </ScrollView>
              )
            }
        </View>
    );
}

export default EmpDetail;

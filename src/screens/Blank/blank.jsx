import Loading from "../../components/Loading/Loading";
import InputPesqBox from "../../components/InputpesqBox/InputpesqBox";
import InputMask from "../../components/inputMask/inputMask";
import { useState } from "react";
import ComboBox from "../../components/comboBox/comboBox";

function Blank() {
    // const dropdownData = [
    //     { label: 'São Paulo', value: 'sp' },
    //     { label: 'Rio de Janeiro', value: 'rj' },
    //     { label: 'Minas Gerais', value: 'mg' },
    //     { label: 'Bahia', value: 'ba' },
    //     { label: 'Santa Catarina', value: 'sc' },
    //     { label: 'Paraná', value: 'pr' },
    //     { label: 'Rio Grande do Sul', value: 'rs' },
    //     { label: 'Pernambuco', value: 'pe' },
    //     { label: 'Ceará', value: 'ce' },
    // ];

    const [selectedState, setSelectedState] = useState(''); // Estado para armazenar o estado selecionado

    return (
        <>
            {/* <Loading /> */}
            {/* <InputPesqBox label="Colaborador: " /> */}
            {/* <InputMask value={teste} onChangeText={setTeste} mask='cpf' label='abner' /> */}
            {/* <ComboBox 
                data={dropdownData} // Passa os dados do dropdown
                value={selectedState} // Passa o valor selecionado
                onChangeText={(texto)=>{
                    // console.log(texto),
                    setSelectedState(texto)
                }} // Atualiza o estado ao selecionar uma opção
                
                label="Selecione um Estado" // Adicione uma label se necessário
            /> */}
        </>
    );
}

export default Blank;

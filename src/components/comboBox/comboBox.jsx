import { Text, View } from "react-native";
import { style } from "./comboBox.style";
import { Dropdown } from "react-native-element-dropdown";
import { useEffect, useState } from "react";

function ComboBox(props) {
    const [selectedValue, setSelectedValue] = useState(props.value || null); // Armazenar valor selecionado

    // Atualiza o estado quando props.value muda
    useEffect(() => {
        setSelectedValue(props.value); 
    }, [props.value]);

    const handleChange = (item) => {
        setSelectedValue(item.value); // Atualiza o estado local
        props.onChangeText(item.value); // Chama a função de mudança do componente pai
    };

    // Busca o label correspondente ao valor selecionado
    const selectedItem = props.data.find(item => item.value === selectedValue);

    return (
        <View style={style.container}>
            {props.label && <Text style={style.label}>{props.label}</Text>}
            {props.readOnly ? (
                // Quando readOnly for true, exiba o valor selecionado como texto
                <Text style={[style.inputBox, { height: 40, lineHeight: 40}]}>
                    {selectedItem ? selectedItem.label : "Nenhum estado selecionado"}
                </Text>
            ) : (
                // Renderiza o Dropdown normalmente se não for readOnly
                <Dropdown
                    style={[style.inputBox, { height: 40 }]} // Ajuste a altura conforme necessário
                    placeholder="Selecione um estado" // Texto do placeholder
                    data={props.data} // Passa a data do Dropdown como prop
                    labelField="label" // Define o campo de exibição
                    valueField="value" // Define o campo de valor
                    value={selectedValue} // O valor selecionado
                    onChange={handleChange} // Chama a função de mudança de texto
                    search={props.search ? true : false} // Habilita a pesquisa se props.search for true
                    searchPlaceholder="Pesquisar..."
                    inputSearchStyle={style.inputsearch}
                />
            )}
        </View>
    );
}

export default ComboBox;

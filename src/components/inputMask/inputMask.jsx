import { Text, View } from "react-native";
import { style } from "./inputMask.style";
import { color } from "../../constants/theme";
import { useState, useEffect } from "react";
import MaskInput from "react-native-mask-input";
import masks from "./masks.json"; // Importando o arquivo de máscaras

function InputMask(props) {
    const [maskPattern, setMaskPattern] = useState(null);
    const [formattedDate, setFormattedDate] = useState(props.value || "");

    useEffect(() => {
        if (props.mask && masks.masks[props.mask]) {
            if (props.mask === 'dateBR') {
                // Se a máscara for 'dateBR', faz a conversão do formato 'gringo' para 'BR'
                if (props.value) {
                    const dateParts = props.value.split('-'); // Divide a string por '-'

                    // console.log(dateParts)

                    if (dateParts.length === 3) {
                        // Verifica se está no formato YYYY-MM-DD e converte para DD/MM/YYYY
                        const day = dateParts[2].split("T")[0]
                        const month = dateParts[1]
                        const year = dateParts[0]

                        // console.log(day,month,year)

                        const formattedDate = `${day}/${month}/${year}`;
                        setFormattedDate(formattedDate); // Define o valor formatado da data
                    }
                }
                setMaskPattern(masks.masks[props.mask].map(item => item === "\\d" ? /\d/ : item));
            } else {
                // Para outras máscaras, aplica a conversão padrão
                const maskFromJson = masks.masks[props.mask].map((item) =>
                    item === "\\d" ? /\d/ : item
                );
                setMaskPattern(maskFromJson);
            }
        } else {
            setMaskPattern(null);
        }
    }, [props.mask, props.value]); // Adicionei props.value para que a formatação ocorra na inicialização

    const handleTextChange = (texto) => {
        // Para outros campos, apenas passa o valor como está
        props.onChangeText(texto);
    };

    return (
        <View style={style.container}>
            {props.label && <Text style={style.label}>{props.label}</Text>}
            <View style={style.row}>
                <MaskInput
                    style={[style.inputBox, { flex: 1 }]}
                    placeholderTextColor={color.placeholder}
                    placeholder={props.placeholder}
                    secureTextEntry={props.pass ? true : false}
                    mask={maskPattern} // Aplica a máscara do JSON
                    onChangeText={handleTextChange} // Chama a função de mudança de texto
                    value={formattedDate} // Usa a data formatada no input
                    readOnly={props.readOnly}
                />
            </View>
        </View>
    );
}

export default InputMask;

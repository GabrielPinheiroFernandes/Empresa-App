import path from "../constants/PathAPI";


async function GetUsuario(email,senha) {
    const obj = {
        "email" : email,
        "senha" : senha
    }
    try {
        // console.log(path + 'empresas');
        const response = await fetch(path + 'usuario',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj)
        });

        // console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json(); // Aguarde a conversão para JSON

        // console.log(data);

        return data; // Retorne os dados, se necessário

    } catch (error) {
        console.log('Algo deu errado com a conversão pra json:', error);
    } 
}

export default {GetUsuario}
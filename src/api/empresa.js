import path from "../constants/PathAPI";

async function GetEmpresas(authtoken) {
    
    try {
        // console.log(path + 'empresas');
        const response = await fetch(path + 'empresas',{
            method: "GET", // Define o método HTTP
            headers: {
                'Authorization': `Bearer ${authtoken}`, // Insere o token de autorização
                'Content-Type': 'application/json' // Define o tipo de conteúdo
            }
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

async function GetEmpresa(ID_EMPRESA,authtoken) {
    
    try {
        // console.log(path + 'empresas');
        const response = await fetch(path + 'empresas/'+ID_EMPRESA,{
            method: "GET", // Define o método HTTP
            headers: {
                'Authorization': `Bearer ${authtoken}`, // Insere o token de autorização
                'Content-Type': 'application/json' // Define o tipo de conteúdo
            }
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


export default {GetEmpresas,GetEmpresa}
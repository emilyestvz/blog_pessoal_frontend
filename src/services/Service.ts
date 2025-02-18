import axios from "axios";

const api = axios.create({
    baseURL: 'https://blog-pessoal-im81.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

// Método Post para Usuários  - Cadastrar
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

// Método Post - Temas
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

// Método Put 
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Método Get
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get( url, header )
    setDados(resposta.data)
}

// Método Delete
export const deletar = async(url: string, header: Object) => {
    await api.delete(url, header)
}



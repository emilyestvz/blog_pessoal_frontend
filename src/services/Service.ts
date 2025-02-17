import axios from "axios";

const api = axios.create({
    baseURL: 'https://blog-pessoal-im81.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
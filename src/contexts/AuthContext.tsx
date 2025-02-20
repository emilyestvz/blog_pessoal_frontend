import UsuarioLogin from "../models/UsuarioLogin";
import { createContext, useState } from "react";
import { login } from "../services/Service";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps){
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: '',
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function handleLogin(usuarioLogin: UsuarioLogin){
        setIsLoading(true)

        try {
            await login('/usuarios/login', usuarioLogin, setUsuario)
            alert('O usuário foi autentificado com sucesso! 🎉')
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Ocorreu um erro ao tentar fazer login. ❌')
    }

    setIsLoading(false)
}

    function handleLogout(){
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        })
    }

    return (
        <AuthContext.Provider value={{
            usuario,
            handleLogin,
            handleLogout,
            isLoading,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
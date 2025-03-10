import UsuarioLogin from "../models/UsuarioLogin";
import { createContext, useState } from "react";
import { login } from "../services/Service";
import { ToastAlert } from "../utils/ToastAlert";

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    setUsuario: (usuario: UsuarioLogin) => void
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
            ToastAlert('Usuário foi autenticado com sucesso!', 'sucesso')
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            ToastAlert('Os dados do Usuário estão inconsistentes!', 'erro')
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
            setUsuario
        }}>
            {children}
        </AuthContext.Provider>
    )
}
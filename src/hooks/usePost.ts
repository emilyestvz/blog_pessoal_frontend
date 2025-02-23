import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Postagem from "../models/Postagem";
import { buscar, deletar } from "../services/Service";

export const usePostagem = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    const buscarPorId = async (id: string) => {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
                headers: {
                    'Authorization': token
                }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    };

    const deletarPostagem = async (id: string) => {
        setIsLoading(true);
        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            });
            return true; // Indica que a postagem foi deletada com sucesso
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                throw new Error('Erro ao deletar a postagem.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, postagem, buscarPorId, deletarPostagem };
};
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { usePostagem } from "../../hooks/usePost";

const DelPost = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { usuario } = useContext(AuthContext);
    const { isLoading, postagem, buscarPorId, deletarPostagem } = usePostagem();

    useEffect(() => {
        if (usuario.token === '') {
            toast.warn('Você precisa estar logado 🔮');
            navigate('/');
        } else if (id !== undefined) {
            buscarPorId(id);
        }
    }, [usuario.token, id]);

    const handleDeletar = async () => {
        if (id) {
            try {
                const sucesso = await deletarPostagem(id);
                if (sucesso) {
                    toast.success('Postagem apagada com sucesso ✨');
                    navigate("/postagens");
                }
            } catch (error) {
              if (error instanceof Error) {
                toast.error(error.message); // Acesso seguro à propriedade message
            } else {
                toast.error("Ocorreu um erro inesperado.");
            }
            }
        }
    };

    const retornar = () => {
        navigate("/postagens");
    };

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Postagem</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a postagem a seguir?
            </p>

            <div className='border border-slate-900 flex flex-col rounded overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'  style={{backgroundColor: '#0F0F0F'}}>
                    Postagem
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{postagem.titulo}</p>
                    <p>{postagem.texto}</p>
                </div>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-950 hover:bg-red-900 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-emerald-900 hover:bg-emerald-800 flex items-center justify-center'
                        onClick={handleDeletar}
                        disabled={isLoading}>
                        {isLoading ?
                            <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DelPost;
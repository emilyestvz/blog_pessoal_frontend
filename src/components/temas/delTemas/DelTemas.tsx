import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar, deletar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const DelTemas = () => {

    // Hooks
    const navigate = useNavigate();
    
    // Hook Contexts
    const { usuario, handleLogout } = useContext(AuthContext);

    const token = usuario.token;

    // States
    const [tema, setTema] = useState<Tema>({} as Tema);

    const [isLoading, setIsLoading] = useState<boolean>(false)

    // Acessarmos o parâmetro id, enviado dentro da URL da rota deletartema, 
    // através do Hook useParams.
    const { id } = useParams< {id: string }>()

    // Consumirá o Endpoint Consultar Tema por Id.
    const buscarTemaPorId = (id: string) => {
        try {
            buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
            if (id !== undefined) {
                buscarTemaPorId(id)
            }
        }, [id])
    
    useEffect(() => {
            if (token === '') {
                Swal.fire('Você precisa estar logado! 💜', '' ,'info')
                navigate('/')
            }
        }, [token])
    
    // função responsável por excluir temas da aplicação
    const deletarTema = () => {
        setIsLoading(true)

        try {
            deletar(`/temas/${id}`, {
                headers: { 'Authorization': token }
            })
            Swal.fire('O tema foi apagado com sucesso!', '' ,'success')
        } catch(error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            } else {
                Swal.fire('Erro ao excluir o tema.', '' ,'error')
            }
        }

        setIsLoading(false);
        retornar();
    }

const retornar = () => {
    navigate('/temas')
}
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar tema</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o tema a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 text-white font-bold text-2xl'  style={{backgroundColor: '#0F0F0F'}}>
                    Tema
                </header>

                <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

                <div className='flex'>
                    <button 
                        className='text-slate-100 bg-red-950 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>

                    <button 
                        className='w-full text-slate-100 bg-cyan-950
                        hover:bg-cyan-900 flex items-center justify-center' 
                        onClick={deletarTema}>
                            {isLoading ? 
                                <RotatingLines
                                strokeColor='white'
                                strokeWidth='5'
                                animationDuration='0.75'
                                width='24'
                                visible={true}/> 
                                : 
                                <span>Sim</span>
                                }
                    </button>
                </div>
            </div>
        </div>
    );
};
export default DelTemas;
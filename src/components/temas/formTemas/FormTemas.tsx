import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { atualizar, buscar, cadastrar } from '../../../services/Service';
import { RotatingLines } from 'react-loader-spinner';

const FormTemas = () =>  {

    const navigate = useNavigate();

    const [tema, setTema] = useState<Tema>({} as Tema)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { usuario, handleLogout } = useContext(AuthContext)
    
    const token = usuario.token

    const { id } = useParams<{ id: string }>();

    // Consumirá o Endpoint Consultar Tema por Id
    async function buscarTemaPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    // O primeiro useEffect monitora o token. 
    // Sempre que o token for uma string vazia, ou seja, o usuário não estiver autenticado, 
    // ele exibirá um alerta e o usuário será redirecionado para a página de login
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado! 💜')
            navigate('/')
        }
    }, [token])

    // O segundo useEffect executará a função buscarTemaPorId(id), sempre que o valor da variável id for modificado.
    useEffect(() => {
        if (id !== undefined) {
            buscarTemaPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate('/temas')
    }

    const gerarNovoTema = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                atualizar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi atualizado com sucesso! 💜')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao atualizar o tema.')
                }

            }
        } else {
            try {
                cadastrar(`/temas`, tema, setTema, {
                    headers: { 'Authorization': token }
                })
                alert('O Tema foi cadastrado com sucesso! 💜')
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    alert('Erro ao cadastrar o tema.')
                }

            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className='container flex flex-col items-center justify-center mx-auto my-2  min-h-[73.5vh]'>
            <h1 className='text-6xl text-center my-8 font-[Satisfy]'>
                {id === undefined ? 'Cadastrar Tema' : 'Editar Tema'}
            </h1>

            <form className='w-1/2 flex flex-col gap-4' onSubmit={gerarNovoTema} >
                <div className='flex flex-col gap-2'>
                    <label htmlFor='descricao'>Descrição do Tema:</label>
                    <input
                        type='text'
                        placeholder='Descreva aqui seu tema'
                        name='descricao'
                        className='border-2 border-slate-700 rounded p-2'
                        value={tema.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className='button-config rounded text-slate-100 w-1/2 py-2 mx-auto flex justify-center'
                    type='submit'>
                    {isLoading ? (
                        <RotatingLines
                         strokeColor='white'
                         strokeWidth='5'
                         animationDuration='0.75'
                         width='24'
                         visible={true}/> 
                        )  : (
                        <span>{id === undefined ? 'Cadastrar': 'Atualizar'}</span>
                        )}
                </button>
            </form>
        </div>
    );
}

export default FormTemas;
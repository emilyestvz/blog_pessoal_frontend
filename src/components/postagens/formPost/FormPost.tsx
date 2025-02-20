import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Swal from 'sweetalert2';

const FormPost = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [temas, setTemas] = useState<Tema[]>([])

    const [tema, setTema] = useState<Tema>({ id: 0, descricao: '', })
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const buscarPostagemPorId = (id: string) => {
        try {
             buscar(`/postagens/${id}`, setPostagem, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    const buscarTemaPorId = (id: string) => {
        try {
            buscar(`/temas/${id}`, setTema, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    const buscarTemas = () => {
        try {
            buscar('/temas', setTemas, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarPostagemPorId(id)
        }
    }, [id])

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema,
        })
    }, [tema])

    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema,
            usuario: usuario,
        });
    }

    function retornar() {
        navigate('/postagens');
    }

    const gerarNovaPostagem = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                atualizar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert('Postagem atualizada com sucesso 🎉')

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao atualizar a Postagem ❌')
                }
            }

        } else {
            try {
                cadastrar(`/postagens`, postagem, setPostagem, {
                    headers: {
                        Authorization: token,
                    },
                })

                //alert('Postagem cadastrada com sucesso 🥰');
                AlertSuccess();

            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout()
                } else {
                    alert('Erro ao cadastrar a Postagem ❌');
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoTema = tema.descricao === '';
    
    return (
        <div className='flex flex-col mx-auto items-center'>
            <h1 className='text-4xl text-center my-8'>Cadastrar Postagem</h1>

            <form className='flex flex-col w-1/2 gap-4'
            onSubmit={gerarNovaPostagem}>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='titulo'>Título da Postagem</label>
                    <input
                        type='text'
                        placeholder='Titulo'
                        name='titulo'
                        required
                        className='border-2 border-slate-700 rounded p-2'
                        value={postagem.titulo}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='titulo'>Texto da Postagem</label>
                    <input
                        type='text'
                        placeholder='Texto'
                        name='texto'
                        required
                        className='border-2 border-slate-700 rounded p-2'
                        value={postagem.texto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <p>Tema da Postagem</p>
                    <select name='tema' id='tema' className='border p-2 border-slate-800 rounded'
                    onChange={(e) => buscarTemaPorId(e.currentTarget.value)}>

                        <option value='' selected disabled>Selecione um Tema</option>
                        
                        {temas.map((tema) =>(
                            <option key={tema.id} value={tema.id}>{tema.descricao}</option>
                        ))}
                    </select>
                </div>

                <button 
                    type='submit' 
                    className='button-config rounded disabled:bg-slate-200
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                               disabled={carregandoTema}>
                    
                    {isLoading? 
                        <RotatingLines
                         strokeColor='white'
                         strokeWidth='5'
                         animationDuration='0.75'
                         width='24'
                         visible={true}
                         /> :
                         <span>{id === undefined? 'Cadastrar': 'Atualizar'}</span>
                        }
                </button>
            </form>
        </div>
    );
}
export default FormPost;

// Alerts
function AlertSuccess() {
    Swal.fire({
        title: "Postagem cadastrada com sucesso!",
        icon: "success",
        draggable: true
      });
}
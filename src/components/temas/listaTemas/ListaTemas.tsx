import { useNavigate } from 'react-router-dom';
import CardTemas from '../cardTemas/CardTemas'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { DNA } from 'react-loader-spinner';
import { buscar } from '../../../services/Service';

const ListaTemas = () =>  {

    // Hooks
    const navigate = useNavigate();
    
    // Hook Contexts
    const { usuario, handleLogout } = useContext(AuthContext);

    // States
    const [temas, setTemas] = useState<Tema[]>([]);

    const token = usuario.token;

    // Função para buscar temas
    const buscarTemas = async () => {
        try {
            await buscar('/temas', setTemas, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    // Executa a função para buscar temas ao componente renderizar
    useEffect(() => {
        buscarTemas();
    }, [temas.length]);

    // E para o Token
    useEffect(() => {
        if(token === ''){
            alert('Você precisa estar logado! 🔮')
            navigate('/');
        }
    }, [token]);


    return (
        <>
        {temas.length === 0 && (
                <DNA
                    visible={true}
                    height='200'
                    width='200'
                    ariaLabel='dna-loading'
                    wrapperStyle={{}}
                    wrapperClass='dna-wrapper mx-auto'
                />
            )}

            <div className='flex justify-center w-full my-4'>
                <div className='container flex flex-col'>
                    <div className='grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8'>

                            {/* Esse trecho de código mapeia os elementos do array temas e os renderiza no Componente CardTemas, 
                            gerando um card para cada tema dentro do Array.
                            O método map é uma função JavaScript utilizada para processar Arrays */}
                            {
                                temas.map((tema) => (
                                <CardTemas key={tema.id} tema={tema} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaTemas;
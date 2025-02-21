import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2'; 
import ListaPost from '../../components/postagens/listaPost/ListaPost';

function Perfil() {
    const navigate = useNavigate();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        if (usuario.token === '') {
            Swal.fire('Você precisa estar logado!', '', 'error')
            navigate('/')
        }
    }, [usuario.token])

    return (
        <div className='container mx-auto py-10'>
            <div className='rounded border backgroundImg p-8 flex flex-col gap-8'>

                {/* Seção do perfil */}
                <div className='flex gap-4 items-center text-white'>
                    <img 
                        className='rounded-full w-56 border border-black' 
                        src={usuario.foto} 
                        alt={`Foto de perfil de ${usuario.nome}`} 
                    />
                
                    {/* Informações do perfil */}
                    <div>
                        <p className='text-md'>Nome: {usuario.nome}</p>
                        <p className='text-md'>Email: {usuario.usuario}</p>
                    </div>
                </div>
    
            </div>

                {/* Seção de postagens */}
                <div>
                    <h2 className='text-3xl font-medium tracking-tight mt-8'>Histórico</h2>
                    <ListaPost /> 
                </div>
        </div>
    );
        
}

export default Perfil;
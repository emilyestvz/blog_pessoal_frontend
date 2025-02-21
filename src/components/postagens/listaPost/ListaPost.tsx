import { useNavigate } from 'react-router-dom';
import CardPost from '../cardPost/CardPost';
import Postagem from '../../../models/Postagem';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { buscar } from '../../../services/Service';
import { MutatingDots } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const ListaPost = () => {

    const navigate = useNavigate();
    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
    const userId = usuario?.id

    async function buscarPostagens() {
        if (!token || !userId) return;

        try {
            const response = buscar('/postagens', setPostagens, {
                headers: {
                    Authorization: token,
                },
            })

            if (response && Array.isArray(response)) { // Verifica se a resposta é um array
                setPostagens(response.filter((postagem) => postagem.usuario?.id === userId));
            } else {
                console.error('Resposta inválida da API:', response);
            }

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                console.error('Erro na requisição:', error);
                Swal.fire('Erro', 'Erro ao carregar as postagens', 'error');
            }
        }
    }

    useEffect(() => {
        if (!token) {
            Swal.fire('Você precisa estar logado!', '', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarPostagens()
    }, [userId])


    return (
        <>
            {postagens.length === 0 && (
                <MutatingDots
                visible={true}
                height='100'
                width='100'
                color='#3d2b2b'
                secondaryColor='#6d5151'
                radius='12.5'
                ariaLabel='mutating-dots-loading'
                wrapperStyle={{display: 'grid', placeItems: 'center', height: '100vh'}}
                wrapperClass='mutating-dots-wrapper mx-auto'
                />)}
            

            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 
            	lg:grid-cols-3 gap-4'>

                {postagens.map((postagem) => (
                    <CardPost key={postagem.id} postagem={postagem} />
                ))}
            </div>
        </>
    );
}

export default ListaPost;
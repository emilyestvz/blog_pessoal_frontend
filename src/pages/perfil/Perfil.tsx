import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import ListaPost from '../../components/postagens/listaPost/ListaPost';
import { ToastAlert } from '../../utils/ToastAlert';
import useProfilePicture from '../../hooks/useProfilePicture';
import ProfilePictureInput from '../../components/ui/ProfilePictureInput';

interface UsuarioLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string | null;
    token: string;
}

const Perfil: React.FC = () => {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(AuthContext);
    const { handlePictureChange, pictureBase64 } = useProfilePicture();
    const [fotoPerfil, setFotoPerfil] = useState<string | null>(usuario.foto);

    useEffect(() => {
        if (usuario.token === '') {
            ToastAlert('Você precisa estar logado!', 'erro');
            navigate('/');
        }
    }, [usuario.token, navigate]);

    useEffect(() => {
        if (pictureBase64 && usuario.foto !== pictureBase64) {
            setUsuario({ ...usuario, foto: pictureBase64 });
            setFotoPerfil(pictureBase64);
            localStorage.setItem('fotoPerfil', pictureBase64);
        }
    }, [pictureBase64, setUsuario, usuario]);

    useEffect(() => {
        const fotoSalva = localStorage.getItem('fotoPerfil');
        if (fotoSalva) {
            setFotoPerfil(fotoSalva);
        }
    }, []);

    return (
        <div className='container mx-auto py-10'>
            <div className='rounded border backgroundImg p-8 flex flex-col gap-8'>
                <div className='flex gap-4 items-center text-white'>
                    <img
                        className='rounded-full w-56 border border-black'
                        src={fotoPerfil || usuario.foto}
                        alt={`Foto de perfil de ${usuario.nome}`}
                    />
                    <div>
                        <p className='text-md'>Nome: {usuario.nome}</p>
                        <p className='text-md'>Email: {usuario.usuario}</p>
                    </div>
                </div>
                <div className='text-white font-semibold'>
                    <ProfilePictureInput onChange={handlePictureChange} />
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-medium tracking-tight mt-8'>Histórico</h2>
                <ListaPost />
            </div>
        </div>
    );
};

export default Perfil;
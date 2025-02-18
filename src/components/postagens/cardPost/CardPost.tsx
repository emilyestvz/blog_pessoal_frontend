import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';

interface CardPostProps {
    postagem: Postagem
}
const CardPost = ({ postagem }: CardPostProps) => {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className='flex w-full py-2 px-4 items-center gap-4 text-white' style={{backgroundColor: '#0F0F0F'}}>
                    <img src={postagem.usuario?.foto}
                        className='h-12 rounded-full bg-amber-50'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center'>
                        Nome do Usuário
                    </h3>
                </div>

                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>Titulo</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>

            <div className='flex'>
                <Link to={`/editarpostagem/${postagem.id}`} className='button-edit w-full text-white flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to='' className='text-white button-del w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
};

export default CardPost;
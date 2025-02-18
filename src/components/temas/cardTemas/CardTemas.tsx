import { Link } from "react-router-dom"
import Tema from "../../../models/Tema";

interface CardTemasProps {
    tema: Tema;
}

const CardTemas = ({ tema }: CardTemasProps) => {

  return (
    <>
        <div className='border flex flex-col rounded overflow-hidden justify-between'>
            <header className='py-2 px-6 text-white font-bold text-2xl' style={{backgroundColor: '#0F0F0F'}}>
                Tema
            </header>

            <p className='p-8 text-3xl bg-slate-200 h-full'>{tema.descricao}</p>

            <div className='flex'>
                <Link to={`/editartema/${tema.id}`} className='button-edit w-full text-slate-100 bg-custom-gray flex items-center justify-center py-2'
                >
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='button-del text-slate-100 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    </>
  );
};

export default CardTemas;

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ModalPost.css'
import FormPost from '../formPost/FormPost';
const ModalPost = () => {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='rounded px-4 py-2 button-config'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPost />
            </Popup>
        </>
    );
}

export default ModalPost;
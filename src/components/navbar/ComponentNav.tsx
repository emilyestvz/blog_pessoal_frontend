import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import styles from './Nav.module.css'
import { ToastAlerta } from "../../utils/ToastAlert"

const Component = () => {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)
  
    const logout = () => {
  
      handleLogout()
      ToastAlerta('O usuário foi desconectado.', 'info')
      navigate('/')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (

        <nav className='text-gray-100 p-4 w-full' style={{backgroundColor: '#0F0F0F'}}>
        <div className='flex justify-between items-center'>
            <Link to='/' className='flex text-2xl px-6 font-bold font-[Satisfy]
            transition-all duration-500 hover:scale-110'>Emily Dias</Link>

            <p className='flex space-x-8'>
            <Link to='/home' className={styles.postButton}>Home</Link>
            <Link to='/postagens' className={styles.postButton}>Postagens</Link>
            <Link to='/temas' className={styles.postButton}>Temas</Link>
            <Link to='/cadastrartemas' className={styles.postButton}>Cadastrar temas</Link>
            <Link to='/perfil' className={styles.postButton}>Perfil</Link>
            <Link to='' onClick={logout} className={styles.postButton}>Sair</Link>
            </p>
        </div>
        </nav>
        )
    }
    
  return (
    <>
      {component}
    </>
  )
}

export default Component

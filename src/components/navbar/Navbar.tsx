import { Link, useNavigate } from "react-router-dom"
import styles from './Nav.module.css'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Navbar = () => {

  const navigate = useNavigate()

  const { handleLogout } = useContext(AuthContext)

  const logout = () => {
    handleLogout()
    navigate('/')
    alert('')
  }
  return (
    <nav className="text-gray-100 p-4 fixed w-full" style={{backgroundColor: '#0F0F0F'}}>
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to='/' className="flex text-2xl px-6 font-bold font-[Satisfy]
        transition-all duration-500 hover:scale-110">Emily Dias</Link>

        <p className="flex space-x-8">
          <Link to="/home" className={styles.postButton}>Home</Link>
          <Link to="/temas" className={styles.postButton}>Temas</Link>
          <Link to="/cadastrar" className={styles.postButton}>Cadastrar temas</Link>
          <Link to="/perfil" className={styles.postButton}>Perfil</Link>
          <Link to="" onClick={logout} className={styles.postButton}>Sair</Link>
        </p>

      </div>
    </nav>
  )
}

export default Navbar

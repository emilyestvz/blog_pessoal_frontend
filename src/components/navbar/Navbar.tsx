import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <nav className="text-amber-50 p-4 fixed w-full" style={{backgroundColor: '#0F0F0F'}}>
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to='/' className="flex text-2xl px-6 font-bold font-[Satisfy]
        transition-all duration-500 hover:scale-110">Emily Dias</Link>

        {/* Menu Desktop */}
        <p className="flex space-x-8">
          <Link to="/home" className="hover:text-cyan-700">Home</Link>
          <Link to="/temas" className="hover:text-cyan-700">Temas</Link>
          <Link to="/cadastrar" className="hover:text-cyan-700">Cadastrar temas</Link>
          <Link to="/perfil" className="hover:text-cyan-700">Perfil</Link>
          <Link to="/login" className="hover:text-cyan-700">Sair</Link>
        </p>

      </div>
    </nav>
  )
}

export default Navbar

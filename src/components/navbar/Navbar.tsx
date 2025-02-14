
const Navbar = () => {

  return (
    <nav className="bg-black text-amber-50 p-4 fixed w-full">
      <div className="container flex justify-between items-center">

        {/* Logo */}
        <div className="flex text-2xl font-bold">Logo</div>

        {/* Menu Desktop */}
        <ul className="flex space-x-8">
          <li><a href="#" className="hover:text-amber-500">Home</a></li>
          <li><a href="#" className="hover:text-amber-500">Temas</a></li>
          <li><a href="#" className="hover:text-amber-500">Cadastrar temas</a></li>
          <li><a href="#" className="hover:text-amber-500">Perfil</a></li>
          <li><a href="#" className="hover:text-amber-500">Sair</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar

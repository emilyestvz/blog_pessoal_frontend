import { Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import ListaTemas from "./components/temas/listaTemas/ListaTemas"
import FormTemas from "./components/temas/formTemas/FormTemas"
import DelTemas from "./components/temas/delTemas/DelTemas"

function App() {
  
  return (
      <> 
            <Navbar />

            <div className="min-h-[87.5vh]">
              <Routes>
                <Route path='/' element={<Login />} />     {/* Definimos o Componente Home como o primeiro Componente que será renderizado.*/}
                <Route path='/home' element={<Home />} /> 
                <Route path='/login' element={<Login />} />   {/* Esta rota será a rota padrão do Componente Login*/ }
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastrartemas" element={<FormTemas />} />
                <Route path="/editartema/:id" element={<FormTemas />} />
                <Route path="/deletartema/:id" element={<DelTemas />} />
              </Routes>
            </div>

            <Footer />
      </>
  )
}

export default App

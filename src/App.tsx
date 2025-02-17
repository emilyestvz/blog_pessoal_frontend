import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
  
  return (
      <> 
      <AuthProvider>
        <BrowserRouter>
            <Navbar />

            <div className="min-h-[87.5vh]">
              <Routes>
                <Route path='/' element={<Login />} />     {/* Definimos o Componente Home como o primeiro Componente que será renderizado.*/}
                <Route path='/home' element={<Home />} /> 
                <Route path='/login' element={<Login />} />   {/* Esta rota será a rota padrão do Componente Login*/ }
                <Route path='/cadastro' element={<Cadastro />} />
              </Routes>
            </div>

            <Footer />
        </BrowserRouter>
      </AuthProvider>
      </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"

function App() {
  
  return (
      <> 
        <BrowserRouter>
            <Navbar />

            <div className="min-h-[87.5vh]">
              <Routes>
                <Route path='/' element={<Home />} />     {/* Definimos o Componente Home como o primeiro Componente que será renderizado.*/}
                <Route path='/home' element={<Home />} />
                <Route path='/login' element={<Login />} />   {/* Esta rota será a rota padrão do Componente Login*/ }
                
              </Routes>
            </div>

            <Footer />
        </BrowserRouter>
      </>
  )
}

export default App

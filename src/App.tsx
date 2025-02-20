import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import FormTemas from './components/temas/formTemas/FormTemas'
import DelTemas from './components/temas/delTemas/DelTemas'
import ListaPost from './components/postagens/listaPost/ListaPost'
import FormPost from './components/postagens/formPost/FormPost'
import DelPost from './components/postagens/delPost/DelPost'
import Perfil from './pages/perfil/Perfil'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
  
  return (
      <>  
            <ToastContainer />
            <Navbar />

            <div className='min-h-[73.5vh]'>
              <Routes>
                <Route path='/' element={<Login />} />     {/* Definimos o Componente Home como o primeiro Componente que será renderizado.*/}
                <Route path='/login' element={<Login />} />   {/* Esta rota será a rota padrão do Componente Login*/ }
                <Route path='/home' element={<Home />} /> 
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/temas' element={<ListaTemas />} />
                <Route path='/cadastrartemas' element={<FormTemas />} />
                <Route path='/editartema/:id' element={<FormTemas />} />
                <Route path='/deletartema/:id' element={<DelTemas />} />
                <Route path='/postagens' element={<ListaPost />} />
                <Route path='/cadastrarpostagem' element={<FormPost />} />
                <Route path='/editarpost/:id' element={<FormPost />} />
                <Route path="/deletarpost/:id" element={<DelPost />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </div>

            <Footer />
            
      </>
  )
}

export default App

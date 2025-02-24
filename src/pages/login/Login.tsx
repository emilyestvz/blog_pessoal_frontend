import { LineWave, RotatingLines } from 'react-loader-spinner'
import './Login.css'
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
    // Hooks
    const navigate = useNavigate()

    // States
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin)
    
    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    // Função para atualizar o estado do formulário
    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
        setUsuarioLogin({...usuarioLogin, [e.target.name]: e.target.value })
    }
    
    // Função para verificar se o formulário está carregando
    useEffect(() => {
        if(usuario.token !== ''){
            navigate('/home')
        }
    }, [usuario])


    // Função para enviar os dados do formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }
    
    console.log(JSON.stringify(usuarioLogin))
      
  return (
    <>
        {/* Form Login */}
      <div className='backgroundImg grid items-center justify-center h-screen font-bold'>

                <form className='formLogin__bg class__extra flex flex-col w-full max-w-md gap-4 p-6 bg-white rounded shadow'
                onSubmit={handleSubmit}>

                    <h2 className='text-center text-5xl'>Entrar</h2>
                    <div className='flex flex-col font-medium'>

                        <label htmlFor='usuario'>Usuário</label>
                        <input
                            type='text'
                            id='usuario'
                            name='usuario'
                            placeholder='Digite o seu usuário'
                            className='border-1 border-neutral-950 rounded p-2 font-light bg-neutral-900'
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                    </div>

                    <div className='flex flex-col w-full font-medium'>
                        <label htmlFor='senha'>Senha</label>
                        <input
                            type='password'
                            id='senha'
                            name='senha'
                            placeholder='Digite sua senha'
                            className='border-1 border-neutral-950 rounded p-2 font-light bg-neutral-900'
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                    </div>

                    {/* Checkbox para Lembrar-me */}
                    <div className='flex items-center gap-2 font-extralight text-sm'>
                        <input
                            type='checkbox'
                            id='lembrar'
                            name='lembrar'
                            className='border-2 border-slate-700 rounded p-2'/>
                        <label htmlFor='lembrar'>Lembrar-me</label>

                        {/* Link para Esqueci minha senha */}
                        <Link to='/esqueci-senha' className='ml-15 hover:underline'>Esqueceu sua senha?</Link>
                    </div>

                        
                    {/* Botão para Entrar com Carregamento de animação */}
                    <button 
                        type='submit'
                        className='button-config rounded flex justify-center 
                        hover:custom-gray transition-colors text-white w-2/2 py-2 self-center'>
                        {isLoading? (
                            <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}/> 
                            ) : (<span>Entrar</span>)}
                            
                    </button>

                    {/* Borda de separação */}
                    <hr className='border-neutral-950 w-full' />

                    {/* Link para cadastro */}
                    <p className='text-center'>
                        Ainda não tem uma conta?{' '}
                        <Link to='/cadastro' className='text-red-400 hover:underline'>
                        Cadastre-se</Link>
                    </p>
                </form>
                {/* <div className='fundoLogin block w-full h-full'></div> */}
            </div>
    </>
  )
}
export default Login


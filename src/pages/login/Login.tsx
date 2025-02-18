import { LineWave } from 'react-loader-spinner'
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
      <div className='grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold'>

                <form className='flex justify-center items-center flex-col w-1/2 gap-4'
                onSubmit={handleSubmit}>
                    <h2 className='text-slate-900 text-5xl'>Entrar</h2>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='usuario'>Usuário:</label>
                        <input
                            type='text'
                            id='usuario'
                            name='usuario'
                            placeholder='Usuario'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuarioLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='senha'>Senha:</label>
                        <input
                            type='password'
                            id='senha'
                            name='senha'
                            placeholder='Senha'
                            className='border-2 border-slate-700 rounded p-2'
                            value={usuarioLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                    </div>

                    {/* Botão para Entrar com Carregamento de animação */}
                    <button 
                        type='submit'
                        className='button-config rounded flex justify-center
                        hover:custom-gray transition-colors text-white w-1/2 py-2'>
                        {isLoading?
                            <LineWave
                            visible={true}
                            height='100'
                            width='100'
                            color='#0F0F0F'
                            ariaLabel='line-wave-loading'
                            wrapperStyle={{}}
                            wrapperClass=''
                            firstLineColor=''
                            middleLineColor=''
                            lastLineColor=''/>
                            :
                            <span>Entrar</span>}
                    </button>

                    {/* Borda de separação */}
                    <hr className='border-slate-800 w-full' />

                    {/* Link para cadastro */}
                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to='/cadastro' className='text-red-900 hover:underline'>
                        Cadastre-se</Link>
                    </p>
                </form>
                <div className='fundoLogin block w-full h-full'></div>
            </div>
    </>
  )
}

export default Login

import { LineWave } from 'react-loader-spinner'
import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    // States
      const [isLoading, setIsLoading] = useState<boolean>(false);
      
  return (
    <>
        {/* Form Login */}
      <div className='grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold'>
                <form className='flex justify-center items-center flex-col w-1/2 gap-4'>
                    <h2 className='text-slate-900 text-5xl'>Entrar</h2>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='usuario'>Usuário:</label>
                        <input
                            type='text'
                            id='usuario'
                            name='usuario'
                            placeholder='Usuario'
                            className='border-2 border-slate-700 rounded p-2'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='senha'>Senha:</label>
                        <input
                            type='password'
                            id='senha'
                            name='senha'
                            placeholder='Senha'
                            className='border-2 border-slate-700 rounded p-2'/>
                    </div>

                    {/* Botão para Entrar com Carregamento de animação */}
                    <button 
                        type='submit'
                        className='rounded flex justify-center
                                   hover:custom-gray transition-colors text-white w-1/2 py-2'>
                        {isLoading?
                            <LineWave
                            visible={true}
                            height="100"
                            width="100"
                            color="#4fa94d"
                            ariaLabel="line-wave-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            firstLineColor=""
                            middleLineColor=""
                            lastLineColor=""/>
                            :
                            <span>Entrar</span>}
                    </button>

                    {/* Borda de separação */}
                    <hr className='border-slate-800 w-full' />

                    {/* Link para cadastro */}
                    <p>
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-red-900 hover:underline">
                        Cadastre-se</Link>
                    </p>
                </form>
                <div className='fundoLogin block w-full h-full'></div>
            </div>
    </>
  )
}

export default Login

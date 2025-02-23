import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { RotatingLines } from 'react-loader-spinner';
import { ToastAlert } from '../../utils/ToastAlert';

const Cadastro = () => {
  // Hook
  const navigate = useNavigate();

  // States
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmarSenha, setConfirmarSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (usuario.id !== 0)
      retornar()
  }, [usuario])

  const retornar = async () => {
    navigate('/login')
  }

  const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  const handleConfirmarSenha = (e: ChangeEvent<HTMLInputElement>) => {
    return setConfirmarSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(confirmarSenha === usuario.senha && usuario.senha.length >= 8){
      setIsLoading(true);

      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario)
        ToastAlert('Usuário cadastrado com sucesso! ✨', 'sucesso')

      } catch(error) {
        ToastAlert('Ocorreu um erro ao cadastrar o usuário. ❌', 'erro');
        setIsLoading(false);
      }

    } else {
      ToastAlert('Senha inválida ou não confere. ❌', 'erro');
      setUsuario({...usuario, senha:''});
      setConfirmarSenha('');
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className='grid lg:grid-cols-2 place-items-center font-semibold'>
        
        {/* Fundo lateral Esquerda*/}
        <div className='fundoCadastro relative hidden bg-muted lg:block'></div>

          {/* Formulário de Cadastro */}
          <form className='flex justify-center items-center flex-col gap-3' 
                onSubmit={cadastrarNovoUsuario}>

            <h2 className='text-slate-900 text-5xl font-medium'>Crie a sua conta</h2>
            <p className='font-light text-balance text-sm text-muted-foreground mb-2'>
              Introduza as suas informações abaixo para criar a sua conta
            </p>

            <div className='flex flex-col w-full'>
              <label htmlFor='nome'>Nome</label>
              <input
                type='text'
                id='nome'
                name='nome'
                placeholder='Nome'
                className='border border-slate-700 rounded p-2 font-light'
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor='usuario'>Usuario</label>
              <input
                type='text'
                id='usuario'
                name='usuario'
                placeholder='Usuario'
                className='border border-slate-700 rounded p-2 font-light'
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor='foto'>Foto</label>
              <input
                type='file'
                id='foto'
                name='foto'
                placeholder='Foto'
                className='border border-slate-700 rounded p-2 font-medium'
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor='senha'>Senha</label>
              <input
                type='password'
                id='senha'
                name='senha'
                placeholder='Senha'
                className='border border-slate-700 rounded p-2 font-light'
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className='flex flex-col w-full'>
              <label htmlFor='confirmarSenha'>Confirme sua senha</label>
              <input
                type='password'
                id='confirmarSenha'
                name='confirmarSenha'
                placeholder='Confirmar Senha'
                className='border border-slate-700 rounded p-2 font-light'
                value={confirmarSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value)}
              />
            </div>

            {/* Botões de Cancelar e Cadastrar */}
            <div className='flex justify-around w-full gap-8'>
              <button className='button-config rounded text-white w-1/2 py-2'
              type='reset' onClick={retornar}>
                Cancelar
              </button>
              
              <button type='submit'
                  className='button-config rounded text-white w-1/2 py-2 flex justify-center'>
                    {isLoading ? (
                      <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}/> 
                    ) : (<span>Cadastrar</span>)}
              </button>
            </div>
          </form>
      </div>
    </>
  );
};

export default Cadastro;

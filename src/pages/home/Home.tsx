import { useState } from "react";
import styles from "./Home.module.css"; 
import ListaPost from "../../components/postagens/listaPost/ListaPost";
import ModalPost from "../../components/postagens/modalPost/ModalPost";

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {/* Banner/Background */}
      <div className={`${styles.homeContainer} responsive-container backgroundImg min-h-screen`}>
        <div className="container grid-cols-2 text-gray-100 selection:bg-black selection:text-gray-400 flex items-center">
          <div className="flex flex-col justify-center gap-4 py-4 p-6">
            <h1 className="text-5xl font-bold mx-auto">
              Bem-vindo ao meu Blog Pessoal!
            </h1>

            <p className="text-lg">
              Este é um blog de conteúdo pessoal, onde eu posso compartilhar minhas ideias, dicas e insights. ✨
            </p>

            <div className="flex justify-around gap-4">
              <div className='flex justify-around gap-4'>
                <ModalPost />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção de Postagens */}
      <div className="mt-20 container mx-auto px-6">
        <ListaPost />
      </div>
    </>
  );
};

export default Home;

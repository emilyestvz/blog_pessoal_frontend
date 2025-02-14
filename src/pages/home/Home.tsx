import { useState } from "react";
import styles from "./Home.module.css"; // Importando o CSS Module

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={`${styles.homeContainer} responsive-container bg-img`}>

      <div className="container grid grid-cols-2 text-gray-100 selection:bg-black selection:text-gray-400">
        <div className="flex flex-col justify-center gap-4 py-4 p-6">
          <h1 className="text-5xl font-bold">Bem-vindo ao meu Blog Pessoal!</h1>
          <p className="text-l">
            Este é um blog de conteúdo pessoal, onde eu posso compartilhar minhas ideias, dicas e insights. ✨
          </p>

          <div className="flex justify-around gap-4">
            <div
              className={styles.postButton} 
              style={{ backgroundColor: isHover ? "#503C3C" : "#191919" }}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              Nova Postagem
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Home;

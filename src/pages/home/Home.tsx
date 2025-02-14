import { useState } from "react"

function Home() {

    const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex justify-center min-h-[100vh] bg-img">

        <div className="container grid grid-cols-2 text-gray-100 selection:bg-black selection:text-gray-400">
            <div className="flex flex-col justify-center gap-4 py-4 p-6">

                
                    <h1 className="items- text-5xl font-bold">Bem-vindo ao meu Blog Pessoal!</h1>
                    <p className="text-l">Este é um blog de conteúdo pessoal, 
                        onde eu posso compartilhar minhas ideias, dicas, e insights. ✨</p>

                        <div className="flex justify-around gap-4">
                                <div className="rounded-tr-lg rounded-bl-lg py-2 px-4 text-white 
                                hover:text-white active:bg-gray-800
                                transition-all duration-400 hover:scale-110 overflow-hidden" 
                                style={{ backgroundColor: isHover ? '#503C3C' : '#191919' }}
                                onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                >
                                    Nova Postagem
                         </div>
                
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Home


function Home() {
  return (
    <div className="bg-img flex justify-center min-h-screen">

        <div className="container grid grid-cols-2 text-amber-50">
            <div className="flex flex-col items-center justify-center gap-4 py-4">

                <h1 className="text-5xl font-bold">Bem-vindo ao meu Blog Pessoal!</h1>
                <p className="text-l">Este é um blog de conteúdo pessoal, 
                    onde eu posso compartilhar minhas ideias, dicas, e insights. ✨</p>

                    <div className="flex justify-around gap-4">
                        <div className="rounded bg-amber-500 py-2 px-4 text-black font-semibold
                         hover:bg-amber-900 focus:outline-2 focus:outline-offset-2
                         focus:outline-violet-500 active:bg-amber-950">
                            Nova Postagem
                        </div>
                    </div>
            </div>

            {/* <div className="flex justify-center">
                <img className="w-2/3"
                src="https://i.imgur.com/VpwApCU.png" 
                alt="Imagem da Página Home" 
                width="400px"/>
            </div> */}
        </div>
    </div> 
  )
}

export default Home

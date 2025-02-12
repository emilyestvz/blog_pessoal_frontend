

function Home() {
  return (
    <section style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        margin: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }}>
        <div>
            <div style={{
                width: '80vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                    <h1>Bem-vindo ao meu Blog Pessoal!</h1>
                    <p>Este é um blog de conteúdo pessoal, onde eu posso compartilhar minhas ideias, dicas, e insights.</p>
                    <p>Aproveite para ler, comentar, e me ajudar a crescer cada vez mais.</p>
                    <p>Obrigado por visitar! ✨</p>
            </div>

            <div style={{
                width: "80vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                    <img 
                    src="https://i.imgur.com/VpwApCU.png" 
                    alt="Imagem da Página Home" 
                    width="400px"/>
            </div>
        </div>
    </section>
  )
}

export default Home

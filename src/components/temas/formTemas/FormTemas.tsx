
const FormTemas = () =>  {
    return (
        <div className="container flex flex-col items-center justify-center mx-auto my-20">
            <h1 className="text-6xl text-center my-8 font-[Satisfy]">
                Cadastrar um Tema
            </h1>

            <form className="w-1/2 flex flex-col gap-4" >
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição do Tema:</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui seu tema"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <button
                    className="button-config rounded text-slate-100 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormTemas;
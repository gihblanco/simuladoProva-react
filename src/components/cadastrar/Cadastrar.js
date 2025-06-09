import "./Cadastrar.css";

function Cadastrar() {
    return (
        <main className="mainCadastrar">
            <div className='container-cadastro'>
                <h3 className='tituloCadastro'>Cadastro de Produto</h3>
                <form className='formulario-cadastro-produto'>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Preço"/>
                    <textarea type="text" placeholder="Descrição (opcional)"/>
                    <button>Salvar</button>
                </form>
            </div>
        </main>
    )
}

export default Cadastrar;
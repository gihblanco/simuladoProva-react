import { useParams, Link } from "react-router-dom";

function DetalhesProduto() {
    const { id } = useParams();

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produto = produtos[id];  // usa o índice da URL (parâmentro)

    return (
        <main className='mainDetalhes'>
            <div className='container-detalhes'>
                <h3>{produto.nome}</h3>
                <p>Preço: {produto.preco}</p>
                <p>Descrição: {produto.descricao}</p>
                <Link to="/produtos">
                    <button className='btn-voltar' >Voltar</button>
                </Link>
            </div>
        </main>
    )
}

export default DetalhesProduto;
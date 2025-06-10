import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import './DetalhesProduto.css';

function DetalhesProduto() {
    const { id } = useParams();

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produto = produtos[id];  // usa o índice da URL (parâmentro)

    // Para funcionar tem que comentar o StrictMode no index.js
    useEffect(() => {
        console.log("Produto carregado!");

        return () => {
            console.log("Saindo da página de detalhes.");
        };
    }, []);

    return (
        <main className='mainDetalhes'>
            <div className='container-detalhes'>
                <h3 className='nome-produto'>{produto.nome}</h3>
                <p>Preço: R$ {produto.preco}</p>
                <p>Descrição: {produto.descricao}</p>
                <Link to="/produtos">
                    <button className='btn-voltar' >Voltar</button>
                </Link>
            </div>
        </main>
    )
}

export default DetalhesProduto;
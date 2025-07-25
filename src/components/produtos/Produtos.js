import './Produtos.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Produtos() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
        setProdutos(produtosSalvos);
    }, [])

    return (
        <main className="mainProdutos">
            <div className='container-produtos'>
                <h3 className='tituloProdutos'>Produtos Cadastrados</h3>
                <p className='total' >Total de produtos: {produtos.length}</p>
                <div className='lista-produtos'>
                {produtos.length === 0 ? (
                    <p>Nenhum produto cadastrado ainda.</p>
                ) : (
                    <div >
                        {produtos.map((produto, index) => (
                            <div key={index} className='item-produto'>
                                <p className='info-produto' >{produto.nome} - R$ {produto.preco} <Link to={`/detalhes/${index}`}>Ver detalhes</Link></p>
                            </div>
                        ))}
                    </div>
                )}
                </div>
            </div>
        </main>
    )
}

export default Produtos;
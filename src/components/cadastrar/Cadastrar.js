import "./Cadastrar.css";
import { useState } from "react";

function Cadastrar() {

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [descricao, setDescricao] = useState("");

    const salvarProduto = () => {
        const produto = {
            nome: nome,
            preco: preco,
            descricao: descricao
        };

        // Recupera lista atual de produtos ou array vazio se não houver nada salvo
        const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];

        // Adiciona novo produto à lista
        produtosSalvos.push(produto);

        // Salva a lista atualizada
        localStorage.setItem("produtos", JSON.stringify(produtosSalvos));

        // Limpa os campos
        setNome("");
        setPreco("");
        setDescricao("");

        alert("Produto salvo com sucesso!");
    };

    return (
        <main className="mainCadastrar">
            <div className='container-cadastro'>
                <h3 className='tituloCadastro'>Cadastro de Produto</h3>
                <form className='formulario-cadastro-produto'>
                    <input type="text" value={nome} placeholder="Nome"  onChange={(e) => setNome(e.target.value)}/>
                    <input type="text" value={preco} placeholder="Preço" onChange={(e) => setPreco(e.target.value)}/>
                    <textarea type="text" value={descricao} placeholder="Descrição (opcional)" onChange={(e) => setDescricao(e.target.value)}/>
                    <button type="button" onClick={salvarProduto}>Salvar</button>
                </form>
            </div>
        </main>
    )
}

export default Cadastrar;
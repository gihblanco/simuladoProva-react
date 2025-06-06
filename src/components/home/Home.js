import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <main className="mainHome">
            <h3>Bem-vindo à MiniStore!</h3>
            <p>Explore nosso catálogo e cadastre novos produtos.</p>
            <p><Link to="/produtos">Ver Produtos</Link> | <Link to="/cadastrar">Cadastrar Produtos</Link></p>
        </main>
    )
}

export default Home;
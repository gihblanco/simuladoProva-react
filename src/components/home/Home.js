import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <main className="mainHome">
            <div className='container-home'>
            <h3 className='boasvindas'>Bem-vindo à MiniStore!</h3>
            <p>Explore nosso catálogo e cadastre novos produtos.</p>
            <p><Link to="/produtos">Ver Produtos</Link> | <Link to="/cadastrar">Cadastrar Produtos</Link></p>
            </div>
        </main>
    )
}

export default Home;
import './App.css';
import { Link } from "react-router-dom"

function Header() {
    return (
        <header className='header'>
            <div className='container-header'>
                <h1>MiniStore</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/cadastrar">Cadastrar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
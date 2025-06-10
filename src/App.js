import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // npm install react-router-dom no cmd 
import Home from './components/home/Home';
import Produtos from './components/produtos/Produtos';
import Cadastrar from './components/cadastrar/Cadastrar';
import DetalhesProduto from './components/produtos/DetalhesProduto';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/produtos"element={<Produtos />}></Route>
          <Route path="/cadastrar" element={<Cadastrar />}></Route>
          <Route path="/detalhes/:id" element={<DetalhesProduto />}></Route> {/* <-- rota dinâmica */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

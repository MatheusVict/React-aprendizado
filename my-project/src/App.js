/*import logo from './logo.svg';
import HelloWorld from './components/HelloWorld'; // Componente q vc criou
import SayMyName from './components/SayMyName';
import Person from './components/Person';
import List from './components/List';
import Evento from './components/Evento';
import Forms from './components/Forms';
import Condicional from './components/Condiconal';
import Lista from './components/Lista';
import SeuNome from './components/SeuNome';
import {useState} from 'react'
import BemVindo from './components/BemVindo';*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/layout/footer';




function App() { // Código se cria dentro dessa função

  /*const mylista = ['Django', 'Node', 'React']
  const [nome, setNome] = useState()

  const eu = 'Matheus'
  const neweu = eu.toUpperCase()

  function soma(a, b) {
    return a + b
  } // No react se usa className não só a class*/

  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" elemet={<Homepage/>}/>
            <Route path="/contato" element={<Contato/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
          </Routes>
          <Footer/>
        </Router>
      </header>
    </div>
    
  )
};

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Homepage from './pages/Homepage';
import PokemonPage from './components/PokemonPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route path='/pokemon/:id' Component={PokemonPage} />
        </Routes>
        
      </Container>
    </Router>
  );
}

export default App;

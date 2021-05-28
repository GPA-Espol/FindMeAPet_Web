import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import QuienesSomos from './components/QuienesSomos/QuienesSomos';
import PagAdoptar from './components/PagAdoptar/PagAdoptar';
import PagUnete from './components/PagUnete/PagUnete';

function App() {

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA CHICOS !!!!!!!!!!!!!!
        </p>
      </header>
      <MainPage />
      <QuienesSomos />
      <PagAdoptar />
      <PagUnete />
      <Footer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';

function App() {

  return (
    <div className="App">
      <div className="nav-bar">
        <NavBar />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. HOLA
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

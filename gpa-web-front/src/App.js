import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import MainPage from './components/Pages/MainPage/MainPage';
import QuienesSomos from './components/Pages/QuienesSomos/QuienesSomos';
import Adoptar from './components/Pages/Adoptar/Adoptar';
import Unete from './components/Pages/Unete/Unete';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/quienessomos" component={QuienesSomos}></Route>
          <Route exact path="/adoptar" component={Adoptar}></Route>
          <Route exact path="/unete" component={Unete}></Route>
        </Switch>
      </Router>


      <Footer />
    </div>
  );
}

export default App;

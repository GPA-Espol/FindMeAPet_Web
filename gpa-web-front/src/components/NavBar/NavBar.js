import React, {Component} from 'react';
import './NavBar.css';
import logo from '../../assets/nav-bar-assets/LogoGPA.png';
// import 'assets/'
// import logo from 'LogoGPA.png'


class NavBar extends Component{

  render(){
    return(
      <React.Fragment>
        <div className="topnav">
          <img className="logo" src={logo} alt="" />

          <div className="nav-options">
            <a className="active" href="#home">Inicio</a>
            <a href="">Quienes somos</a>
            <a href="">Adoptar</a>
            <a href="">Únete</a>
          </div>

          <button type="button">Click Me!</button>

        </div>
      </React.Fragment>
    )
  }
}

export default NavBar

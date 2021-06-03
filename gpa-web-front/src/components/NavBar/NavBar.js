import React, {Component} from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../../fakeBackEnd/navOptions';
import Button from '@material-ui/core/Button';


class NavBar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  
  render () {
    return(
      <nav className="navbar">
        <div className="nav-container container-fluid px-0">

          <div className="logo-container">
            <NavLink exact to="/" className="nav-logo">
              <img src="NavBar/logo_GPA_Horizontal.png" alt="GPA Logo"/>
            </NavLink>
          </div>


          {/* Hamburger menu*/}
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>




          {/* TODO: Has dinámico el app.js relacionado */}
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item,index) => {
              return(
                <li className="nav-link" key={index}>
                  <NavLink exact to={item.url} className="nav-links">
                    {item.nombre}
                  </NavLink>
                </li>
              );
            })}
          </ul>





          {/* TODO: Estiliza el botón */}
          {/* <div className="donar-button-container"> */}
          {/*   <Button className="donar-button" variant="contained" color="primary" */} 
          {/*     style={{color: "#F5f5f5", backgroundColor: "#ea7a1e", fontWeight: "bold"}}>Donar</Button> */}
          {/* </div> */}





        </div>
      </nav>
    )
  }

}

export default NavBar


import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { MenuItems } from '../../fakeBackEnd/navOptions';
import Button from '@material-ui/core/Button';

function NavBar () {

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src="NavBar/LogoGPA_Navbar.png" alt="GPA Logo"/>
          </NavLink>

          {/* TODO: Has dinámico el app.js relacionado */}
          <ul className="nav-menu">
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
          <div className="donar-button-container">
            <Button variant="contained" color="primary" 
              style={{color: "#F5f5f5", backgroundColor: "#ea7a1e", fontWeight: "bold"}}>Donar</Button>
          </div>
          {/* <button className="donar-button" type="button">Click Me!</button> */}

        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar



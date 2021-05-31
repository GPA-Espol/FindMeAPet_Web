import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { MenuItems } from '../../fakeBackEnd/navOptions';


function NavBar () {

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            GPA LOGO
          </NavLink>

          {/* TODO: Has dinámico el app.js relacionado */}
          <ul className="nav-menu">
            {MenuItems.map((item) => {
              return(
                <li className="nav-link">
                  <NavLink exact to={item.url} className="nav-links">
                    {item.nombre}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <button className="donar-button" type="button">Click Me!</button>

        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar



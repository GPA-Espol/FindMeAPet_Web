import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
// import logo from '../../assets/nav-bar-assets/LogoGPA.png';
// import 'assets/'
// import logo from 'LogoGPA.png'

function NavBar () {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            GPA LOGO
          </NavLink>

          <ul className="nav-menu">
            <li className="nav-link">
              <NavLink exact to="/" className="nav-links">
                Inicio
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink exact to="/quienessomos" className="nav-links">
                Quienes somos
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink exact to="/adoptar" className="nav-links">
                Adoptar
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink exact to="/unete" className="nav-links">
                Únete
              </NavLink>
            </li>
          </ul>
          <button className="donar-button" type="button">Click Me!</button>


        </div>
      </nav>
    </React.Fragment>
  )
}


// LO QUE BORRASTE

          {/* <img className="logo" src={logo} alt="" /> */}
          {/* <div className="nav-options"> */}
          {/*   <a className="active" href="#home">Inicio</a> */}
          {/*   <a href="">Quienes somos</a> */}
          {/*   <a href="">Adoptar</a> */}
          {/*   <a href="">Únete</a> */}
          {/* </div> */}
          {/* <button type="button">Click Me!</button> */}

// class NavBar extends Component{

//   render(){
//     return(
//       <React.Fragment>
//         <div className="topnav">
//           <img className="logo" src={logo} alt="" />

//           <div className="nav-options">
//             <a className="active" href="#home">Inicio</a>
//             <a href="">Quienes somos</a>
//             <a href="">Adoptar</a>
//             <a href="">Únete</a>
//           </div>

//           <button type="button">Click Me!</button>

//         </div>
//       </React.Fragment>
//     )
//   }
// }

export default NavBar

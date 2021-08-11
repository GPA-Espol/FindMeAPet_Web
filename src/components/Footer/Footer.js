import React, { Component } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faPhone,
  faMailBulk,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// colores:
// #E8E4E1, #EC823A, #F9C49A, #7C3C21
const spaces6 = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>;

/**
 * Component class in charge of rendering the Footer component
 */
class Footer extends Component {
  render() {
    return (
      <section id="footer-section bg-gray">
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <img
                src="NavBar/logo_GPA_Horizontal.png"
                alt="GPA Logo"
                className="card-img-top mb-4"
              />
              <p className="text-coffee text-center">#AdoptaUnCorazón</p>
              <div className="row row-cols-auto justify-content-center">
                <div className="col">
                  <FontAwesomeIcon icon={faFacebookF} color="#7C3C21" />
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faTwitter} color="#7C3C21" />
                </div>
                <div className="col">
                  <FontAwesomeIcon icon={faInstagram} color="#7C3C21" />
                </div>
              </div>
            </div>
            <div className="col text-coffee ps-5">
              <p>¡INVOLÚCRATE!</p>
              <p className="footer-site-links">¿Quienés Somos?</p>
              <p className="footer-site-links">Adopta un corazón</p>
              <p className="footer-site-links">¡Únete a nosotros!</p>
            </div>
            <div className="col text-coffee ps-5">
              <p>CONTACTO</p>
              <p>
                <FontAwesomeIcon icon={faLocationArrow} color="#7C3C21" />
                {spaces6}Dirección
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} transform={{ rotate: 90 }} color="#7C3C21" />
                {spaces6}Teléfono: 
              </p>
              <p>
                <FontAwesomeIcon icon={faMailBulk} color="#7C3C21" />
                {spaces6}Correo:      
                <a href="mailto:gpa.claudiapoppe@gmail.com"> gpa.claudiapoppe@gmail.com</a>{" "}
              </p>
              <p>
                <FontAwesomeIcon icon={faClock} color="#7C3C21" />
                {spaces6}Horario
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;

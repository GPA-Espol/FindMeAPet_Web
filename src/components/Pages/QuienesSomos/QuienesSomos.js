import React, { Component } from "react";
import "./QuienesSomos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const spaces6 = <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>;

/**
 * Component class in charge of rendering the Quienes Somos page
 */
class QuienesSomos extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          id="quienes-somos"
          style={{ backgroundImage: "url(/paw_wallpaper_bw.jpg)" }}
        >
          <div className="container-fluid">
            <div className="container pt-5">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="fs-1 text-coffee">¿Quiénes somos?</p>
                  <div className="d-flex justify-content-center">
                    <div className="border-top border-coffee border-4 text-transparent">
                      aaaaaaa
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-10">
                  <p className="pb-4 text-coffee fs-5 text-justify fw-bold">
                    GPA Claudia Poppe nace a partir de la necesidad de velar por
                    los que no tienen voz, nuestros animalitos de ESPOL. Somos
                    un grupo de personas comprometidas con el bienestar de los
                    animales, principalmente por los que se encuentran dentro
                    del Campus, promovemos la esterilización, la adopción, el
                    cuidado y la tenencia responsable de mascotas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff5ee"
              d="M0,160L60,144C120,128,240,96,360,106.7C480,117,600,171,720,176C840,181,960,139,1080,117.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section id="que-hacemos">
          <div className="container">
            <div className="row">
              <div className="col-md text-center">
                <p className="fs-1 text-coffee">¿Qué hacemos?</p>
                <div className="d-flex justify-content-center">
                  <div className="border-top border-coffee border-4 text-transparent">
                    aaaaaaa
                  </div>
                </div>
                <ul
                  className="text-start mx-4 no-bullets"
                  id="que-hacemos-list"
                >
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} color="orange" />
                    {spaces6}Alimentamos a la fauna urbana de ESPOL
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} color="orange" />
                    {spaces6}Protegemos a los más indefensos del campus
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} color="orange" />
                    {spaces6}Buscamos un hogar digno para ellos
                  </li>
                </ul>
              </div>
              <div className="col-md d-flex justify-content-center">
                <img
                  src="/QuienesSomos/Gato_2.jpg"
                  className="rounded img-fluid w-50 orange-shadow"
                  alt="Quienes somos alt"
                ></img>
              </div>
            </div>
            <div className="row"></div>
          </div>
        </section>
        <section id="nuestro-equipo">
          <div className="container-fluid">
            <div className="container py-5">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="fs-1 text-white">Conoce a nuestro equipo</p>
                  <div className="d-flex justify-content-center">
                    <div className="border-top border-white border-4 text-transparent">
                      aaaaaaa
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-10">
                  <p className="pb-4 text-white fs-5 text-center">
                    Aquellas personas que hacen todo este proceso posible
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card text-center h-100 bg-transparent border-none">
                    <img
                      src="/QuienesSomos/Gato_2.jpg"
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title text-white">Nombre</h5>
                      <p className="card-text text-white">Cargo</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card text-center h-100 bg-transparent border-none">
                    <img
                      src="/QuienesSomos/Gato_2.jpg"
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title text-white">Nombre</h5>
                      <p className="card-text text-white">Cargo</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card text-center h-100 bg-transparent border-none">
                    <img
                      src="/QuienesSomos/Gato_2.jpg"
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title text-white">Nombre</h5>
                      <p className="card-text text-white">Cargo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default QuienesSomos;

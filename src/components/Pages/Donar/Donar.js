import React, { Component } from "react";
import "./Donar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaw, faCoins, faFileInvoice } from "@fortawesome/free-solid-svg-icons";

const spaces = <span>&nbsp;&nbsp;&nbsp;</span>;

class Donar extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          id="imagen-balto"
          className="container-fluid"
          style={{ backgroundImage: "url(/Donar/Balto.png)" }}
        >
          <div className="container">
            <div className="row mx-5">
              <p className="text-transparent fs-1">.</p>
            </div>
            <div className="row mx-5">
              <p className="text-transparent fs-1">.</p>
            </div>
            <div className="row mx-5">
              <p className="text-transparent fs-1">.</p>
            </div>
            <div className="row text-center mt-5 pt-5">
              <p className="fs-1 header-big text-white fw-bold">
                ¡Haz una donación y alegra vidas!
              </p>
            </div>
            <div className="row text-center text-white">
              <p className="fs-5 pb-3">
                Gracias a personas solidarias como tú, hemos mantenido nuestra
                labro a lo largo de los años
              </p>
            </div>
          </div>
        </section>
        <section id="como-donar" className="pb-5" style={{ backgroundImage: "url(/paw_wallpaper_bw.jpg)" }}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-12 text-center">
                <p className="fs-1 text-coffee">¿Cómo realizar una donación?</p>
                <div className="d-flex justify-content-center">
                  <div className="border-top border-coffee border-4 text-transparent">
                    aaaaaaa
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="card pb-5 mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-center w-100 py-4">
                        <FontAwesomeIcon
                        icon={faPaw}
                        size="7x"
                        color="white"
                        className="icon-main-page"
                        />
                    </div>
                    <h5 className="card-title text-center">Alimento</h5>
                    <p className="card-text">
                      Contáctanos a nuestro{" "}
                      <a href="mailto:gpa.claudiapoppe@gmail.com">correo</a>{" "}
                      para coordinar la entrega y haznos llegar tu donación
                      hasta el domicilio de alguno de nuestros voluntarios.
                    </p>
                  </div>
                  <div className="card-body row">
                    <div className="col-lg-4 py-2"><FontAwesomeIcon icon={faHome} color="#7C3C21" />{spaces}Prosperina</div>
                    <div className="col-lg-4 py-2"><FontAwesomeIcon icon={faHome} color="#7C3C21" />{spaces}Samanes</div>
                    <div className="col-lg-4 py-2"><FontAwesomeIcon icon={faHome} color="#7C3C21" />{spaces}Orquideas</div>
                    <div className="col-lg-4 py-2"><FontAwesomeIcon icon={faHome} color="#7C3C21" />{spaces}Sauces</div>
                    <div className="col-lg-4 py-2"><FontAwesomeIcon icon={faHome} color="#7C3C21" />{spaces}Villa España</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-center w-100 py-4">
                        <FontAwesomeIcon
                        icon={faCoins}
                        size="7x"
                        color="white"
                        className="icon-main-page"
                        />
                    </div>
                    <h5 className="card-title text-center">Ayuda económica</h5>
                    <p className="card-text">
                      Cualquier granito de arena es bienvenido y estaremos muy
                      agradecidos.
                    </p>
                  </div>
                  <div className="card-body row pb-2">
                      <div className="col">
                        <div className="d-flex justify-content-center w-100 py-4">
                            <FontAwesomeIcon
                            icon={faFileInvoice}
                            size="7x"
                            color="white"
                            className="icon-donar-page-1"
                            />
                        </div>
                      </div>
                      <div className="col">
                        <p>
                            Cta. de ahorros<br/>
                            Banco del Pacífico<br/>
                            #1054049490<br/>
                            Mónica Santos Carrasco<br/>
                            C.I. 0927745232<br/>
                            gpa.claudiapoppe@gmail.com<br/>
                        </p>
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

export default Donar;

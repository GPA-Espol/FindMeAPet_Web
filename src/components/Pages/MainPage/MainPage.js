import React from "react";
import "./MainPage.css";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faBone, faHandshake } from "@fortawesome/free-solid-svg-icons";

/**
 * Component class in charge of rendering the Home page
 */
const MainPage = () => {
  let countDuration = 5; // duracion de animacion de conteo en segundos
  return (
    <React.Fragment>
      <section
        className="home-banner-section container-fluid"
        style={{ backgroundImage: "url(/MainPage/Banner_2.png)" }}
      >
        <div className="container py-5">
          <div className="py-3"></div>
          <div className="row row-cols-auto">
            <div className="col">
              <p className="header-giant text-center text-white fw-bold">
                ¡Ayúdalos a<br></br>encontrar un<br></br>hogar!
              </p>
              <p className="fs-3 text-center text-orange fw-bold">
                #AdoptaUnCorazón
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="haces-diferencia-section">
        <div className="container-fluid bg-white">
          <div className="container pt-5">
            <div className="row pb-5">
              <div className="col-12 text-center">
                <p className="fs-1 text-coffee">
                  ¡Tú puedes hacer la diferencia!
                </p>
                <div className="d-flex justify-content-center">
                  <div className="border-top border-coffee border-4 text-white">
                    aaaaaaa
                  </div>
                </div>
              </div>
            </div>
            <div className="row pb-5">
              <div className="col-lg-4 mb-4">
                <div className="card text-center h-100 bg-transparent border-none">
                  <div className="d-flex justify-content-center w-100">
                    <FontAwesomeIcon
                      icon={faCat}
                      size="7x"
                      color="white"
                      className="icon-main-page"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-2 fw-bold text-coffee">
                      Adopta
                    </h5>
                    <p className="card-text fs-5 text-coffee">
                      ¡Protégelos! Otórgales un nuevo hogar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card text-center h-100 bg-transparent border-none">
                  <div className="d-flex justify-content-center w-100">
                    <FontAwesomeIcon
                      icon={faBone}
                      size="7x"
                      color="white"
                      className="icon-main-page"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-2 fw-bold text-coffee">
                      Dona
                    </h5>
                    <p className="card-text fs-5 text-coffee">
                      Ayúdanos a mantener a la fauna urbana del Campus.
                      Cualquier granito de arena nos será util
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card text-center h-100 bg-transparent border-none">
                  <div className="d-flex justify-content-center w-100">
                    <FontAwesomeIcon
                      icon={faHandshake}
                      size="7x"
                      color="white"
                      className="icon-main-page"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-2 fw-bold text-coffee">
                      Únete
                    </h5>
                    <p className="card-text fs-5 text-coffee">
                      Ven junto a nosotros y cuidemos juntos a nuestros
                      animalitos del campus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="como-ayudamos-section"
        style={{ backgroundImage: "url(/paw_wallpaper.jpg)" }}
      >
        <div className="container-fluid bg-gray">
          <div className="container pt-5">
            <div className="row pb-5">
              <div className="col-12 text-center">
                <p className="fs-1 text-coffee">¿Cómo los hemos ayudado?</p>
                <div className="d-flex justify-content-center">
                  <div className="border-top border-coffee border-4 text-gray">
                    aaaaaaa
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card text-center h-100 bg-transparent border-none">
                  <div className="card-body">
                    <h5 className="card-title header-big text-orange">
                      <CountUp end={136} duration={countDuration} />
                    </h5>
                    <p className="card-text fs-4 text-coffee">
                      Gatos y Perros alrededor del campus tienen cuidados y
                      alimento día a día
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card text-center h-100 bg-transparent border-none">
                  <div className="card-body">
                    <h5 className="card-title header-big text-orange">
                      <CountUp end={91} suffix="%" duration={countDuration} />
                    </h5>
                    <p className="card-text fs-4 text-coffee">
                      De los gatos y perros del campus están esterilizados
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card text-center h-100 bg-transparent border-none">
                  <div className="card-body">
                    <h5 className="card-title header-big text-orange">
                      <CountUp
                        end={11}
                        suffix=" años"
                        duration={countDuration}
                      />
                    </h5>
                    <p className="card-text fs-4 text-coffee">
                      Manteniendo la lucha y cada vez haciéndolo de mejor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E8E4E1"
            d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <div className="row text-center fs-1">
            <p className="pb-4 text-white fw-bold">
              Todo lo que se ha logrado hasta el momento es gracias al gran
              corazón de muchas personas que no nos abandonan, así como GPA no
              pretende abandonar a las colonias felinas del campus
            </p>
            <p className="py-4"></p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MainPage;

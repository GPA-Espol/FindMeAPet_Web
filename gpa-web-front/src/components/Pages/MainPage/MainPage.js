import React from 'react';
import './MainPage.css';
import CountUp from 'react-countup';


const MainPage = () => {
  let countDuration = 5; // duracion de animacion de conteo en segundos
  return(
    <React.Fragment>
      <div className="home-banner-section container-fluid" style={{ backgroundImage: "url(/MainPage/Banner_2.png)" }}>
        <div className="container py-5">
          <div className="py-5"></div>
          <div className="py-5"></div>
          <div className="row row-cols-auto">
            <div className="col">
              <p className="fs-1 text-center text-white">¡Ayúdalos a encontrar un hogar!</p>
              <p className="fs-6 text-center text-white">#AdoptaUnCorazón</p>
            </div>
          </div>
          <div className="py-5"></div>
          <div className="py-5"></div>
        </div>
      </div>
      <div className="como-ayudamos-section" style={{ backgroundImage: "url(/paw_wallpaper.jpg)" }}>
        <div className="container-fluid background-GPA1">
          <div className="container pt-5">
            <div className="row pb-5">
              <div className="col-12 text-center">
                <h1>¿Cómo los hemos ayudado?</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div class="card text-center">
                  <div class="card-body">
                    <h5 class="card-title fs-1"><CountUp end={136} duration={countDuration}/></h5>
                    <p class="card-text fs-5">Gatos y Perros alrededor del campus tienen cuidados y alimento día a día</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div class="card text-center">
                  <div class="card-body">
                    <h5 class="card-title fs-1"><CountUp end={91} suffix="%" duration={countDuration}/></h5>
                    <p class="card-text fs-5">De los gatos y perros del campus están esterilizados</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div class="card text-center">
                  <div class="card-body">
                    <h5 class="card-title fs-1"><CountUp end={11} suffix=" años" duration={countDuration}/></h5>
                    <p class="card-text fs-5">Manteniendo la lucha y cada vez haciéndolo de mejor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E8E4E1" d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="container">
          <div className="row text-center fs-2">
            <p className="py-5 text-white">
              Todo lo que se ha logrado hasta el momento es gracias al gran corazón de muchas personas que no nos abandonan, así como GPA no pretende abandonar a las colonias felinas del campus
            </p>
            <p className="py-4"></p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default MainPage

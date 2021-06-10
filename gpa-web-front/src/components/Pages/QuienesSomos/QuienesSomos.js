import React, {Component} from 'react';
import './QuienesSomos.css';

// colores:
// #E8E4E1, #EC823A, #F9C49A, #7C3C21

class QuienesSomos extends Component
{

  render()
  {
    return (
      <React.Fragment>
        <section className="quienes-somos-section" style={{ backgroundImage: "url(/paw_wallpaper_bw.jpg)" }}>
          <div className="container-fluid">
            <div className="container py-5">
              <div className="row">
                <div className="col-12 text-center">
                  <p className="fs-1 text-coffee">¿Quiénes somos?</p>
                  <div className="d-flex justify-content-center">
                    <div className="border-top border-coffee border-4 text-transparent">aaaaaaa</div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col">
                  <p className="pb-4 text-coffee fs-5 text-justify">
                    GPA Claudia Poppe nace a partir de la necesidad de velar por los que no tienen voz, nuestros animalitos de ESPOL. Somos un grupo de personas comprometidas con el bienestar de los animales, principalmente por los que se encuentran dentro del Campus, promovemos la esterilización, la adopción, el cuidado y la tenencia responsable de mascotas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" d="M0,32L48,42.7C96,53,192,75,288,106.7C384,139,480,181,576,186.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </section>
        <section id="que-hacemos">
          <div className="container">
            <div className="row row-cols-3">
              <div className="col text-center">
                <p className="fs-1 text-coffee">¿Qué hacemos?</p>
                <div className="d-flex justify-content-center">
                  <div className="border-top border-coffee border-4 text-transparent">aaaaaaa</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul>
                  <li>Alimentamos a la fauna urbana de ESPOL</li>
                  <li>Protegemos a los más indefensos del campus</li>
                  <li>Buscamos un hogar digno para ellos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default QuienesSomos
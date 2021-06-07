import React, {Component} from 'react';
import './QuienesSomos.css';

// colores:
// #E8E4E1, #EC823A, #F9C49A, #7C3C21

class QuienesSomos extends Component
{

  render()
  {
    return (
      <div className="quienes-somos-section" style={{ backgroundImage: "url(/paw_wallpaper_bw.jpg)" }}>
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
              <div className="col-10">
                <p className="pb-4 text-coffee fs-5 text-justify">
                  GPA Claudia Poppe nace a partir de la necesidad de velar por los que no tienen voz, nuestros animalitos de ESPOL. Somos un grupo de personas comprometidas con el bienestar de los animales, principalmente por los que se encuentran dentro del Campus, promovemos la esterilización, la adopción, el cuidado y la tenencia responsable de mascotas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuienesSomos
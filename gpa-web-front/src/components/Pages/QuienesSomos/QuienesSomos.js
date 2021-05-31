import React, {Component} from 'react';
import './QuienesSomos.css';

// colores:
// #E8E4E1, #EC823A, #F9C49A, #7C3C21

class QuienesSomos extends Component
{

  render()
  {
    return (
      <div className="quienes-somos-section" style={{ backgroundImage: "url(/paw_wallpaper.jpg)" }}>
        <div className="container-fluid background-GPA1">
          <div className="container py-5">
            <div className="row">
              <p className="text-center fs-1">¿Quiénes Somos?</p>
            </div>
            <div className="row">
              <p className="text-center fs-5">
                GPA Claudia Poppe nace a partir de la necesidad de velar por los que no tienen voz,
                nuestros animalitos de ESPOL. Somos un grupo de personas comprometidas con el bienestar
                de los animales, principalmente, por los que se encuentran dentro del Campus, promovemos
                la esterilización, la adopción, el cuidado y la tenecia responsable de mascotas.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default QuienesSomos
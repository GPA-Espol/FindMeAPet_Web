import React, {useState} from 'react';
import './AnimalModal.css';

const ShowAnimal = (pet) => {
  console.log(pet);
  let selectedPet = pet.pet;
  // let esterilizado = selectedPet.is_esterilizado + "";

  // if(esterilizado) {
  //   esterilizado = "¡Ya está esterilizado y listo para ser tu nuevo miembro de la familia!"
  // } else {
  //   esterilizado = "No está esterilizado"
  // }


  
  if (selectedPet !== undefined)
    return (
      <div class="animal-modal-container">
        <div className="animal-modal">
          <div className="modal-image">
            <img className="pet-image" src={selectedPet.imagen_url} alt="pet image" />
          </div>
          <div className="modal-info">
          {/* <div className="container text-center"> */}
            {/* <p className="hola">{selectedPet.id}</p> */}
            <p className="modal-field name">Nombre: </p>
            <p className="field-value name">{selectedPet.nombre}</p>

            <p className="modal-field birthdate">Fecha de nacimiento:</p>
            <p className="field-value birthdate">{selectedPet.fecha_nacimiento}</p>

            <p className="modal-field color">Color: </p>
            <p className="field-value color">{selectedPet.color}</p>

            {/* <p className="modal-field esterilizado">Esterilización: </p> */}
            {/* <p> {esterilizado}</p> */}

            <p className="modal-field description">Descripción: </p>
            <p className="description-box">
              <p className="description-text">
                {selectedPet.descripcion}
              </p>

            </p>

          </div>
        </div>
      </div>
    )
  else
      return (
        <p className="d-none"></p>
      )
}




const AnimalModal = (props) => {
  let animal = props.data;
  return(
    <React.Fragment>
      <ShowAnimal pet={animal} />
    </React.Fragment>
  );
}

export default AnimalModal;

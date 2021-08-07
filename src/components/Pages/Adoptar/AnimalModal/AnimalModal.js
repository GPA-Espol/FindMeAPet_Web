import React, {useState} from 'react';
import './AnimalModal.css';

const ShowAnimal = (pet) => {
  let selectedPet = pet.pet;
  if (selectedPet !== undefined)
    return (
      <div className="container text-center">
        <p className="hola">{selectedPet.id}</p>
        <p className="hola">{selectedPet.nombre}</p>
        <p className="hola">{selectedPet.fecha_nacimiento}</p>
        <p className="hola">{selectedPet.color}</p>
        <p className="hola">{selectedPet.descripcion}</p>
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

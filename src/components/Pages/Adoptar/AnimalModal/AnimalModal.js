import React from 'react';
import './AnimalModal.css';
import Button from "@material-ui/core/Button";

const ShowAnimal = (props) => {
  // let funcion = funcion.funcion; 
  let selectedPet = props.pet;
  let disableModal = props.disableModalMethod;






  
  if (selectedPet !== undefined) {

    let esterilizado = selectedPet.is_esterilizado;

    if(esterilizado) {
      esterilizado = "¡Ya está esterilizado y listo para ser tu nuevo miembro de la familia!"
    } else {
      esterilizado = "No está esterilizado"
    }
    
    

    return (

      <div class="animal-modal-container">

        <div className="animal-modal">

          <div className="modal-image">
            <img className="pet-image" src={selectedPet.imagen_url} alt="imagen mascota" />
          </div>


          <div className="modal-info">

            <div className="modal-pair name">
              <p className="modal-field name">Nombre: </p>
              <p className="field-value name">{selectedPet.nombre}</p>
            </div>


            <div className="modal-pair birthdate">
              <p className="modal-field birthdate">Fecha de nacimiento:</p>
              <p className="field-value birthdate">{selectedPet.fecha_nacimiento}</p>
            </div>


            <div className="modal-pair color">
              <p className="modal-field color">Color: </p>
              <p className="field-value color">{selectedPet.color}</p>
            </div>


            <div className="modal-pair esterilizado">
              <p className="modal-field esterilizado">Esterilización: </p>
              <p className="field-value esterilizado">{esterilizado}</p>
            </div>


            <p className="modal-field description">Descripción: </p>
            <div className="description-box">
              <p className="description-text">
                {selectedPet.descripcion}
              </p>

            </div>


            <div className="adoptar-button-container">
              <Button variant="contained" style={{color: "#F5f5f5", backgroundColor: "#ea7a1e", fontWeight: "bold", height: "50%"}}>
                ¡Adóptalo ya!
              </Button>
            </div>

            {/* <button className="button-adoptar" onClick={() => disableModal()}></button> */}




          </div>
        </div>
      </div>
    )


  }
  else
      return (
        <p className="d-none"></p>
      )
}




const AnimalModal = (props) => {
  let animal = props.data;

  return(
    <React.Fragment>
      <ShowAnimal pet={animal} disableModalMethod={props.stateMethod}/>
    </React.Fragment>
  );
}

export default AnimalModal;

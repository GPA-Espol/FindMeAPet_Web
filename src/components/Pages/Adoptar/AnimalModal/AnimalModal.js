import React from 'react';
import './AnimalModal.css';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

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

    // TODO: Descomenta esto cuando este resuelto lo de los campos null
    // let color = selectedPet.color.charAt(0).toUpperCase() + selectedPet.color.slice(1);
    let color = selectedPet.color;
    
    

    return (

      <div className="animal-modal-container">


        <div className="animal-modal-background" onClick={() => disableModal()}>

          <div className="animal-modal">

            <div className="modal-image">
              <img className="pet-image" src={selectedPet.imagen_url} alt="imagen mascota" />
            </div>


            <div className="modal-info">

              <div className="modal-pair name">
                {/* <p className="modal-field name">Nombre: </p> */}
                <div></div>
                <p className="field-value name">{selectedPet.nombre}</p>
                <i className="fas fa-times fa-2x" onClick={() => disableModal()}/>

              </div>


              <div className="modal-pair birthdate">
                <p className="modal-field birthdate">Fecha de nacimiento:</p>
                <p className="field-value birthdate">{selectedPet.fecha_nacimiento}</p>
              </div>


              <div className="modal-pair color">
                <p className="modal-field color">Color: </p>
                <p className="field-value color">{color}</p>
              </div>


              <div className="modal-pair esterilizado">
                <p className="modal-field esterilizado">Esterilización: </p>
                <p className="field-value esterilizado">{esterilizado}</p>
              </div>

              <div className="modal-pair description">
                <p className="modal-field description">Descripción: </p>
                <div className="description-box">
                  <p className="description-text">
                    {selectedPet.descripcion}
                  </p>

                </div>
              </div>


              <div className="adoptar-button-container">
                <Link exact to="/formulario">
                  <Button variant="contained" style={{color: "#F5f5f5", 
                      background: 'rgb(227,93,38)',
                      fontWeight: "bold", height: "50%"}}>
                    ¡Adóptalo ya!
                  </Button>
                </Link>
                
              </div>

              {/* <button className="button-adoptar" onClick={() => disableModal()}></button> */}




            </div>


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

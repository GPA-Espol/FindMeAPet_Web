import React, {Component} from 'react';
import './Adoptar.css';
import { AnimalItems } from '../../../fakeBackEnd/animalsCatalog.js';

const colores = ['Gris', "Blanco", 'Cafe', 'Negro', 'Naranja', 'Crema'];
const sexo = ['Macho', 'Hembra'];
const edades = ['Gatito', 'Adulto', 'Mayor'];

function constructOption(value, index)
{
  return (<option value={value} key={index}>{value}</option>);
}

function constructAnimalCard(item, index)
{
  return (
    <div className="my-card col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
      <div className="hover hover-2 text-white rounded"><img src="" alt=""/>
        <div className="hover-overlay"></div>
        <div className="hover-2-content px-5 py-4">
          <h3 className="hover-2-title text-uppercase font-weight-bold mb-0"> 
            <span className="font-weight-light">{item.nombre}</span>
          </h3>
          <p className="hover-2-description text-uppercase mb-0">
            {item.descripcion}
          </p>
          <img src={item.imagen} alt="Imagen del gatito" />
        </div>
      </div>  
    </div>
  );
}



class PagAdoptar extends Component{

  constructor(props) {
    super(props);
    this.state = {
      edad: 'Todos',
      color: 'Todos',
      sexo: 'Todos',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault();
  }

  render(){
    return(
      <div className="pag-adoptar">
        <form onSubmit={this.handleSubmit} className="container">
          <div className="row row-cols-auto flex-column flex-sm-row justify-content-center text-center">
            <label className="col">
              Edad:
              <select value={this.state.edad} onChange={this.handleChange} name="edad" className="ms-2">
                <option value='Todos'>Todos</option>
                {edades.map((item,index) => {
                  return constructOption(item, index)
                })}
              </select>         
            </label>
            
            <label className="col">
              Color:
              <select value={this.state.color} onChange={this.handleChange} name="color" className="ms-2">
                <option value='Todos'>Todos</option>
                {colores.map((item,index) => {
                  return constructOption(item, index)
                })}
              </select>         
            </label>
            <label className="col">
              Sexo:
              <select value={this.state.sexo} onChange={this.handleChange} name="sexo" className="ms-2">
                <option value='Todos'>Todos</option>
                {sexo.map((item,index) => {
                  return constructOption(item, index)
                })}
              </select>         
            </label>
            <div className="col">
              <input type="submit" value="Submit" />
            </div>
          </div>
          
        </form>
        <div className="adoptar-container">
          <div className="catalogo">
            <div className="catalogo-container">
              {/* Bootstrap */}
              <div className="container">
                <div className="row">
                    {/* Logica iterable con styling */}
                    {AnimalItems.map((item,index) => {
                      // TODO> Refactoring para mejores condiciones
                      let isEdad = (this.state.edad == item.edad || this.state.edad === "Todos");
                      let isColor = (this.state.color == item.color || this.state.color === "Todos");
                      let isSexo = (this.state.sexo == item.sexo || this.state.sexo === "Todos");
                      if(isColor && isEdad && isSexo)
                        return constructAnimalCard(item, index);
                      return <span className="d-none" key={index}></span>
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}







                    {/* Lógica iterable para las tarjetas */}
                    {/* TODO: Usa la imagen como background y el link lo usaras en el futuro para la ventana del animalito */}
                    {/* {AnimalItems.map((item,index) => {
                      return(
                        <div className="card col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                          <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p className="card-text">{item.descripcion}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                          </div>
                        </div> 
                      );
                    })} */}





                  {/* Tarjeta con diseño como me la baje (con mis modificaciones para que sea responsive) */}
                  {/* <div className="my-card col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                     <div className="hover hover-2 text-white rounded"><img src="" alt=""/>
                       <div className="hover-overlay"></div>
                       <div className="hover-2-content px-5 py-4">
                         <h3 className="hover-2-title text-uppercase font-weight-bold mb-0"> 
                           <span className="font-weight-light">Image</span>
                         </h3>
                         <p className="hover-2-description text-uppercase mb-0">
                           Lorem ipsum dolor sit amet, consectetur<br/>adipisicing elit.
                         </p>
                       </div>
                     </div>  
                  </div> */}





                  {/* This is the good card */}
                  {/* <div className="card col-xxl col-xl col-lg col-md-6 col-sm-6">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>  */}
      
                  {/* This is the winner card */}
                  {/* <div className="card col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>  */}



                    // This is the card with the style
              {/* <div className="cat-catalog"> */}
              {/*   <div className="row"> */}
              {/*     <div className="row-cols-1 row-cols-md-4"> */}
              {/*        <div className="hover hover-2 text-white rounded"><img src="" alt=""/> */}
              {/*          <div className="hover-overlay"></div> */}
              {/*          <div className="hover-2-content px-5 py-4"> */}
              {/*            <h3 className="hover-2-title text-uppercase font-weight-bold mb-0"> */} 
              {/*              <span className="font-weight-light">Image</span> */}
              {/*              Caption */}
              {/*            </h3> */}
              {/*            <p className="hover-2-description text-uppercase mb-0"> */}
              {/*              Lorem ipsum dolor sit amet, consectetur<br/>adipisicing elit. */}
              {/*            </p> */}
              {/*          </div> */}
              {/*        </div> */}  
              {/*     </div> */}
              {/*   </div> */}
              {/* </div> */}








// Chequea estos recursos:
// 1. https://getbootstrap.com/docs/5.0/components/card/ 
// 2. https://bootstrapious.com/p/bootstrap-image-hover#:~:text=Bootstrap%20Image%20Hover%20combines%20accessibility,quick%20introduction%20to%20your%20photo 
// 3. https://www.ordinarycoders.com/blog/article/codepen-bootstrap-card-hovers

export default PagAdoptar

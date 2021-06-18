import React, {Component} from 'react';
import './Adoptar.css';
import { AnimalItems } from '../../../fakeBackEnd/animalsCatalog.js';


class PagAdoptar extends Component{
  elementsInRow = 0;

  render(){
    return(
      <div className="pag-adoptar">
        <div className="adoptar-container">
          <div className="catalogo">
            <div className="catalogo-container">

              {/* Bootstrap */}
              <div class="container">

      
                <div className="row">
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




                    {/* Lógica iterable para las tarjetas */}
                    {/* TODO: Usa la imagen como background y el link lo usaras en el futuro para la ventana del animalito */}
                    {AnimalItems.map((item,index) => {
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

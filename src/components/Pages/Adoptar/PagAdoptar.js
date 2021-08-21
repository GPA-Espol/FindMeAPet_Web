// TODO: Refactoring para mejor mantenibilidad

import React, { Component } from "react";
import "./PagAdoptar.css";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import AnimalModal from "./AnimalModal/AnimalModal";
import { FormData } from "../Formulario/Formulario";

/**
 * Listas constantes (fake backend)
 */
let colores = [];
const tipos = ["Gato", "Perro"];
const sexo = ["Macho", "Hembra"];
const edades = ["Cachorro", "Juvenil", "Adulto"];

/**
 * Construct and return an <option> HTML object with the value and index as params
 * @param {string} value Option value
 * @param {number} index Index value for "key" attribute
 * @returns HTML object <option>
 */
export const ConstructOption = ({ value, index }) => (
  <option value={value} key={index}>
    {value}
  </option>
);

/**
 * Construct and return a personalized HTML object with the image, description and name of an animal object
 * @param {object} item Animal object
 * @param {number} index Index value for "key" attribute
 * @returns Personalized HTML object with the image, description and name of item param
 */
export const ConstructAnimalCard = ({ item, index }) => {

  let categoriaEdad = item.categoria_edad.charAt(0).toUpperCase() + item.categoria_edad.slice(1);
  let sexoCard = (item.sexo === 'M' ? 'Macho' : 'Hembra');
  console.log(typeof item.categoria_edad)


  return(
    <div
    key={index}
    tabIndex={index}
    >
      <div className="hover hover-2 text-white rounded">
        <img src="" alt="" />
        <div className="hover-overlay"></div>
        <div className="hover-2-content px-5 py-4">
          <h3 className="hover-2-title text-uppercase font-weight-bold mb-0">
            <span className="font-weight-light">{item.nombre}</span>
          </h3>
          {/* OG className */}
          {/* <p className="hover-2-description text-uppercase mb-0"> */}
          <p className="hover-2-description mb-0">
            EDAD: {categoriaEdad} <br/> 
            SEXO: {sexoCard} <br/><br/>
            DESCRIPCIÓN: <br/>
            {item.descripcion}. Conoce al nuevo miembro de tu familia.
          </p>
          {/* <img className="cat-image" src={item.imagen_url} alt="" /> */}
          <img className="cat-image" src={item.imagen_url} alt="" onError={(e)=>{e.target.onerror = null; e.target.src="cat-placeholder.svg"}}/>
        </div>
      </div>
    </div>

  )
};


/**
 * Returns a non-displayable card
 * @param {number} index Index of array
 */
export const NoneCard = ({ index }) => (
  <span className="d-none" key={index}>
    No se muestra
  </span>
);

/**
 * Checks and returns a HTML object if there are no results from the filters
 * @param {boolean} noResults Boolean indicator if any animal match the filters
 * @returns Personalized HTML object if there are no results from the filters
 */
export const CheckResults = ({ noResults }) => {
  let noResultsMessage = (
    <div className="no-results">
      <p>No hay gatitos con esas caractrísticas (por ahora :))!</p>
    </div>
  );

  if (noResults) {
    return noResultsMessage;
  }
  return <span className="d-none">No se muestra</span>;
};




/**
 * Component class in charge of rendering the Adopt page
 */
class PagAdoptar extends Component {


  constructor(props) {
    super(props);
    this.state =
      props.state !== undefined
        ? props.state
        : {
            edad: "Edad",
            color: "Color",
            sexo: "Sexo",
            tipo: "Tipo",
            animales: [],
            animalSelected: undefined,
          };

    this.noResults = true;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.noResults = true;
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  selectAnimal(animal, isModal) {
    this.setState({animalSelected: animal});
    if (!isModal)
      FormData["animal"] = animal;
  }



  capitalizeFirstLetter(str) {
    if(str === null)  return "null";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  componentDidMount() {
    const apiUrl = 'https://findmepet.herokuapp.com/mascota';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({animales: data})
        
      })
      .then(x => {
        for (let obj of this.state.animales) {
          let colorCapitalize = this.capitalizeFirstLetter(obj.color);
          if (!colores.includes(colorCapitalize))
            colores.push(colorCapitalize);
        }
      });
  }

  render() {

    return (
      <React.Fragment>
        <section id="proceso-adopcion">
          <div className="container pt-5 pb-3">
            <div className="row">
              <div className="col-12 text-center">
                <p className="fs-1 text-white">
                  ¡Tú puedes hacer la diferencia!
                </p>
                <div className="d-flex justify-content-center">
                  <div className="border-top border-white border-4 text-transparent">
                    aaaaaaa
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card bg-transparent border-none">
                  <div className="card-body pb-0">
                    <div className="hori-timeline" dir="ltr">
                      <ul className="list-inline events">
                        <li className="list-inline-item event-list">
                          <div className="px-2">
                            <div className="event-date bg-soft-primary fw-bold text-coffee bg-white ms-4">
                              01
                            </div>
                            <h5 className="font-size-16 pb-3 text-white text-start fw-bolder">
                              Elige a tu mascota ideal
                            </h5>
                            <p className="text-white text-start">
                              Selecciona a tu nuevo compañero en nuestro catálogo de animales disponibles.
                            </p>
                          </div>
                        </li>
                        <li className="list-inline-item event-list">
                          <div className="px-2">
                            <div className="event-date bg-soft-primary fw-bold text-coffee bg-white ms-4">
                              02
                            </div>
                            <h5 className="font-size-16 pb-3 text-white text-start fw-bolder">
                              Llena el formulario
                            </h5>
                            <p className="text-white text-start">
                              ¡Contesta las preguntas de nuestro formulario para conocerte mejor!
                            </p>
                          </div>
                        </li>
                        <li className="list-inline-item event-list">
                          <div className="px-2">
                            <div className="event-date bg-soft-primary fw-bold text-coffee bg-white ms-4">
                              03
                            </div>
                            <h5 className="font-size-16 pb-3 text-white text-start fw-bolder">
                              Espera confirmación
                            </h5>
                            <p className="text-white text-start">
                              Espera a que te contactemos para la entrega de tu
                              nuevo compañero de vida.<br/><br/>¡Quiérelo tanto como
                              él definitivamente te querrá a tí!
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff5ee"
              d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,197.3C672,192,768,224,864,245.3C960,267,1056,277,1152,272C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>
        <section id="elige-mascota">
          <div className="container pb-3">
            <div className="row">
              <div className="col-12 text-center mb-3">
                <p className="text-coffee fs-3">1. Elige a tu mascota ideal</p>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="row row-cols-auto flex-column flex-sm-row justify-content-center text-center">
                <label className="col">
                  <select
                    value={this.state.edad}
                    onChange={this.handleChange}
                    name="edad"
                    className="form-select ms-0"
                  >
                    <option value="Edad">
                      Edad
                    </option>
                    {edades.map((item, index) => {
                      return <ConstructOption value={item} index={index} key={index}/>;
                    })}
                  </select>
                </label>

                <label className="col">
                  <select
                    value={this.state.color}
                    onChange={this.handleChange}
                    name="color"
                    className="form-select ms-0"
                  >
                    <option value="Color" key="0">
                      Color
                    </option>
                    {colores.map((item, index) => {
                      return <ConstructOption value={item} index={index} />;
                    })}
                  </select>
                </label>
                <label className="col">
                  <select
                    value={this.state.sexo}
                    onChange={this.handleChange}
                    name="sexo"
                    className="form-select ms-0"
                  >
                    <option value="Sexo" key="0">
                      Sexo
                    </option>
                    {sexo.map((item, index) => {
                      return <ConstructOption value={item} index={index} />;
                    })}
                  </select>
                </label>
                <label className="col">
                  <select
                    value={this.state.tipo}
                    onChange={this.handleChange}
                    name="tipo"
                    className="form-select ms-0"
                  >
                    <option value="Tipo" key="0">
                      Tipo
                    </option>
                    {tipos.map((item, index) => {
                      return <ConstructOption value={item} index={index} />;
                    })}
                  </select>
                </label>
              </div>
            </form>
          </div>

          <div className="adoptar-container">
            <div className="catalogo">
              <div className="catalogo-container">
                <div className="container">
                  <div className="row">
                    {this.state.animales.map((item, index) => {
                      console.log(item)
                      let isEdad =
                        this.state.edad.toLowerCase() === item.categoria_edad ||
                        this.state.edad === "Edad";
                      let isColor =
                        this.state.color.toLowerCase() === item.color ||
                        this.state.color === "Color";
                      let isSexo =
                        this.state.sexo === (item.sexo === "M" ? "Macho" : "Hembra") ||
                        this.state.sexo === "Sexo";
                      let isTipo =
                        this.state.tipo === item.tipo_mascota ||
                        this.state.tipo === "Tipo";

                      if (isColor && isEdad && isSexo && isTipo) {
                        this.noResults = false;
                        return (
                          <div className="my-card col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
                          onClick={() => this.selectAnimal(item, false)}>
                            <ConstructAnimalCard item={item} index={index} />
                          </div>
                        );
                      }
                      return <NoneCard index={index} />;
                    })}
                    {<CheckResults noResults={this.noResults} />}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Este es el modal */}
          <AnimalModal data={this.state.animalSelected} stateMethod={() => this.selectAnimal(undefined, true)}/>

        </section>
        <section id="llenar-formulario" className="p-section" style={{ backgroundImage: "url(/paw_wallpaper_bw.jpg)" }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center mb-3">
                <p className="text-coffee fs-3">2. Llena el formulario</p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-12 col-md-8">
                <p className="fs-5 text-coffee mb-0 py-2 text-end">
                  Haz click en un animalito y recuerda revisar tus datos e ingresar información{" "}
                  <strong>verídica</strong>
                </p>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center">
                
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      color: "#F5f5f5",
                      backgroundColor: "#ea7a1e",
                      fontWeight: "bold",
                    }}
                  >
                    Formulario
                  </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="espera-confirmacion" className="p-section bg-white">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 text-center mb-3">
                <p className="text-coffee fs-3">3. Espera tu confirmación</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <FontAwesomeIcon
                  icon={faHeartbeat}
                  size="5x"
                  color="white"
                  className="icon-adoptar-page"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center my-3">
                <p className="text-coffee fs-4">¡Muchas gracias por estar interesado en adoptar!</p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PagAdoptar;

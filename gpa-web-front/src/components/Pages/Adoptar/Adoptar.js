// TODO: Refactoring para mejor mantenibilidad

import React, { Component } from "react";
import "./Adoptar.css";
import { AnimalItems } from "../../../fakeBackEnd/animalsCatalog.js";

const colores = ["Gris", "Blanco", "Cafe", "Negro", "Naranja", "Crema"];
const sexo = ["Macho", "Hembra"];
const edades = ["Gatito", "Adulto", "Mayor"];

/**
 * Construct and return an <option> HTML object with the value and index as params
 * @param {string} value Option value
 * @param {number} index Index value for "key" attribute
 * @returns HTML object <option>
 */
function constructOption(value, index) {
  return (
    <option value={value} key={index}>
      {value}
    </option>
  );
}

/**
 * Construct and return a personalized HTML object with the image, description and name of an animal object
 * @param {object} item Animal object
 * @param {number} index Index value for "key" attribute
 * @returns Personalized HTML object with the image, description and name of item param
 */
function constructAnimalCard(item, index) {
  return (
    <div
      className="my-card col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12"
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
          <p className="hover-2-description text-uppercase mb-0">
            {item.descripcion}
          </p>
          <img
            className="cat-image"
            src={item.imagen}
            alt="Imagen del gatito"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Component class in charge of rendering the Adopt page
 */
class PagAdoptar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edad: "Edad",
      color: "Color",
      sexo: "Sexo",
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

  checkResults(noResults) {
    let noResultsMessage = (
      <div className="no-results">
        <p>No hay gatitos con esas caractrísticas (por ahora :))!</p>
      </div>
    );

    if (noResults) {
      return noResultsMessage;
    }
    return <span className="d-none"></span>;
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
                              Elige tu mascota ideal
                            </h5>
                            <p className="text-white text-start">
                              Selecciona tu nuevo compañero en la sección de
                              animales disponibles
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
                              Contesta las preguntas del formulario que nos
                              permite conocerte un poco más
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
                              Espera a que te contactemos para la entrega tu
                              nuevo compañero de vida
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
                <p className="text-coffee fs-3">
                  1. Elige tu mascota ideal
                </p>
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
                    <option value="Edad">Edad</option>
                    {edades.map((item, index) => {
                      return constructOption(item, index);
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
                    <option value="Color">Color</option>
                    {colores.map((item, index) => {
                      return constructOption(item, index);
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
                    <option value="Sexo">Sexo</option>
                    {sexo.map((item, index) => {
                      return constructOption(item, index);
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
                    {AnimalItems.map((item, index) => {
                      let isEdad =
                        this.state.edad === item.edad ||
                        this.state.edad === "Edad";
                      let isColor =
                        this.state.color === item.color ||
                        this.state.color === "Color";
                      let isSexo =
                        this.state.sexo === item.sexo ||
                        this.state.sexo === "Sexo";

                      if (isColor && isEdad && isSexo) {
                        this.noResults = false;
                        return constructAnimalCard(item, index);
                      }
                      return <span className="d-none" key={index}></span>;
                    })}
                    {this.checkResults(this.noResults)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PagAdoptar;

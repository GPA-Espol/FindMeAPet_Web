import React, { Component } from "react";
import "./Formulario.css";
import AnimalModal from "../Adoptar/AnimalModal/AnimalModal";

export let FormData = {
    "animal" : undefined
};

class Formulario extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section className="form-header">
                    <div className="container text-center">
                        <p className="fs-1">Formulario de adopción</p>
                        <AnimalModal data={FormData.animal} />
                    </div>
                </section>
                <section className="form-body">
                    <div className="container">
                        <div className="d-flex justify-content">
                            <button onClick={() => console.log(FormData.animal)}>Console Animal Selected</button>
                        </div>
                    </div>
                    
                </section>
            </React.Fragment>
        );
    }
}

export default Formulario;
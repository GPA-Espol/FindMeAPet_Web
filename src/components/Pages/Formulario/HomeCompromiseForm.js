import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

// Labels
const alergiaLabel = "¿La familia presenta alergia(s)? a perros o gatos? *";
const esterilizacionLabel = "¿Se compromete con nosotros a la esterilización de la mascota? *";
const acuerdoLabel = "¿Están ellos de acuerdo con la adopción de la mascota? *";
const tipoViviendaLabel = "¿Qué tipo de vivienda habita? *";
const alquiladoLabel = "La vivienda donde habita es: *";
const duenoAlquiladoLabel = "¿El dueño del lugar está de acuerdo con la adopción de una mascota?";

// Select options
const tipoViviendas = ["Casa", "Departamento", "Condominio", "Finca", "Otro"];
const alquiladoOptions = ["Propia", "Alquilada"];
const yesNoOptions = ["Si", "No"]

function ConstructSelectInput(options, stateOption, label, handleChange, name) {
  return (
    <React.Fragment>
      <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
      <Select
        className={stateOption === options[0] ? "MuiFormLabel-root" : ""}
        labelId="demo-simple-select-label"
        id="simple-select"
        name={name}
        label={name}
        value={stateOption}
        onChange={handleChange}
        fullWidth
        required
        >
        {options.map((item, index) => {
                  return <MenuItem value={item} key={index}>{item}</MenuItem>;
        })}
      </Select>
    </ React.Fragment>
    
  );
}

export default class HomeCompromiseForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tipoVivienda: "",
      isAlquilada: "",
      isDuenoSabe: "", // Si el dueño del lugar sabe
      isAlergica: "",
      isCompromisoEsterilizacion: "",
      isDeAcuerdo: ""
    };
  }

  handleChange = (event) => {
    console.log(event.target);
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Hogar y Compromisos
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField
            id="filled-number"
            label="Número de niños"
            type="number"
            fullWidth
            required
          />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="filled-number-adults"
              label="Número de adultos"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {ConstructSelectInput(tipoViviendas, this.state.tipoVivienda, tipoViviendaLabel, this.handleChange, "tipoVivienda")}
            {/* <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            {ConstructSelectInput(alquiladoOptions, this.state.isAlquilada, alquiladoLabel, this.handleChange, "isAlquilada")}
          </Grid>
          <Grid item xs={12} className={this.state.isAlquilada !== "Alquilada" ? "d-none": ""}>
            {ConstructSelectInput(yesNoOptions.concat(["No sabe"]), this.state.isDuenoSabe, duenoAlquiladoLabel, this.handleChange, "isDuenoSabe")}
          </Grid>
          <Grid item xs={12}>
            {ConstructSelectInput(yesNoOptions.concat(["Aun no lo he conversado"]), this.state.isDeAcuerdo, acuerdoLabel, this.handleChange, "isDeAcuerdo")}
            {/* <FormControlLabel
              control={<Checkbox color="secondary" name="hayAceptacion" />}
              label="¿Están ellos de acuerdo con la adopción de la mascota?"
            /> */}
          </Grid>
          <Grid item xs={12}>
            {ConstructSelectInput(yesNoOptions.concat(["No estoy seguro/a"]), this.state.isAlergica, alergiaLabel, this.handleChange, "isAlergica")}
          </Grid>
          <Grid item xs={12}>
            {ConstructSelectInput(yesNoOptions.concat(["Tal vez"]), this.state.isCompromisoEsterilizacion, esterilizacionLabel, this.handleChange, "isCompromisoEsterilizacion")}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
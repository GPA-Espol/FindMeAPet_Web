import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const estadosCiviles = ["Estado Civil" ,"Soltero/a", "Casado/a", "Divorciado/a"];
const referencias = ["Referencia","Redes Sociales", "Mail masivo", "Publicidad impresa", "Referidos", "Otros"];

export default class PersonalForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      estadoCivil: estadosCiviles[0],
      referencia: referencias[0],
    }
  }

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Datos Personales
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Nombre"
                fullWidth
                autoComplete="given-name"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Apellido"
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{display: "flex", justifyContent: "end"}}>
              <Select
                className={this.state.estadoCivil === estadosCiviles[0] ? "MuiFormLabel-root" : ""}
                labelId="demo-simple-select-label"
                id="simple-select"
                name="estadoCivil"
                value={this.state.estadoCivil}
                onChange={this.handleChange}
                fullWidth
                required
              >
                {estadosCiviles.map((item, index) => {
                          return <MenuItem value={item} key={index}>{item}</MenuItem>;
                })}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    id="date-picker-inline"
                    label="Fecha de Nacimiento"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                
              </MuiPickersUtilsProvider>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="phone"
                name="phone"
                label="Telefono Fijo"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="mobile"
                name="mobile"
                label="Celular"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="Ciudad"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="País"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="address"
                name="address"
                label="Dirección"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Correo electrónico"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={6} style={{display: "flex", justifyContent: "end"}}>
              <Select
                className={this.state.referencia === referencias[0] ? "MuiFormLabel-root" : ""}
                labelId="demo-simple-select-label"
                id="simple-select"
                name="referencia"
                label="Referencia"
                value={this.state.referencia}
                onChange={this.handleChange}
                fullWidth
                required
                >
                {referencias.map((item, index) => {
                          return <MenuItem value={item} key={index}>{item}</MenuItem>;
                })}
              </Select>
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details"
              />
            </Grid> */}
          </Grid>
        </React.Fragment>
      );
  }
}
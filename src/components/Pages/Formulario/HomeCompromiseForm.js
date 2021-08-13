import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const tipoVivienda = ["Tipo de Vivienda", "Propia", "Arrendada"]

export default function HomeCompromiseForm() {
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
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="hayAceptacion" />}
            label="¿La familia acepta a la mascota?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="hayAlergia" />}
            label="¿La familia presenta alergia(s)?"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="hayCompromiso" />}
            label="¿Se compromete a la esterilización?"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
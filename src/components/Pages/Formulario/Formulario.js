import React, { Component } from "react";
import "./Formulario.css";
import AnimalModal from "../Adoptar/AnimalModal/AnimalModal";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PersonalForm from './PersonalForm';
import HomeCompromiseForm from './HomeCompromiseForm';
import Review from './Review';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export let FormData = {
    "animal" : undefined
};

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        color: "#F5f5f5",
        backgroundColor: "#ea7a1e",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "rgb(234, 122, 30)",
        }
    },
}));

const steps = ['Datos Personales', 'Datos de Hogar', 'Confirmación'];

function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalForm />;
      case 1:
        return <HomeCompromiseForm />;
      case 2:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
}

const muiTheme = createMuiTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                '&$active': {
                    color: '#ea7a1e',
                },
                '&$completed': {
                    color: 'rgba(0, 0, 0, 0.38)',
                },
                
            },
        },
    }
});

const Formulario = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep(activeStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Formulario de Adopción
            </Typography>
            <MuiThemeProvider theme={muiTheme}>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                    <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
                </Stepper>
            </MuiThemeProvider>
            
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order confirmation, and will
                    send you an update when your order has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Siguiente'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          {/* <Copyright /> */}
        </main>
        <button onClick={() => console.log(FormData.animal)}>Print Animal</button>
      </React.Fragment>
    );
  }

/*
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
                        <FormModal />
                        <div className="d-flex justify-content">
                            <button onClick={() => console.log(FormData.animal)}>Console Animal Selected</button>
                        </div>
                    </div>
                    
                </section>
            </React.Fragment>
        );
    }
}
*/
export default Formulario;
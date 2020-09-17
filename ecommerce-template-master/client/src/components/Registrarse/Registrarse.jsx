import React, { useState } from "react";
import s from "./registrarse.css"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import imagen from "../../images/check.png";
import axios from 'axios';
import {useHistory} from "react-router-dom";
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Henry App
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export default function Registrarse() {
    const classes = useStyles();
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const redirect = useHistory();
    const [field, setField] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: ""
    });

    const handleChange = function (e) {
        setField({
            ...field,
            [e.target.name]: e.target.value
        });
    }

    // CONECTAR BACK CON FRONT 
    const submitUser = function (e) {
        e.preventDefault()

        if (field.password !== field.repassword) {
            return alert("", "...Las contraseñas deben coincidir!")
        }

        axios.post('http://localhost:3006/user', {
            nombre: field.nombre,
            apellido: field.apellido,
            email: field.email,
            password: field.password,
            active: true
        }, { withCredentials: true })
            .then(res => {
                const { status, message } = res.data; // Siempre vamos a mandar un status en register, para verificar que esta logueado (ok) o no (error).
                if (status === 'error') {
                    setError(true);
                    setHelperText(`Error al registrarse: ${message}`);
                } else { // el usuario se creo bien
                    setHelperText('')
                }
                redirect.replace("/")
            }).catch(err => {
                //console.log(err.response)
                //setHelperText(err.response)
            })
    }

    return (
        <div>
            <div className={s.container}>

                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <img src={imagen} />
                        <Typography component="h1" variant="h5">
                            Registrarse
                    </Typography>
                        <form className={classes.form} noValidate onSubmit={submitUser}>
                            <TextField
                                type='text'
                                value={field.nombre}
                                name="nombre"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nombre"
                                autoFocus
                                onChange={handleChange}
                            />
                            <TextField
                                type="text"
                                variant="outlined"
                                value={field.apellido}
                                required
                                fullWidth
                                id="lastName"
                                label="Apellido"
                                name="apellido"
                                onChange={handleChange}
                            />
                            <TextField
                                type="email"
                                value={field.email}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                onChange={handleChange}
                            />
                            <TextField
                                value={field.password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />
                            <TextField
                                value={field.repassword}
                                variant="outlined"
                                required
                                fullWidth
                                name="repassword"
                                label="Confirme su contraseña"
                                type="password"
                                id="repassword"
                                autoComplete="current-password"
                                onChange={handleChange}
                            />


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Registrarse
                    </Button>
                            <FormHelperText error={error}> {helperText} </FormHelperText>
                            <Link href="http://localhost:3000" variant="body2">
                                ¿Ya tiene una cuenta? Ingresar
              </Link>
                        </form>
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>


            </div>
        </div>
    )
}
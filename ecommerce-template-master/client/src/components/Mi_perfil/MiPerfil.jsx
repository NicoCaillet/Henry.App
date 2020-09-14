import React, { useState, useEffect } from 'react';
import { TextField, Popover, Grid, Container, Card, CardMedia, CardActions, CardHeader, Typography, Divider, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditIcon from '@material-ui/icons/Edit';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './MiPerfil.styles';
import Axios from 'axios';
import { connect } from 'react-redux'

const perfil = {

    nombre: 'Manuel',
    apellido: 'Barna Ferres',
    foto: 'https://www.soyhenry.com/static/MANU-800a7fffdc31e8be6dddc7a9b573f5f9.png',
    edad: '30',
    localidad: 'Buenos Aires',
    email: 'manu@gmail.com',
    rol: 'Estudiante',
    password: '123123',
}



function MiPerfil(props) {
    const classes = useStyles();

    // PopOver del email
    useEffect(()=>{
        Axios.get("http://localhost:3006/user/me", { withCredentials:true })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    },[])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    /////

    return (
        <Container className={classes.contenedor} >
            <Grid className={classes.contenedor} container>

                {/* ACA EMPIEZA LA TARJETA */}
                <Grid item xs={10} sm={10} md={6} >
                    <div className={classes.div1}>
                        <Grid item xs={10} sm={10} md={6} lg={6}>
                            <Card className={classes.card}>
                                <CardHeader
                                    action={<IconButton aria-label="settings">
                                        <MoreVertIcon /></IconButton>}
                                    title={props.user.user.nombre + ' ' + props.user.user.apellido}
                                />
                                <CardMedia className={classes.media}
                                    image={perfil.foto}
                                >
                                </CardMedia>
                                <CardActions disableSpacing>
                                    <Typography color="textSecondary">
                                        {props.user.user.rol}
                                    </Typography>
                                    <Divider variant="middle" orientation="vertical" flexItem />
                                    <IconButton color='secondary' aria-label="email" onClick={handleClick}>
                                        <MailOutlineIcon />
                                    </IconButton>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography className={classes.typography}> {perfil.email} </Typography>
                                    </Popover>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>
                </Grid>


                {/* ACA EMPIEZA LA DESCRIPCION DE PERFIL */}
                <Grid item xs={10} sm={10} md={4}>
                    <div className={classes.div2}>
                        <Card className={classes.card2}>
                            <TextField value={props.user.user.nombre} label="Nombre" name="nombre" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                            <TextField value={props.user.user.apellido} label="Apellido" name="apellido" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                            <TextField value={perfil.edad} label="Edad" name="edad" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                            <TextField value={perfil.localidad} label="Localidad" name="localidad" autoFocus margin="dense" color='secondary' type="text" fullWidth />
                            <TextField value={props.user.user.email} label="Email" name="email" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                            <TextField value={props.user.user.rol} label="Rol" name="rol" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                            <IconButton color='secondary' aria-label="editar" >
                                <EditIcon />
                            </IconButton>
                            <IconButton color='secondary' aria-label="cambiar password" >
                                <VpnKeyIcon />
                            </IconButton>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Container >

    );
}

const mapStateToProps = ({ user }) => ({
    user
  })
    
export default connect(mapStateToProps, null)(MiPerfil)
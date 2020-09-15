import React, { useState, useEffect } from 'react';
import { TextField, Popover, Grid, Container, Card, CardMedia, CardActions, CardHeader, Typography, Divider, IconButton } from '@material-ui/core';
import { Slide, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import EditIcon from '@material-ui/icons/Edit';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './MiPerfil.styles';
import Trayectoria from './Trayectoria'
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

// Funcion para el efecto de slide en el dialogo
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function MiPerfil(props) {

    const classes = useStyles();

    // PopOver del email
    useEffect(() => {
        Axios.get("http://localhost:3006/user/me", { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, [])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickMail = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const mail = open ? 'simple-popover' : undefined;
    /////

    /// Dialogo para modificar datos de MiPerfil
    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    //

    /// Dialogo para modificar contraseña
    const [openPass, setOpenPass] = useState(false);

    const handleClickOpenPass = () => {
        setOpenPass(true);
    };

    const handleClosePass = () => {
        setOpenPass(false);
    };

    //


    return (
        <div>
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
                                    ////////
                                    >
                                    </CardMedia>
                                    <CardActions disableSpacing>
                                        <Typography color="textSecondary">
                                            {props.user.user.rol}
                                        </Typography>
                                        <Divider variant="middle" orientation="vertical" flexItem />
                                        <IconButton color='secondary' aria-label="email" onClick={handleClickMail}>
                                            <MailOutlineIcon />
                                        </IconButton>
                                        <Popover
                                            id={mail}
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
                                <TextField value={props.user.user.edad} label="Edad" name="edad" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                <TextField value={props.user.user.localidad} label="Localidad" name="localidad" autoFocus margin="dense" color='secondary' type="text" fullWidth />
                                <TextField value={props.user.user.email} label="Email" name="email" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                <TextField value={props.user.user.rol} label="Rol" name="rol" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                <IconButton onClick={handleClickOpenEdit} color='secondary' aria-label="editar" >
                                    <EditIcon />
                                </IconButton>
                                <Dialog open={openEdit} onClose={handleCloseEdit} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                                    <DialogTitle id="form-dialog-title">Modificar mi perfil</DialogTitle>
                                    <DialogContent>
                                        <TextField defaultValue={perfil.nombre} label="Nombre" name="nombre" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                        <TextField defaultValue={perfil.apellido} label="Apellido" name="apellido" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                        <TextField defaultValue={perfil.edad} label="Edad" name="edad" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                        <TextField defaultValue={perfil.localidad} label="Localidad" name="localidad" autoFocus margin="dense" color='secondary' type="text" fullWidth />
                                        <TextField defaultValue={perfil.email} label="Email" name="email" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCloseEdit} color="secondary">
                                            Cancelar
                                    </Button>
                                        <Button onClick={handleCloseEdit} color="secondary">
                                            Modificar
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                                <IconButton onClick={handleClickOpenPass} color='secondary' aria-label="cambiar password" >
                                    <VpnKeyIcon />
                                </IconButton>
                                <Dialog open={openPass} onClose={handleClosePass} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                                    <DialogTitle id="form-dialog-title">Modificar mi contraseña</DialogTitle>
                                    <DialogContent>
                                        <TextField /* onChange={handleInputChange} */ label="Contraseña" name="password" autoFocus margin="dense" type="password" color='secondary' fullWidth />
                                        <TextField /* onChange={handleInputChange} */ label="Nueva contraseña" name="password" autoFocus margin="dense" type="password" color='secondary' fullWidth />
                                        <TextField /* onChange={handleInputChange} */ label="Confirme su nueva contraseña" name="confirmar password" autoFocus margin="password" type="password" color='secondary' fullWidth />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClosePass} color="secondary">
                                            Cancelar
                                    </Button>
                                        <Button onClick={handleClosePass} color="secondary">
                                            Modificar
                                    </Button>
                                    </DialogActions>
                                </Dialog>

                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Container >
            <Trayectoria />
        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    user
})

export default connect(mapStateToProps, null)(MiPerfil)
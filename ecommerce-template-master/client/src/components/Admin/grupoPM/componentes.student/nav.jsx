import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./nav.module.css"
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Popover, Grid, Container, Card, CardMedia, CardActions, CardHeader, Divider, Typography, IconButton } from '@material-ui/core';
import { Slide, Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ButtonAppBar() {
  const [openEdit, setOpenEdit] = useState(false);
  const [putUsuario, setPutUsuario] = useState('')

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  //handleSubmit
  const handleSubmit = (e) => {
    setPutUsuario({
      ...putUsuario,
      [e.target.name]: e.target.value,
    })
  }


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={s.nav}>
          <Typography variant="h6" className={classes.title}>
            <span className={s.titulo}>Cohorte</span>
          </Typography>
          <IconButton color='primary' onClick={handleClickOpenEdit}>
            <EditIcon />
          </IconButton>
          <Dialog open={openEdit} onClose={handleCloseEdit} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="form-dialog-title">Agregar Estudiante</DialogTitle>
            <DialogContent>
              <TextField onChange={handleSubmit} value={putUsuario.nombre} label="Nombre" name="nombre" autoFocus margin="dense" type="text" color='secondary' fullWidth />
              <TextField onChange={handleSubmit} value={putUsuario.apellido} label="Apellido" name="apellido" autoFocus margin="dense" type="text" color='secondary' fullWidth />
              <TextField onChange={handleSubmit} value={putUsuario.edad} label="Edad" name="edad" autoFocus margin="dense" type="text" color='secondary' fullWidth />
              <TextField onChange={handleSubmit} value={putUsuario.email} label="Email" name="email" autoFocus margin="dense" type="text" color='secondary' fullWidth />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseEdit} color="secondary">
                Cancelar
            </Button>
              <Button onClick={() => {
                handleCloseEdit();
              }} color="secondary">
                Agregar
            </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>
    </div>
  );
}
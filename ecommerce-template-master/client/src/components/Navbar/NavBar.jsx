import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './navbar.module.css'
import imagen from "../../images/Henry logo.png"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';  
import PersonIcon from '@material-ui/icons/Person';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth, setAuth] = React.useState(true);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={s.color}>
          <IconButton edge="start" className={classes.menuButton + " " + s.amarillo} aria-label="menu">
            <MenuIcon className={s.amarillo}/>
          </IconButton>
          <Typography variant="h6" className={classes.title + " " + s.letras}>
           <Link to="/Home"> <img src={imagen} alt="" className={s.imagen}/> </Link> 
           <Link to="/miEquipo"> 
            <h6 className={s.titulosnav}> Tu equipo </h6>
           </Link>
                      
          
           </Typography>

         {auth && (
            <div  className={s.user}>
              <IconButton
                aria-label="account  of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
               
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="miPerfil"><MenuItem className={s.nolink} onClick={handleClose}>Mi Perfil</MenuItem></Link>
                <MenuItem onClick={handleClose}> LogOut</MenuItem>
                
              </Menu>
            </div>
          )}
          
          
          
        </Toolbar>
      </AppBar>
    </div>
  );
}


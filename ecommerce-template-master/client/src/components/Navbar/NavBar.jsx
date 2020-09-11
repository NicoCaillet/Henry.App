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
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';

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

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={s.color}>
          <IconButton edge="start" className={classes.menuButton + " " + s.amarillo} aria-label="menu">
            <MenuIcon className={s.amarillo}/>
          </IconButton>
          <Typography variant="h6" className={classes.title + " " + s.letras}>
           <img src={imagen} alt=""/> 
          </Typography>
          <PersonIcon fontSize="Large"  className={s.amarillo + " " + s.icon}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

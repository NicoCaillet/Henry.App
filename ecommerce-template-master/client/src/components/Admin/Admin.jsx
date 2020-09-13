import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    info: {
        width: "500px",
        height: 'auto',
        display: 'flex'
    },
    conteiner: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '100px'
    },
    titulo: {
        display: 'flex',
        flexDirection: 'column'
    },
    boton: {

    },
    separacion: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

export default function Admin(props) {

    const classes = useStyles();
    return (
        <div >
            <div className={classes.conteiner}>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Administrar Cohortes
                    </Typography>
                    </CardContent>
                    <CardActions>

                        <div className={classes.separacion}>
                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                            Add Alumno
                                    </Button>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>lista de alumnos</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>

                            <PopupState variant="popover" popupId="demo-popup-menu">
                                {(popupState) => (
                                    <React.Fragment>
                                        <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                            Add PM
                                    </Button>
                                        <Menu {...bindMenu(popupState)}>
                                            <MenuItem onClick={popupState.close}>PM</MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                )}
                            </PopupState>
                        </div>
                    </CardActions>
                </Card>
                <Card className={classes.info}>
                    <CardContent className={classes.titulo}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Administrar Alumno
                </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            aca iran todos los alumnos
          </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Asignar PM
                </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            pm asignados a cada cohorte
          </Typography>
                    </CardContent>
                </Card>
            </div>
        </div >

    );
}
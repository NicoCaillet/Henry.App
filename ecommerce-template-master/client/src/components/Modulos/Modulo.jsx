import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, Container } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { getClases } from '../../store/actions/clases';
import { useParams } from 'react-router-dom';
import useStyles from './Modulo.styles'
import {Redirect} from 'react-router';

export default function Modulo(props) {
    const [video, setVideo] = useState('https://player.vimeo.com/video/423898676')
    const [nombreVideo, setNombreVideo] = useState('Introduccion')
    const [redirect, setRedirect] = useState(false)
    const classes = useStyles();
    const modulo = useParams();
    const dispatch = useDispatch();
    const modulos = useSelector((state) => state.clases.clases);
    useEffect(() => {
        dispatch(getClases(modulo.modulo))
    }, [])
    
    const changeVideo = (e, video) => {
        e.preventDefault()
        setVideo(video.link)
        setNombreVideo(video.clase)
    };
                        if (redirect) {
                            return <Redirect to="/Home" />;
                        }

    return (
        <div className={classes.contenedor}>
            <Typography variant="h2">
                {modulo.modulo} - {nombreVideo}
            </Typography>
            <iframe title="vimeo-player" src={video} width="1080" height="610" frameBorder="2" allowFullScreen></iframe>
            <div>
                <Container container='true' >
                    <Grid item key={video} xs={12} sm={12} md={12} lg={12}>
                        {modulos.map((video) => (
                            <Button className={classes.boton} color='primary' variant="contained" href="#contained-buttons" onClick={(e) => changeVideo(e, video)}>
                                <Typography variant="h5"> {video.clase} </Typography>
                            </Button>
                        )
                        )}
                    </Grid>
                </Container>
                            
                    <Button variant = "contained" color= "terceary" onClick= {setRedirect} >
                        Regresar
                    </Button>
            </div>
        </div>

    );
}  

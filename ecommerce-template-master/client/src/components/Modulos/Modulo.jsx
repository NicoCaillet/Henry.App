import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getClases } from '../../store/actions/clases';
import { useParams } from 'react-router-dom';



const prueba = [{ id: 1, nombre: 'DOM - Selectores', link: 'https://player.vimeo.com/video/412450156' },
{ id: 2, nombre: 'CSS Avanzado', link: 'https://player.vimeo.com/video/412450067' },
{ id: 3, nombre: 'ES6', link: "https://player.vimeo.com/video/414741680" },
{ id: 4, nombre: 'AJAX', link: "https://player.vimeo.com/video/412449982" }]

const useStyles = makeStyles((theme) => ({
    videos: {
        display: 'flex',
        flexDirection: 'column'
    },
    boton: {
        width: '400px',
        margin: 'auto',
        marginTop: '40px',
        backgroundColor: 'rgb(255, 255, 1)'

    }
}));

export default function Modulo(props) {
    const [video, setVideo] = useState('https://player.vimeo.com/video/423898676')
    const classes = useStyles();
    const modulo = useParams();
    const dispatch = useDispatch();
    const modulos = useSelector((state) => state.clases.clases);

    useEffect(() => {
        dispatch(getClases(modulo.modulo))
    }, [])

    const changeVideo = (e, link) => {
        e.preventDefault()
        setVideo(link)
    };

    return (
        <div>
            <Typography variant="h2">
                Modulo {modulo.modulo}
            </Typography>
            <iframe title="vimeo-player" src={video} width="640" height="360" frameborder="0" allowfullscreen></iframe>
            <div>
                {modulos.map((video) =>

                    (<div key={video.key} className={classes.videos}>
                        <Button className={classes.boton} variant="contained" href="#contained-buttons" onClick={(e) => changeVideo(e, video.link)}>
                            <Typography variant="h5">{video.clase}</Typography>
                        </Button>
                    </div>)
                )}
            </div>
        </div>

    );
}  

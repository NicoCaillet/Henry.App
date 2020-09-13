import React from 'react';
import { Link } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './Home.styles'

const images = [
    {
        url: 'https://www.cloudstudio.mx/blog/wp-content/uploads/2019/01/js.png',
        title: 'M1',
        width: '100%',
    },
    {
        url: 'https://thedevcouple.com/wp-content/uploads/2017/10/Interview-React-2.jpg',
        title: 'M2',
        width: '100%',
    },
    {
        url: 'https://i.ytimg.com/vi/45dAt9Gz8rE/maxresdefault.jpg',
        title: 'M3',
        width: '100%',
    },
    {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJECsXGkOPiCyLF5lhN0pRbhw_UnFcOkhyZQ&usqp=CAU',
        title: 'M4',
        width: '100%',
    }
];

export default function Home() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid className={classes.contenedor} container spacing={3}>
                {images.map((image) => (
                    <Grid item key={image} xs={1} sm={2} md={5}>
                        {/* OJO QUE EL LINK ESTA HARDCODEADO */}
                        <Link style={{ textDecoration: 'none' }} to={`/modulo/1`/* /${id} */} >
                            <ButtonBase

                                key={image.title}
                                className={classes.image}
                                focusVisibleClassName={classes.focusVisible}
                                style={{
                                    width: image.width,
                                }}
                            >
                                <span
                                    className={classes.imageSrc}
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <span className={classes.imageBackdrop} />
                                <span className={classes.imageButton}>
                                    <Typography
                                        component="span"
                                        variant="h2"
                                        color="inherit"
                                        className={classes.imageTitle}
                                    >
                                        {image.title}
                                        <span className={classes.imageMarked} />
                                    </Typography>
                                </span>
                            </ButtonBase>
                        </Link>
                    </Grid>

                ))}
            </Grid>
        </Container >
    );
}
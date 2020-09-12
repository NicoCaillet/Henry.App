import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './MiPerfil.styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';
////////////
export default function MiPerfil(props) {
    const classes = useStyles();

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container >
            <Grid className={classes.contenedor} container spacing={3}>

                {/* ACA EMPIEZA LA TARJETA */}

                <Grid item xs={10} sm={10} md={6}>
                    <div className={classes.div1}>
                        <Grid item xs={12} sm={6} md={8} lg={6}>
                            <Card className={classes.card}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Manuel Barna Ferrés"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image="https://www.soyhenry.com/static/MANU-800a7fffdc31e8be6dddc7a9b573f5f9.png"
                                >
                                </CardMedia>

                                <CardActions disableSpacing>
                                    <Typography className={classes.title} color="textSecondary"  > Estudiante</Typography>
                                    <Divider variant="middle" orientation="vertical" flexItem />
                                    <IconButton aria-label="email">
                                        <MailOutlineIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    </div>
                </Grid>


                {/* ACA EMPIEZA LA TABLA */}
                <Grid item xs={10} sm={10} md={6}>
                    <div className={classes.div2}>
                        <p>div2</p>
                    </div>
                </Grid>
            </Grid>
        </Container >

    );
}
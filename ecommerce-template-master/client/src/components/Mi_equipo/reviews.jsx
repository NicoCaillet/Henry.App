import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { IconButton, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Reviews() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
                <RateReviewIcon />
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title"> Califica a tu compañero</DialogTitle>
                <DialogContent>
                    <TextField label="Habilidades Tecnicas" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                    <TextField label="Social Skills" autoFocus margin="dense" type="text" color='secondary' fullWidth />
                    <TextField label="Deja tus Comentarios" autoFocus margin="dense" type="text" color='secondary' fullWidth />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cerrar
          </Button>
                    <Button onClick={handleClose} color="secondary">
                        Aceptar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
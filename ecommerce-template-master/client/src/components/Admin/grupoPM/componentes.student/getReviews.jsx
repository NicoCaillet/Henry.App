import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Rating from '@material-ui/lab/Rating';
import DialogContent from '@material-ui/core/DialogContent';
import { Button, TableContainer, Paper, TableBody, TableCell, TableRow, Table, Card, Box, Typography } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { useSelector, useDispatch } from 'react-redux'
import { getFeedback } from "../../../../store/actions/feedback"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GetFeedBack({ alumno }) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const CheckFeedBack = useSelector((state) => state.feedBack.getFeed);
    console.log(CheckFeedBack && CheckFeedBack)


    const handleClickOpen = () => {
        setOpen(true);
        dispatch(getFeedback(alumno))
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleClickOpen}>
                <RateReviewIcon >
                    Slide in alert dialog
                </RateReviewIcon>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">Feedback PP</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableBody >
                                {CheckFeedBack && CheckFeedBack.map((e) => (
                                    <div >
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                                Social Skills {<Box component="fieldset" borderColor="transparent">
                                                    <Rating name="read-only" value={e.social_skills} readOnly />
                                                </Box>}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Technical Skills {<Box component="fieldset" borderColor="transparent">
                                                    <Rating name="read-only" value={e.tecnical_skills} readOnly />
                                                </Box>}
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell component="th" scope="row">
                                                Comentarios: {
                                                    <Typography>{e.comentarios}</Typography>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    </div>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cerrar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
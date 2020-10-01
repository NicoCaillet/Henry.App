import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { postNota } from '../../../store/actions/notas'
import s from './notas.module.css'
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@material-ui/core';
import { getNotasPosta } from "../../../store/actions/alumnos"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Notas(props) {
  const notas = useSelector((state) => state.notas.notas);
  const dispatch = useDispatch();
  const [calificacion, setCalificacion] = useState({});
  const [addNota, setAddNota] = useState(false);
  const history = useHistory();
  const match = useRouteMatch();

  useEffect(() => {
    // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
    dispatch(getNotasPosta())
  }, [])
  const handleNota = (notas) => {
    let modulo = (() => {
      for (let n in notas) {
        if (n[0] === "M" && notas[n] === null) return n
      }
    })();
    setCalificacion({
      ...calificacion,
      evaluadoId: notas.id,
      modulo: modulo
    });
    setAddNota(true)
  }
  const submitNota = () => {
    setAddNota(false);
    dispatch(postNota(calificacion)).then(() => {
      dispatch(getNotasPosta())
    }).catch(err => console.log(err));
  }
  const renderCohort = function (id) {
    history.push(match.url + "/" + id)
  }

  if (notas.length)
    return (
      <div className={s.container}>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell variant="head">Nombre</TableCell>
                <TableCell variant="head">Apellido</TableCell>
                <TableCell variant="head">M1</TableCell>
                <TableCell variant="head">M2</TableCell>
                <TableCell variant="head">M3</TableCell>
                <TableCell variant="head">M4</TableCell>
                <TableCell variant="head">AGREGAR</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notas && notas.map(alumno => (
                <TableRow>
                  <TableCell>{alumno.nombre}</TableCell>
                  <TableCell>{alumno.apellido}</TableCell>
                  <TableCell>{alumno.M1}</TableCell>
                  <TableCell>{alumno.M2}</TableCell>
                  <TableCell>{alumno.M3}</TableCell>
                  <TableCell>{alumno.M4}</TableCell>
                  <Button onClick={() => handleNota(alumno)}>Nueva Nota</Button>
                  <Dialog TransitionComponent={Transition} open={addNota} onClose={() => setAddNota(false)}>
                    <DialogTitle>Agregar Nota</DialogTitle>
                    <DialogContent>
                      <DialogContentText>Agrega la nota de un alumno.</DialogContentText>
                      <TextField
                        color="secondary"
                        value={calificacion.nota}
                        type="text"
                        variant="outlined"
                        onChange={(e) => setCalificacion({ ...calificacion, nota: e.target.value })}
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setAddNota(false)} variant="contained" color="primary">
                        Cancelar
                                  </Button>
                      <Button onClick={() => { submitNota() }} variant="contained" color="primary">
                        Aceptar
                                  </Button>
                    </DialogActions>
                  </Dialog>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
}


//a casa petes

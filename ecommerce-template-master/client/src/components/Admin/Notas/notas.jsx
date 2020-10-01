import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Nav from "./componentes/nav"
import Alumnos from "./componentes/cohorte"
import Title from "./componentes/title"
import { getNota, postNota } from '../../../store/actions/notas'
import s from './notas.module.css' 
import { Link, Route, useHistory, useRouteMatch } from 'react-router-dom'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@material-ui/core';

export default function Notas(props) {
    const notas = useSelector((state) => state.notas.notas);
    const dispatch = useDispatch();
    const history = useHistory();
    const match = useRouteMatch();

  useEffect(() => {
    // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
    dispatch(getNota())
}, [])  
const handleConfirm = function () {
  dispatch(postNota().then(() => {
    dispatch(getNota())
  }))
}

const renderCohort = function (id) {
  history.push(match.url + "/" + id)
}

    if(notas.length) 
    return (
        <div className={s.container}>
          <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell variant="head">Modulo</TableCell>
                            <TableCell variant="head">Nota</TableCell>
                            <TableCell variant="head">Corrector</TableCell>
                            <TableCell variant="head">Alumno</TableCell>
                            <Button><TableCell variant="head">AGREGAR</TableCell></Button>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notas.map(nota => (
                            <TableRow>
                              <TableCell>{nota.modulo}</TableCell>
                              <TableCell>{nota.nota}</TableCell>
                              <TableCell>{`${nota.corrector.nombre} ${nota.corrector.apellido}`}</TableCell>
                              <TableCell>{`${nota.evaluado.nombre} ${nota.evaluado.apellido}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        {/* <Nav /> 
        <Title /> 
        {alumnos && alumnos.map((alumno) => (
        <Alumnos  alumnos={alumno} render={() => renderCohort(alumno.id)} />
        
        ))} */}
        </div>
    );
    return (
      <div>Espere...</div>
    );
}
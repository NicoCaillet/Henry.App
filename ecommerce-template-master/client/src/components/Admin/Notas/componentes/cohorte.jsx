import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
// import s from "./title.module.css"
import s from './cohorte.module.css';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


export default function Alumnos({ alumnos }) {
  return (
    <div className={s.grid}>
      <div className={s.letra}> {alumnos.nombre} </div>
      <div className={s.letra}> {alumnos.apellido} </div>
      <div className={s.letra}> {alumnos.m1} </div> {/* aca vendrian las notas y el boton para editar */}
      <div className={s.letra}> {alumnos.m2} </div> 
      <div className={s.letra}> {alumnos.m3} </div>
      <div className={s.letra}> {alumnos.m4} </div>
    </div>
  );
}

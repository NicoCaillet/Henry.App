import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./miequipo.module.css"
import Nav from "./componentes/nav"
import Student from "./componentes/student"
import Title from "./componentes/title"
import { connect } from 'react-redux'
import { getpp } from '../../store/actions/pairprogramming.js'
import { useSelector, useDispatch } from "react-redux";

// Funcionalidad de redux ya puesta para andar (No estan las rutas hechas todavia.)

export default function MiEquipo(props) {

  const pp = useSelector((state) => state.pairPrograming.equipo);
  const dispatch = useDispatch();

  useEffect(() => {
    // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
    dispatch(getpp())
    console.log("Tu vieja")
    console.log(props)
}, [])

console.log("props afuera: " + JSON.stringify(props))
console.log("PP: " + pp)


    return (
        <div className={s.container}>
        <Nav /> 
        <Title />
        {pp && pp.map((student) => (
          <Student student={student} />
        ))}
        </div>

    );
}


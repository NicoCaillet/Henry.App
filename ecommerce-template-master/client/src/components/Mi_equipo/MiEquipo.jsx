import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./miequipo.module.css"
import Nav from "./componentes/nav"
import Student from "./componentes/student"
import Title from "./componentes/title"

// Funcionalidad de redux ya puesta para andar (No estan las rutas hechas todavia.)

useEffect(() => {
    // Cuando se abra el componente, dispachar la accion que va a hacer el get para que traiga el pp del usuario logeado
    
    props.pruebaRedux()
}, [])

const student = [
    {
      name: "Nicolas",
      lastname: "Caillet Bois",
      age: 18,
      email: "nicolas@gmail.com"
    },
    {
      name: "Franco",
      lastname: "Bonnahon",
      age: 18,
      email: "franco@gmail.com"
    },
    {
      name: "Gianni",
      lastname: "Pisani",
      age: 18,
      email: "destroyer@gmail.com"
    },
    {
        name: "Gianni",
        lastname: "Pisani",
        age: 18,
        email: "destroyer@gmail.com"
      },
      {
        name: "Gianni",
        lastname: "Pisani",
        age: 18,
        email: "destroyer@gmail.com"
      },
      {
        name: "Gianni",
        lastname: "Pisani",
        age: 18,
        email: "destroyer@gmail.com"
      },
  ]

export default function MiEquipo(props) {


    return (
        <div className={s.container}>
        <Nav /> 
        <Title />
        <Student student={student} />
        {student.map((student) => (
          <Student
           student={student} />
        ))}
        </div>

    );
}
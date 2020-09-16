import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./grupoPm.module.css"
import Nav from "./componentes/nav"
import Cohorte from "./componentes/cohorte"
import AddAlumno from './AddAlumno'
import Title from "./componentes/title"
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";

export default function grupoPm(props) {

    const student = [
        {
            name: "Nicolas",
        },
        {
            name: "Franco",
        }
    ]

    return (
        <div style={{ display: 'flex' }}>
            <div className={s.container}>
                <Nav />
                <Title />
                <Cohorte student={student} />
                {student.map((student) => (
                    <Cohorte
                        student={student} />
                ))}

            </div>
            <AddAlumno />
        </div>
    );
}
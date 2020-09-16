import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./grupoPm.module.css"
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import IconButton from '@material-ui/core/IconButton';
import Nav from "./componentes/nav"
import Cohorte from "./componentes/cohorte.jsx"
import AddAlumno from './AddAlumno'
import Title from "./componentes/title"
import { connect, useSelector, useDispatch } from 'react-redux';

export default function grupoPm(props) {
    // const cohorte = useSelector((state) => state.cohorte);

    const student = [
        {
            name: "WebFt03",
        },
        {
            name: "WebFt04",
        }
    ]


    return (
        <div style={{ display: 'flex' }}>
            <div className={s.container}>
                <Nav />
                <Title />
                {student.map((student) => (
                    <Cohorte student={student} />
                ))}
            </div>
            <AddAlumno />
        </div>
    );
}
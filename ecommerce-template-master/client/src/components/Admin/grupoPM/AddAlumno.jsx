import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './AdAlumno.module.css'
import Nav from "./componentes.student/nav"
import Student from "./componentes.student/student"
import Title from "./componentes.student/title"
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";

export default function AddAlumno(props) {

    const student = [
        {
            name: "Nicolas",
        },
        {
            name: "Franco",
        }
    ]

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
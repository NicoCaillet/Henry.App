import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './AdAlumno.module.css'
import Nav from "./componentes.student/nav"
import Student from "./componentes.student/student"
import Title from "./componentes.student/title"
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";

export default function AddAlumno(props) {
    // const [component, setComponent] = useState(),
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

    // const renderComponent = function (e) {
    //     var element;
    //     switch (e.target.id) {
    //       case "grupo_pm":
    //         element = <GrupoPM />;
    //         break;
    //       default:
    //         element = <h2>Entro al default</h2>;
    //         break;
    //     }
    //     setComponent(element);
    //   }

    return (
        <div className={s.container}>
            <Nav />
            <Title />
            {student.map((student) => (
                <Student
                    student={student} />
            ))}
        </div>
    );
}
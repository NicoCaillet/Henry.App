import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./grupoPm.module.css"
import Nav from "./componentes/nav"
import Student from "./componentes/student"
import Title from "./componentes/title"
import { connect } from 'react-redux'
import { useSelector, useDispatch } from "react-redux";

export default function grupoPm(props) {

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
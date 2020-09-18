import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from "./miequipo.module.css"
import Nav from "./componentes/nav"
import Student from "./componentes/student"
import Title from "./componentes/title"

export default function Admin(props) {

    return (
        <div className={s.container}>
            <Nav />
            <Title />
            <Student />
        </div>

    );
}
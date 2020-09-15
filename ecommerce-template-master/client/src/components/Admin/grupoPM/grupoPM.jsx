import React, { useState, useEffect } from 'react';
import s from './grupo.module.css';
import TextField from '@material-ui/core/TextField';
import Estudiantes from './estudiante'
import { Link } from 'react-router-dom'

export default function Admin(props) {

    return (
        <div>
            <div className={s.admin} >
                <div className={s.aside}>
                    <h3> Buscar estudiante</h3>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        label="Nombre y Apellido"
                        fullWidth
                        type="text"
                        id="numero"
                        name="numero"
                        autoFocus />
                </div>
            </div>
            <div>
                <Estudiantes />
            </div>
        </div>

    );
}
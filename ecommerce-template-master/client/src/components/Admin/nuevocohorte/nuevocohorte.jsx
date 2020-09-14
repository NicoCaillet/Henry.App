import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './nuevocohorte.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function NuevoCohorte(props) {

    return (
        <div className={s.admin} >
            <div className={s.aside}>
                <h3> Crear nuevo cohorte</h3>
                <div> 
                 <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  label="Numero de cohorte"
                  fullWidth
                  id="numero"
                  name="numero"
                  autoFocus />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"> 
                Agregar cohorte
                </Button>

                    
                </div> 
            </div>
        </div>

    );
}
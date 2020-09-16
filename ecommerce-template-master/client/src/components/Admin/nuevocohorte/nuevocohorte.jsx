import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './nuevocohorte.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { setCohorte } from '../../../store/actions/cohorte.js'
import { useSelector, useDispatch } from "react-redux";
  
export default function NuevoCohorte(props) {
  
const cohorte = useSelector((state) => state.cohorte.cohorte)
  
  const [cohorteA, setCohorteA] = useState({cohorte})
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    e.preventDefault();
    setCohorteA({
      ...cohorteA,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className={s.admin} >
      <div className={s.aside}>
        <h3> Crear nuevo cohorte</h3>
        <div>
        <TextField
            variant="outlined"
            margin="normal"
            required
            label="Fecha de inicio"
            fullWidth
            type="text"
            name="fecha"
            value={cohorteA.fecha}
            onChange={handleInputChange}
            autoFocus />

          <TextField
            variant="outlined"
            margin="normal"
            required
            label="Nombre de cohorte"
            fullWidth
            type="text"
            name="nombre"
            value={cohorteA.nombre}
            onChange={handleInputChange}
            autoFocus />

            

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => dispatch(setCohorte(cohorteA))}>
            Agregar cohorte
          </Button>


        </div>
      </div>
    </div>

  );
}


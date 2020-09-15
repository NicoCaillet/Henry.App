import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './nuevocohorte.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { setCohorte } from '../../../store/actions/cohorte.js'
import { useSelector, useDispatch } from "react-redux";

function NuevoCohorte(props) {
  const [cohorteA, setCohorteA] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault();
    setCohorteA(
      e.target.value
    );
  };


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
            type="text"
            name="alumnos"
            value={cohorteA}
            onChange={handleInputChange}
            autoFocus />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => props.setCohorte(cohorteA)}>
            Agregar cohorte
                </Button>


        </div>
      </div>
    </div>

  );
}

const mapStateToProps = ({ cohorte }) => ({
  cohorte,
})

const mapDispatchToProps = dispatch => ({
  setCohorte: cohorte => dispatch(setCohorte(cohorte))
})

export default connect(mapStateToProps, mapDispatchToProps)(NuevoCohorte)
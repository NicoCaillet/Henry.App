import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import s from "./title.module.css"
import s from './cohorte.module.css';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import IconButton from '@material-ui/core/IconButton';

export default function Cohorte({ student }) {
  console.log(student)
  return (
    <div className={s.grid}>
      <div className={s.letra}>{student.name}</div>
      <div > {<IconButton><DoneOutlineIcon /></IconButton>} </div>
    </div>
  );
}

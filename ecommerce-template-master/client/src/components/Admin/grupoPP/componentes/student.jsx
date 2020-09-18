import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import s from "./title.module.css"
import s from './student.module.css'



export default function Student({ student }) {
  return (
    <div className={s.grid}>
      <div className={s.letra}> Nahue</div>
      <div className={s.letra}> Webft03</div>
      <div className={s.letra}> 4</div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import s from "./title.module.css"
import s from './student.module.css'



export default function Student({student}) {
    return (
      <div className={s.grid}>
        <div className={s.letra}> {student.nombre} </div>
        <div className={s.letra}> {student.apellido} </div>
        <div className={s.letra}> {student.edad} </div>
        <div className={s.letra}> {student.localidad} </div>
        <div className={s.letra}> {student.email} </div>
      </div>
    );
  }
  
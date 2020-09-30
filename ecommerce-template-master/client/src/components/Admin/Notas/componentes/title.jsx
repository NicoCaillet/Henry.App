import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import s from './title.module.css'

export default function Title() {
  return (
    <div className={s.grid}>
      <div className={s.letra}> Nombre </div>
      <div className={s.letra}> Apellido </div>
      <div className={s.letra}> M1 </div>
      <div className={s.letra}> M2 </div>
      <div className={s.letra}> M3 </div>
      <div className={s.letra}> M4 </div>
      <div className={s.letra}> Editar </div>

    </div>
  );
}


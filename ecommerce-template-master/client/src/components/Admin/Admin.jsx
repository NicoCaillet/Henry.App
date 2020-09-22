import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import s from "./AdminPage.module.css";
import NuevoCohorte from "./nuevocohorte/nuevocohorte"
import GrupoPP from "./grupoPP/grupoPP"
import GrupoPM from "./grupoPM/grupoPM"
import Contenedor from './usuarios/contenedortabla.jsx'

//material ui
import ReceiptIcon from "@material-ui/icons/Receipt";
import GroupIcon from '@material-ui/icons/Group';
import ListAltIcon from "@material-ui/icons/ListAlt";

export default function AdminPage() {
  const [component, setComponent] = useState();

  useEffect(() => {
    let temp = <h3>Bienvenido al panel de administracion</h3>;
    setComponent(temp);
  }, []);

  const renderComponent = function (e) {
    var element;
    switch (e.target.id) {
      case "grupo_pm":
        element = <GrupoPM />;
        break;
      case "nuevo_cohorte":
        element = <NuevoCohorte />;
        break;
      case "grupo_pp":
        element = <GrupoPP />;
        break;
      case "alumnos": 
        element = <Contenedor /> 
        break;
      default:
        element = <h2>Entro al default</h2>;
        break;
    }
    setComponent(element);
  };

  return (
    <div className={s.admin}>
      <div className={s.aside}>
        <h3> Menu </h3>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="grupo_pm"
          name="menu"
          value="orders"
        />
        <label htmlFor="grupo_pm">
          <ReceiptIcon className={s.icon} />
          Administracion de cohortes
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="nuevo_cohorte"
          name="menu"
          value="categories"
          className={s.obeja}
        />
        <label htmlFor="nuevo_cohorte">
          <ListAltIcon className={s.icon} />
          Nuevo cohorte
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="grupo_pp"
          name="menu"
          value="products"
        />
        <label htmlFor="grupo_pp">
          <GroupIcon className={s.icon} />
          Crear grupo PP
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="alumnos"
          name="menu"
          value="orders"
        />
        <label htmlFor="alumnos">
          <ReceiptIcon className={s.icon} />
          Administracion de alumnos
        </label>
      </div>
      <div className={s.main}>{component && component}</div>
    </div>
  );
}

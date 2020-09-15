import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import s from "./AdminPage.module.css";
import NuevoCohorte from "./nuevocohorte/nuevocohorte"
import GrupoPP from "./grupoPP/grupoPP"
import GrupoPM from "./grupoPM/grupoPM"

//material ui
import ReceiptIcon from "@material-ui/icons/Receipt";
import StoreIcon from "@material-ui/icons/Store";
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
      case "grupo_pp":
        element = <GrupoPP />;
        break;
      case "nuevo_cohorte":
        element = <NuevoCohorte />;
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
          Crear grupo PM
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="grupo_pp"
          name="menu"
          value="products"
        />
        <label htmlFor="grupo_pp">
          <StoreIcon className={s.icon} />
          Crear grupo PP
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
        
      </div>
      <div className={s.main}>{component && component}</div>
    </div>
  );
}

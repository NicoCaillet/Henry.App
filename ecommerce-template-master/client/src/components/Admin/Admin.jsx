import React, { useEffect, useState } from "react";
import { Link, Route, useHistory, Switch, useRouteMatch} from 'react-router-dom'
import s from "./AdminPage.module.css";
import NuevoCohorte from "./nuevocohorte/nuevocohorte"
import GrupoPP from "./grupoPP/grupoPP"
import GrupoPM from "./grupoPM/grupoPM"
import Contenedor from './usuarios/contenedortabla.jsx'


//material ui
import ReceiptIcon from "@material-ui/icons/Receipt";
import GroupIcon from '@material-ui/icons/Group';
import ListAltIcon from "@material-ui/icons/ListAlt";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
const HomeAdmin = () => {
  const match = useRouteMatch();
  const [component, setComponent] = useState();
  const [route, setRoute] = useState(["Admin"]);
  const history = useHistory();
  useEffect(() => {
    let temp = <h3>Bienvenido al panel de administracion</h3>;
    setComponent(temp);
  }, []);
  const renderComponent = function (e) {
    var element;
    if (!route.includes(e.target.id)) setRoute(["Admin", e.target.id]);
    switch (e.target.id) {
      case "Cohortes":
        element = <GrupoPM />;
        break;
      case "Nuevo_Cohorte":
        element = <NuevoCohorte />;
        break;
      case "Administración_De_Grupos":
        element = <GrupoPP />;
        break;
      case "Administración_De_Usuarios": 
        element = <Contenedor /> 
        break;
      default:
        element = <h2>Entro al default</h2>;
        break;
    }
    setComponent(element);
  };
  return(
<div className={s.admin}>
      <Breadcrumbs separator="›" color = "secondary">
        {route.map(link => <Link>{link}</Link>)}
      </Breadcrumbs>
      <div className={s.aside}>
        <h3> Menu </h3>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="Cohortes"
          name="menu"
          value="orders"
        />
        <label htmlFor="Cohortes">
          <ReceiptIcon className={s.icon} />
          Administracion de cohortes
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="Nuevo_Cohorte"
          name="menu"
          value="categories"
          className={s.obeja}
        />
        <label htmlFor="Nuevo_Cohorte">
          <ListAltIcon className={s.icon} />
          Nuevo cohorte
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="Administración_De_Grupos"
          name="menu"
          value="products"
        />
        <label htmlFor="Administración_De_Grupos">
          <GroupIcon className={s.icon} />
          Administracion de PM's y PP's
        </label>
        <input
          type="radio"
          onChange={(e) => renderComponent(e)}
          id="Administración_De_Usuarios"
          name="menu"
          value="orders"
        />
        <label htmlFor="Administración_De_Usuarios">
          <ReceiptIcon className={s.icon} />
          Administracion de alumnos
        </label>
      </div>
      <div className={s.main}>{component && component}</div>
    </div>
  );
}
export default function AdminPage() {
  const [component, setComponent] = useState();
  const [route, setRoute] = useState(["Admin"]);
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    let temp = <h3>Bienvenido al panel de administracion</h3>;
    setComponent(temp);
  }, []);

 const renderComponent = function (e) {
    var element;
    if (!route.includes(e.target.id)) setRoute(["Admin", e.target.id]);
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
    <div>
    <Route path="/">
      <HomeAdmin/>
    </Route>
    <Route exact path={`${match.path}/A`}>
      <h1>La puta madreeeeeeeeeeeeeee</h1>
      <GrupoPM/>
    </Route>
    </div>
  );
}

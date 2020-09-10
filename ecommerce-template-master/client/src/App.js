import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Input from './components/Input_Prueba/Input'
import HomeUser from './components/Input_Prueba/HomeUser';
import NavBar from './components/Input_Prueba/NavBar';
import MiPerfil from './components/Input_Prueba/MiPerfil';
import Modulo from './components/Input_Prueba/Modulo';
import Admin from './components/Input_Prueba/Admin';
import Info from './components/Input_Prueba/Info';
import MiEquipo from './components/Input_Prueba/MiEquipo';

function App() {
  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>
      {/* -- Sin el Login el Usuario no va a poder hacer NADA-- */}
      <Route exact path="/">
        <Input />
      </Route>
      {/* Mas adelante vamos a poner el HomeUser en path="/" */}
      <Route exact path="/HomeUser">
        <HomeUser />
      </Route>
      <Route exact path="/MiPerfil">
        <MiPerfil />
      </Route>
      <Route exact path="/Modulo/:id">
        <Modulo />
      </Route>
      <Route exact path="/Admin">
        <Admin />
      </Route>
      <Route exact path="/data">
        {/* Va a mostrar la informacion de todos los alumnos. Va a tener filtros por cohortes y pm */}
        <Info /> {/* Buscar nombre adecuado */}
      </Route>
      <Route exact path="/MiEquipo">
        <MiEquipo />
      </Route>

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Input from './components/Input_Prueba/Input'
import HomeUser from './components/Input_Prueba/HomeUser';

function App() {
  return (
    <div className="App">

      <Route exact path="/">
        <Input />
      </Route>

      {/* -- Sin el Login el Usuario no va a poder hacer NADA-- */}
      <Route path="/">
        <NavBar />
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

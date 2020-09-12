import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Input from './components/Input_Prueba/Input'
import HomeUser from './components/Home/HomeUser';
import NavBar from './components/Navbar/NavBar';
import MiPerfil from './components/Mi_perfil/MiPerfil';
import Modulo from './components/Modulos/Modulo';
import Admin from './components/Admin/Admin';
import Info from './components/Tabla_info_Admin/Info';
import MiEquipo from './components/Mi_equipo/MiEquipo';
import Registrarse from './components/Registrarse/Registrarse';
import { connect } from 'react-redux';
import { pruebaRedux } from './store/actions/actionTest';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(255 255 1)',
    },
    secondary: {
      main: 'rgb(0 0 0)',
    }
  }
});

function App(props) {
  return (

    <div className="App">
      <ThemeProvider theme={theme}>

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
        <Route path="/Registrarse">
          <Registrarse />
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
        </Route >
        <Route exact path='/modulo:id'>
          <Modulo />
        </Route>

      </ThemeProvider>
    </div>
  );
}

//REDUX INSTALADO STORE DE PRUEBA Y ACTION DE PRUEBA
const mapStateToProps = ({ test }) => ({
  test
})

const mapDispatchToProps = dispatch => ({
  pruebaRedux: prueba => dispatch(pruebaRedux(prueba))

})

export default connect(mapStateToProps, mapDispatchToProps)(App)


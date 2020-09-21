import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import { Route } from "react-router-dom";
import Input from './components/Input_Prueba/Input'
import Home from './components/Home/Home';
import NavBar from './components/Navbar/NavBar';
import MiPerfil from './components/Mi_perfil/MiPerfil';
import Modulo from './components/Modulos/Modulo';
import Admin from './components/Admin/Admin';
import Info from './components/Tabla_info_Admin/Info';
import MiEquipo from './components/Mi_equipo/MiEquipo';
import Equipo2 from './components/Mi_equipo/Equipo2';
import Registrarse from './components/Registrarse/Registrarse';
import { connect } from 'react-redux';
import { pruebaRedux } from './store/actions/actionTest';
import store from './store/';
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("state", JSON.stringify(state));
})
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(255 255 1)',
    },
    secondary: {
      main: 'rgb(0 0 0)',
    },
    terceary: {
      light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00'
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
        {props.user.user && (<Route exact path="/Home">
          <Home />
        </Route>)}
        <Route exact path="/MiPerfil">
          <MiPerfil />
        </Route>
        <Route path="/Registrarse">
          <Registrarse />
        </Route>
        <Route exact path="/Modulo/:modulo">
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
const mapStateToProps = ({ test, user }) => ({
  test,
  user
})

const mapDispatchToProps = dispatch => ({
  pruebaRedux: prueba => dispatch(pruebaRedux(prueba))

})

export default connect(mapStateToProps, mapDispatchToProps)(App)


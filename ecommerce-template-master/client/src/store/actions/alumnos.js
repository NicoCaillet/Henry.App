import axios from "axios";

export const alumnosActionTypes = {
  GET_ALUMNOS: 'GET_ALUMNOS',
  GET_USER: "GET_USER",
  PUT_USER_GRUPO: "PUT_USER_GRUPO",
  PUT_USER_COHORTE: "PUT_USER_COHORTE"
}

  export const getAlumnosid = (id) => {
    return (dispatch) => {
      axios.get(`http://localhost:3006/alumnos/cohorte/${id}`, {withCredentials: true}).then((res) => {
      dispatch({
          type: alumnosActionTypes.GET_ALUMNOS,
          payload: res.data
        });
      }).catch(err => console.log(err));
    };
  };

  //get todos los usuarios
export const getUser = () => {
  return dispatch => {
      axios.get("http://localhost:3006/alumnos/", {withCredentials: true})
      .then ((res) => dispatch ({type: alumnosActionTypes.GET_USER, payload: res.data}))
      .catch (err => console.log(err))
  }
}
//put a un usuario
export const putUsuarioGrupo = ({usuarioId, grupoId}) => {
  return dispatch => {
      return axios.put("http://localhost:3006/alumnos/grupo/agregar",{
      usuarioId: usuarioId,
      grupoId: grupoId
      }, {withCredentials: true})
      .then((res) => dispatch ({type: alumnosActionTypes.PUT_USER_GRUPO, payload: res.data}))
      .catch(err => console.log(err))
      }
  }
//put a un cohorte
  export const putUsuarioCohorte = (values) => {
    console.log(values)
      return dispatch => {
          return axios.put("http://localhost:3006/alumnos/cohorte/agregar", {
            usuarioId : values.alumnoId,
            cohorteId: values.cohorteId
          } , {withCredentials: true})
          .then (res => dispatch ({type:alumnosActionTypes.PUT_USER_COHORTE, payload: res.data}))
          .catch(err => console.log(err))
      }
  }

  
import axios from "axios";

export const alumnosActionTypes = {
  GET_ALUMNOS: 'GET_ALUMNOS'
}

  export const getAlumnosid = (id) => {
    return (dispatch) => {
      axios.get(`http://localhost:3006/alumnos/cohorte/${id}`, {withCredentials: true}).then((res) => {
       return dispatch({
          type: alumnosActionTypes.GET_ALUMNOS,
          payload: res.data
        });
      }).catch(err => console.log(err));
    };
  };




import axios from "axios";

export const CohorteActionTypes = {
    SET_COHORTE: 'SET_COHORTE'
}

export const setCohorte = (data) => {
    return (dispatch) => {
      axios
        .post(`http://localhost:3006/cohortes/nuevo`, {
          fecha: data.fecha,
          nombre: data.nombre
        })
        .then((cohorte) => {
          return dispatch({
            type: CohorteActionTypes.SET_COHORTE,
            payload: cohorte.data
            
          });
        });
    };
  };
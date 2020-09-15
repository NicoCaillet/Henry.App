import axios from "axios";

export const CohorteActionTypes = {
    SET_COHORTE: 'SET_COHORTE'
}

export const setCohorte = (data) => {
    return (dispatch) => {
      axios
        .post(`http://localhost:3006/cohortes/nuevo`, data)
        .then((cohorte) => {
          dispatch({
            type: CohorteActionTypes.SET_COHORTE,
            cohorte: cohorte.data,
          });
        });
    };
  };
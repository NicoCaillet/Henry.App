import axios from 'axios';
import GrupoPm from '../../components/Admin/grupoPP/componentes/Pms';
export const GrupoPMActionsTypes = {
    GET_GRUPO: "GET_GRUPO",
    SET_PM: "SET_PM"
}
export const getGrupo = (cohorteId) => {
    return dispatch => {
        return axios.get("http://localhost:3006/grupos/cohorte/"+cohorteId)
            .then(res => dispatch({ type: GrupoPMActionsTypes.GET_GRUPO, payload: res.data }))
            .catch(err => console.log(err));
    }
}



export const setPm = (pm, cohorteId) => {
    return (dispatch) => {
      axios.post(`http://localhost:3006/grupo/nuevo`, {
        pm,
        cohorteId
        })
        .then((pm) => {
          return dispatch({
            type: GrupoPMActionsTypes.SET_PM
            
          });
        });
    };
  };
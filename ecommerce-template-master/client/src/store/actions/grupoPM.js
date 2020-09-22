import axios from 'axios';
export const GrupoPMActionsTypes = {
    GET_GRUPO: "GET_GRUPO",
}
export const getGrupo = (cohorteId) => {
    return dispatch => {
        return axios.get("http://localhost:3006/grupos/cohorte/"+cohorteId)
            .then(res => dispatch({ type: GrupoPMActionsTypes.GET_GRUPO, payload: res.data }))
            .catch(err => console.log(err));
    }
}
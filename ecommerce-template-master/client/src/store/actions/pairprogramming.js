import axios from "axios";

export const ppActionTypes = {
    GET_PP: 'GET_PP',
    GET_PPS: 'GET_PPS',
}

export const getpp = () => {
    return (dispatch) => {
      axios.get(`http://localhost:3006/pair`, {withCredentials: true}).then((res) => {
        console.log("getpp", res)
       return dispatch({
          type: ppActionTypes.GET_PP,
          payload: res.data,
        });
      }).catch(err => console.log(err));
    };
  };
export const getPps = () => {
  return dispatch => {
    axios.get("http://localhost:3006/pair/grupos", { withCredentials: true })
      .then((res) => dispatch({type: ppActionTypes.GET_PPS, payload: res.data}))
  }
}
import axios from "axios";

export const ppActionTypes = {
    GET_PP: 'GET_PP'
}

export const getpp = () => {
    return (dispatch) => {
      axios.get(`http://localhost:3006/pair`, {withCredentials: true}).then((res) => {
        dispatch({
          type: ppActionTypes.GET_PP,
          payload: res.data,
        });
      });
    };
  };
import axios from "axios"
export const UserActionTypes = {
    SET_USER: 'SET_USER',
    PUT_USER: "PUT_USER"
}

export const setUser = (user) => {
    return {
        type: UserActionTypes.SET_USER,
        payload: user
    }
}

export const putUser = ({nombre, apellido, email, localidad, edad, id}) => {
    
    return (dispatch) => {
    axios
        .put(`http://localhost:3006/user/${id}`, {
            nombre: nombre,
            apellido: apellido,
            email: email,
            localidad: localidad,
            edad: edad
        }, {withCredentials:true})
        .then(res => {
        dispatch({
            type: UserActionTypes.PUT_USER,
            usuario: res.user,
            });
        })
        .catch (err => console.log(err));
    };
};
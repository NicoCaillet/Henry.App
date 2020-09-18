import axios from "axios"
export const UserActionTypes = {
    SET_USER: 'SET_USER',
    PUT_USER: "PUT_USER",
    LOG_OUT: 'LOG_OUT',
    RE_PASS: 'RE_PASS',
    GET_USER: "GET_USER",
    PUT_USER_GRUPO: "PUT_USER_GRUPO",
    PUT_USER_COHORTE: "PUT_USER_COHORTE"
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
        .put(`http://localhost:3006/user/update/${id}`, {
            nombre: nombre,
            apellido: apellido,
            email: email,
            localidad: localidad,
            edad: edad
        }, {withCredentials:true})
        .then(res => {
         dispatch({
            type: UserActionTypes.PUT_USER,
            payload: res.data,
            });
        })
        .catch (err => console.log(err));
    };
};
export const rePass = (userPass) =>{
    return dispatch => {
        axios.put("http://localhost:3006/user/repassword", userPass, { withCredentials: true })
            .then(res => dispatch({type: UserActionTypes.RE_PASS}))
            .catch(err => console.log(err));
    }
}
export const logOut = () =>{
    return (dispatch) => {
        axios.get("http://localhost:3006/user/logout", { withCredentials: true })
            .then(() => dispatch({type: UserActionTypes.LOG_OUT}))
            .catch(err => console.log(err));
    }
}
//get todos los usuarios
export const getUser = () => {
    return dispatch => {
        axios.get("http://localhost:3006/alumnos/", {withCredentials: true})
        .then ((res) =>dispatch ({type: UserActionTypes.GET_USER, payload: res.data}))
        .catch (err => console.log(err))
    }
}
//put a un usuario
export const putUsuarioGrupo = ({usuarioId, grupoId}) => {
    return dispatch => {
        axios.put("http://localhost:3006/alumnos/grupo/agregar",{
        usuarioId: usuarioId,
        grupoId: grupoId
        }, {withCredentials: true})
        .then((res) => dispatch ({type: UserActionTypes.PUT_USER_GRUPO, payload: res.data}))
        .catch(err => console.log(err))
        }
    }
//put a un cohorte
    export const putUsuarioCohorte = ({usuarioId,cohorteId}) => {
        return dispatch => {
            axios.put("http://localhost:3006/alumnos/cohorte/agregar", {
                usuarioId: usuarioId,
                cohorteId: cohorteId
            }, {withCredentials: true})
            .then (res => dispatch ({type:UserActionTypes.PUT_USER_COHORTE, payload: res.data}))
            .catch(err => console.log(err))
        }
    }
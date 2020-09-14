import { UserActionTypes } from '../actions/user';

//ESTE REDUCER ES UNA PRUEBA DE REDUX
const initialState = {
    user: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state
    }
}
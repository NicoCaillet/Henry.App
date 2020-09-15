import { UserActionTypes } from '../actions/cohorte.js';


const initialState = {
    cohorte: ''
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SET_COHORTE:
            return {
                ...state,
                cohorte: action.payload,
            }
        default:
            return state
    }
}
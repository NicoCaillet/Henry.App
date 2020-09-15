import { CohorteActionTypes } from '../actions/cohorte.js';


const initialState = {
    cohorte: ''
};

export const cohorteReducer = (state = initialState, action) => {
    switch (action.type) {
        case CohorteActionTypes.SET_COHORTE:
            return {
                ...state,
                cohorte: action.payload,
            }
        default:
            return state
    }
}
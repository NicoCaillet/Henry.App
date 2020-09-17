import { alumnosActionTypes } from '../actions/alumnos.js';


const initialState = {
    alumnos: []
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case alumnosActionTypes.GET_ALUMNOS:
            return {
                ...state,
                alumnos: action.payload,
            }
        
        default:
            return state
    }
}
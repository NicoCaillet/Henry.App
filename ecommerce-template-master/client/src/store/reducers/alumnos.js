import { alumnosActionTypes } from '../actions/alumnos.js';


const initialState = {
    alumnos_cohorte: [],
    alumnos: []
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case alumnosActionTypes.GET_ALUMNOS_COHORTE:
            return {
                ...state,
                alumnos_cohorte: action.payload,
            }
            case alumnosActionTypes.GET_ALUMNOS:
                return {
                    ...state,
                    alumnos: action.payload
                }
                case alumnosActionTypes.PUT_USER_GRUPO:
                    return {
                        ...state,
                        alumnos: action.payload
                    }
                    case alumnosActionTypes.PUT_USER_COHORTE:
                        return {
                            ...state,
                        }
        
        default:
            return state
    }
}
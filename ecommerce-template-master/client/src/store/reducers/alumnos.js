import { alumnosActionTypes } from '../actions/alumnos.js';


const initialState = {
    alumnos: [],
    user: []
};

export const alumnosReducer = (state = initialState, action) => {
    switch (action.type) {
        case alumnosActionTypes.GET_ALUMNOS:
            return {
                ...state,
                alumnos: action.payload,
            }
            case alumnosActionTypes.GET_USER:
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
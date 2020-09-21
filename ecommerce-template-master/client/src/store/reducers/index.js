import { combineReducers } from "redux";
import { userReducer } from "./user"
import { cohorteReducer } from './cohorte'
import { pairProgramingReducer } from "./pairprogramming";
import { alumnosReducer } from "./alumnos";
import { clasesReducer } from './clases'

export const rootReducer = combineReducers({
    user: userReducer,
    cohorte: cohorteReducer,
    pairPrograming: pairProgramingReducer,
    alumnos: alumnosReducer,
    clases: clasesReducer
});
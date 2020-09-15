import { combineReducers } from "redux";
import { userReducer } from "./user"
import { cohorteReducer } from './cohorte'

export const rootReducer = combineReducers({
    user: userReducer,
    cohorte: cohorteReducer
});
import { combineReducers } from "redux";
import { testReducer } from "./reducerTest"

export const rootReducer = combineReducers({
    test: testReducer,
});
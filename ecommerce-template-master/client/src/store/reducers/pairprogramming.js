import { ppActionTypes } from '../actions/pairprogramming.js';


const initialState = {
    pp: {}
};

export const cohorteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ppActionTypes.GET_PP:
            return {
                ...state,
                pp: action.payload
            }
        default:
            return state
    }
}
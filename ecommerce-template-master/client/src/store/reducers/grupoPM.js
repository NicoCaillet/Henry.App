import {
    GrupoPMActionsTypes
} from '../actions/grupoPM';
const initialState = {
    gruposPM: []
};
export const grupoPMReducer =  (state = initialState, action) => {
    switch(action.type){
        case GrupoPMActionsTypes.GET_GRUPO:
            return{
                ...state,
                gruposPM: action.payload
            }
        default:
            return state;
    }
}

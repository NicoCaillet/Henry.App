import { feedbackActionTypes } from '../actions/feedback';

const initialState = {
    feedback: {},
}

export const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
        case feedbackActionTypes.POST_FEEDBACK:
            return {
                ...state,
                feedback: action.payload,
            }
        case feedbackActionTypes.GET_FEEDBACK:
            return {
                ...state,
                feedback: action.payload
            }
        default:
            return state
    }
}
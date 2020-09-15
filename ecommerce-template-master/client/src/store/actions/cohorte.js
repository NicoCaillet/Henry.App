export const CohorteActionTypes = {
    SET_COHORTE: 'SET_COHORTE'
}

export const setCohorte = (cohorte) => {
    return {
        type: CohorteActionTypes.SET_COHORTE,
        payload: cohorte
    }
}
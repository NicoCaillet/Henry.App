export const UserActionTypes = {
    SET_COHORTE: 'SET_COHORTE'
}

export const setCohorte = (cohorte) => {
    return {
        type: UserActionTypes.SET_COHORTE,
        payload: cohorte
    }
}
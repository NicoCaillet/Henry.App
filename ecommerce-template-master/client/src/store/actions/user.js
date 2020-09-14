export const UserActionTypes = {
    SET_USER: 'SET_USER',
}

export const userStore = (user) => {
    return {
        type: UserActionTypes.SET_USER,
        payload: user
    }
}
import UserActionTypes from "./user.types";

const USER_INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            return state;  
    }
}

import { createAction } from "../../utils/reducer/reducer.utils"
import UserActionTypes from "./user.types";

export const setCurrentUser = (user) => {
    return createAction(UserActionTypes.SET_CURRENT_USER, user)
}
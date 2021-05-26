import {IUser} from "../entities/User";
import {FETCH_CURRENT_USER} from "./CurrentUserStore";

export interface ICurrentUserActions {
    FETCH_CURRENT_USER: {
        user: IUser,
    };
    type: string | null,
}

export function fetchCurrentUserAction(user: IUser) {
    return {
        FETCH_CURRENT_USER: {
            user,
        },
        type: FETCH_CURRENT_USER,
    };
}

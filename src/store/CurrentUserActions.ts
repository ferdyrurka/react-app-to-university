import {User} from "../entities/User";
import {FETCH_CURRENT_USER} from "./CurrentUserStore";

export interface ICurrentUserActions {
    FETCH_CURRENT_USER: {
        user: User,
    };
    type: string | null,
}

export function fetchCurrentUserAction(user: User) {
    return {
        FETCH_CURRENT_USER: {
            user,
        },
        type: FETCH_CURRENT_USER,
    };
}

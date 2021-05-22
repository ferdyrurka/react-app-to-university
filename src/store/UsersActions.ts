import {User} from "../entities/User";
import {FETCH_USERS} from "./UsersStore";

export interface IUsersActions {
    FETCH_USERS: {
        users: User[],
    };
    type: string | null,
}

export function fetchUsersAction(users: User[]) {
    return {
        FETCH_USERS: {
            users,
        },
        type: FETCH_USERS,
    };
}

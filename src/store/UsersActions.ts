import {IUser} from "../entities/User";
import {FETCH_USERS} from "./UsersStore";

export interface IUsersActions {
    FETCH_USERS: {
        users: IUser[],
    };
    type: string | null,
}

export function fetchUsersAction(users: IUser[]) {
    return {
        FETCH_USERS: {
            users,
        },
        type: FETCH_USERS,
    };
}

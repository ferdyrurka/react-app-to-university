import {IUser} from "../../entities/User";
import {IUsersActions} from "../../store/UsersActions";
import {FETCH_USERS} from "../../store/UsersStore";

export interface IUsersReducer {
    users: IUser[],
}

const defaultState = (): IUsersReducer => ({
    users: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: IUsersActions) => {
    if (action.type === FETCH_USERS) {
        return {
            users: action.FETCH_USERS.users,
        };
    }

    return state;
}
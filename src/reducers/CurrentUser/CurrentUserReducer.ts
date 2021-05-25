import {IUser} from "../../entities/User";
import {FETCH_CURRENT_USER} from "../../store/CurrentUserStore";
import {ICurrentUserActions} from "../../store/CurrentUserActions";

export interface ICurrentUserReducer {
    user: IUser | null,
}

const defaultState = (): ICurrentUserReducer => ({
    user: null,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: ICurrentUserActions) => {
    if (action.type === FETCH_CURRENT_USER) {
        return {
            user: action.FETCH_CURRENT_USER.user,
        };
    }

    return state;
}
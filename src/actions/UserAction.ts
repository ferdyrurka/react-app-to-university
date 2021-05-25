import {environment} from "../tools/environment";
import {IUser} from "../entities/User";
import {fetchPhotoById} from "./PhotoAction";
import {fetchUsersAction} from "../store/UsersActions";
import store from "../tools/store";
import {fetchCurrentUserAction} from "../store/CurrentUserActions";

export function fetchUserById(id: number): Promise<IUser|null> {
    return fetch(environment.apiUrl + 'users/' + id)
        .then(response => response.json())
        .then(async (response: IUser) => {
            if (response.id === undefined) {
                return null;
            }

            const photo = await fetchPhotoById(response.id);
            response.avatarUrl = photo?.thumbnailUrl !== undefined ? photo.thumbnailUrl : null;

            store.dispatch(fetchCurrentUserAction(response));

            return response;
        });
}

export function fetchUsers(): Promise<IUser[]> {
    return fetch(environment.apiUrl + 'users')
        .then(response => response.json())
        .then(async response => {
            await Promise.all(
                response.map(async (user: IUser) => {
                    const photo = await fetchPhotoById(user.id);
                    user.avatarUrl = photo?.thumbnailUrl !== undefined ? photo.thumbnailUrl : null;
                })
            );

            store.dispatch(fetchUsersAction(response));

            return response;
        });
}


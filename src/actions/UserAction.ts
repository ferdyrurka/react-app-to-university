import {environment} from "../tools/environment";
import {User} from "../entities/User";
import {fetchPhotoById} from "./PhotoAction";
import {fetchUsersAction} from "../store/UsersActions";
import store from "../tools/store";
import {fetchCurrentUserAction} from "../store/CurrentUserActions";

export function fetchUserById(id: number): Promise<User|null> {
    return fetch(environment.apiUrl + 'users/' + id)
        .then(response => response.json())
        .then(async (response: User) => {
            if (response.id === undefined) {
                return null;
            }

            const photo = await fetchPhotoById(response.id);
            response.avatarUrl = photo?.thumbnailUrl !== undefined ? photo.thumbnailUrl : null;

            store.dispatch(fetchCurrentUserAction(response));

            return response;
        });
}

export function fetchUsers(): Promise<User[]> {
    return fetch(environment.apiUrl + 'users')
        .then(response => response.json())
        .then(async response => {
            await Promise.all(
                response.map(async (user: User) => {
                    const photo = await fetchPhotoById(user.id);
                    user.avatarUrl = photo?.thumbnailUrl !== undefined ? photo.thumbnailUrl : null;
                })
            );

            store.dispatch(fetchUsersAction(response));

            return response;
        });
}


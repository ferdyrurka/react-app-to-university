import {environment} from "../tools/environment";
import {User} from "../entities/User";
import {fetchPhotoById} from "./PhotoAction";

export function fetchUserById(id: number): Promise<User|null> {
    return fetch(environment.apiUrl + 'users/' + id)
        .then(response => response.json())
        .then(response => {
            if (response.id === undefined) {
                return null;
            }

            return response;
        })
        .then(async (response: User) => {
            if (response === null) {
                return null;
            }

            const photo = await fetchPhotoById(response.id);
            response.avatarUrl = photo?.thumbnailUrl !== undefined ? photo.thumbnailUrl : null;
            return response;
        });
}

export function fetchUsers(): Promise<User[]> {
    return fetch(environment.apiUrl + 'users')
        .then(response => response.json())
        .then(response => {
            response.map(async (user: User) => {
                const photo = await fetchPhotoById(user.id);
                user.avatarUrl = photo?.thumbnailUrl !== undefined ? photo.thumbnailUrl : null;
            });

            return response;
        });
}


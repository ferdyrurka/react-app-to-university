import {environment} from "../tools/environment";
import {User} from "../entities/user";

export function fetchCurrentUser(): Promise<User|null> {
    return fetch(environment.apiUrl + 'users')
        .then(response => response.json())
        .then(response => response[0] ?? null);
}

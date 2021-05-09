import {environment} from "../tools/environment";
import {User} from "../entities/user";

export function fetchUserById(id: number): Promise<User|null> {
    return fetch(environment.apiUrl + 'users/' + id)
        .then(response => response.json())
        .then(response => {
            response['avatarUrl'] = 'https://via.placeholder.com/65/92c952';
            return response;
        });
}

export function fetchUsers(): Promise<User[]> {
    return fetch(environment.apiUrl + 'users')
        .then(response => response.json())
        .then(response => {
            response['avatarUrl'] = 'https://via.placeholder.com/65/92c952';
            return response;
        });
}


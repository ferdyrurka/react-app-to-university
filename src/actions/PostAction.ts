import {environment} from "../tools/environment";
import {Post} from "../entities/Post";

export function fetchMainPost(): Promise<Post | null> {
    return fetch(environment.apiUrl + 'posts/1')
        .then(response => response.json());
}

export function fetchLatestPosts(): Promise<Post[] | []> {
    return fetch(environment.apiUrl + 'posts')
        .then(response => response.json())
        .then(response => {
            response.splice(0, 1);
            return response;
        })
        .then(response => {
            response.splice(3);
            return response;
        });
}


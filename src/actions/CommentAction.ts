import {environment} from "../tools/environment";
import {Comment} from "../entities/Comment";

export function fetchComments(): Promise<Comment[]> {
    return fetch(environment.apiUrl + 'comments')
        .then(response => response.json());
}



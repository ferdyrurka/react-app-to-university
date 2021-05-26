import {environment} from "../tools/environment";
import {IComment} from "../entities/Comment";

export function fetchComments(): Promise<IComment[]> {
    return fetch(environment.apiUrl + 'comments')
        .then(response => response.json());
}



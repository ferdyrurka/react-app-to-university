import {environment} from "../tools/environment";
import {Photo} from "../entities/Photo";
import store from "../tools/store";
import {fetchPhotosAction} from "../store/PhotosActions";

export function fetchMainPhoto(): Promise<Photo | null> {
    return fetch(environment.apiUrl + 'photos/1')
        .then(response => response.json());
}

export async function fetchPhotoById(id: number): Promise<Photo | null> {
    const response = await fetch(environment.apiUrl + 'photos/' + id);
    return await response.json();
}

export function fetchLatestPhotos(): Promise<Photo[] | []> {
    return fetch(environment.apiUrl + 'photos')
        .then(response => response.json())
        .then(response => {
            store.dispatch(fetchPhotosAction(response));

            return response;
        });
}


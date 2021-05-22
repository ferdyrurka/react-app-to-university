import {FETCH_PHOTOS} from "./PhotosStore";
import {Photo} from "../entities/Photo";

export interface IPhotosActions {
    FETCH_PHOTOS: {
        photos: Photo[],
    };
    type: string | null,
}

export function fetchPhotosAction(photos: Photo[]) {
    return {
        FETCH_PHOTOS: {
            photos,
        },
        type: FETCH_PHOTOS,
    };
}

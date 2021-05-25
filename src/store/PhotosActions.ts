import {FETCH_PHOTOS} from "./PhotosStore";
import {IPhoto} from "../entities/Photo";

export interface IPhotosActions {
    FETCH_PHOTOS: {
        photos: IPhoto[],
    };
    type: string | null,
}

export function fetchPhotosAction(photos: IPhoto[]) {
    return {
        FETCH_PHOTOS: {
            photos,
        },
        type: FETCH_PHOTOS,
    };
}

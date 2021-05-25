import {IPhoto} from "../../entities/Photo";
import {FETCH_PHOTOS} from "../../store/PhotosStore";
import {IPhotosActions} from "../../store/PhotosActions";

export interface IPhotosReducer {
    photos: IPhoto[],
}

const defaultState = (): IPhotosReducer => ({
    photos: [],
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: IPhotosActions) => {
    if (action.type === FETCH_PHOTOS) {
        return {
            photos: action.FETCH_PHOTOS.photos,
        };
    }

    return state;
}

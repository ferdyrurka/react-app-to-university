import {IComment} from "../entities/Comment";
import {FIND_COMMENTS, NEXT_PAGE} from "./FilterCommentsActions";
import {Followed} from "../reducers/Comments/Followed";

export interface FilterCommentsAction {
    FIND_COMMENTS: {
        followed: Followed,
        title: string | null,
        comments: IComment[],
    };
    NEXT_PAGE: {
        comments: IComment[],
        followed: Followed,
        toPage: number,
        currentPage: number,
    };
    type: string | null;
}

export function findCommentsAction(
    input: HTMLInputElement,
    comments: IComment[],
    followed: Followed,
) {
    return {
        FIND_COMMENTS: {
            title: input.value,
            comments,
            followed,
        },
        type: FIND_COMMENTS,
    };
}

export function nextCommentsPageAction(
    comments: IComment[],
    followed: Followed,
    toPage: number,
    currentPage: number,
) {
    return {
        NEXT_PAGE: {
            comments,
            followed,
            toPage,
            currentPage,
        },
        type: NEXT_PAGE,
    };
}


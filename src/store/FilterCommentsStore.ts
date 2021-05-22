import {Comment} from "../entities/Comment";
import {FIND_COMMENTS, NEXT_PAGE} from "./FilterCommentsActions";
import {Followed} from "../reducers/Comments/Followed";

export interface FilterCommentsAction {
    FIND_COMMENTS: {
        followed: Followed,
        title: string | null,
        comments: Comment[],
    };
    NEXT_PAGE: {
        comments: Comment[],
        followed: Followed,
        toPage: number,
        currentPage: number,
    };
    type: string | null;
}

export function findCommentsAction(
    input: HTMLInputElement,
    comments: Comment[],
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
    comments: Comment[],
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


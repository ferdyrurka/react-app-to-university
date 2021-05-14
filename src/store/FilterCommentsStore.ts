import {Comment} from "../entities/Comment";
import {FIND_COMMENTS, NEXT_PAGE} from "./FilterCommentsActions";
import {Followed} from "../reducers/Comments/Followed";

export interface FilterCommentsAction {
    followed: Followed,
    title: string | null,
    comments: Comment[],
    type: string | null,
    toPage: number | null,
    currentPage: number | null,
}

export function findCommentsAction(
    input: HTMLInputElement,
    comments: Comment[],
    followed: Followed,
): FilterCommentsAction {
    return {
        title: input.value,
        type: FIND_COMMENTS,
        comments,
        followed,
        toPage: null,
        currentPage: null,
    };
}

export function nextCommentsPageAction(
    input: HTMLInputElement,
    comments: Comment[],
    followed: Followed,
    toPage: number,
    currentPage: number,
): FilterCommentsAction {
    return {
        title: input.value,
        type: NEXT_PAGE,
        comments,
        followed,
        toPage,
        currentPage,
    };
}


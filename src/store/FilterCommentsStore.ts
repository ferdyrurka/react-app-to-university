import {Comment} from "../entities/Comment";
import {FIND_COMMENTS} from "./FilterCommentsActions";
import {Followed} from "../reducers/Comments/Followed";

export interface FilterCommentsAction {
    followed: Followed,
    title: string | null,
    comments: Comment[],
    type: string | null,
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
    };
}

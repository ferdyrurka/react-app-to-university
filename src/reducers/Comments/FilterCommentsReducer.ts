import {Comment} from "../../entities/Comment";
import {FilterCommentsAction} from "../../store/FilterCommentsStore";
import {FIND_COMMENTS} from "../../store/FilterCommentsActions";
import {Followed} from "./Followed";
import {CommentsTitleFilter} from "./CommentsTitleFilter";
import {CommentsFollowedFilter} from "./CommentsFollowedFilter";

export interface IFilterCommentsReducer {
    comments: Comment[],
    page: {max: number, min: number},
}

const defaultState = (): IFilterCommentsReducer => ({
    comments: [],
    page: {max: 0, min: 0},
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: FilterCommentsAction) => {
    if (action.type === FIND_COMMENTS) {
        let comments = action.comments;

        if (action.followed !== Followed.ALL) {
            comments = CommentsFollowedFilter.findByFollowed(comments, action.followed);
        }

        if (action.title !== null) {
            comments = CommentsTitleFilter.findByTitle(comments, action.title);
        }

        let max = 0;

        if (comments.length > 10) {
            max = Math.floor(comments.length / 10)
        } else if (comments.length > 1) {
            max = 1;
        }

        return {
            comments,
            page: {
                max,
                min: comments.length > 0 ? 1 : 0,
            },
        }
    }

    return defaultState();
}

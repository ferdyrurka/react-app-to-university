import {Comment} from "../../entities/Comment";
import {FilterCommentsAction} from "../../store/FilterCommentsStore";
import {FIND_COMMENTS, NEXT_PAGE} from "../../store/FilterCommentsActions";
import {Followed} from "./Followed";
import {CommentsTitleFilter} from "./CommentsTitleFilter";
import {CommentsFollowedFilter} from "./CommentsFollowedFilter";

export interface IFilterCommentsReducer {
    comments: Comment[],
    page: {current: number, max: number, min: number},
    followed: Followed,
}

const defaultState = (): IFilterCommentsReducer => ({
    comments: [],
    page: {current: 0, max: 0, min: 0},
    followed: Followed.ALL,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: FilterCommentsAction) => {
    if (action.type === FIND_COMMENTS) {
        let comments = action.FIND_COMMENTS.comments;

        if (action.FIND_COMMENTS.followed !== Followed.ALL) {
            comments = CommentsFollowedFilter.findByFollowed(comments, action.FIND_COMMENTS.followed);
        }

        if (action.FIND_COMMENTS.title !== null) {
            comments = CommentsTitleFilter.findByTitle(comments, action.FIND_COMMENTS.title);
        }

        const [max, firstPage] = getMinMaxPage(comments);

        return {
            comments,
            page: {
                max,
                current: firstPage,
                min: firstPage,
            },
            followed: action.FIND_COMMENTS.followed,
        }
    }

    if (action.type === NEXT_PAGE) {
        if (action.NEXT_PAGE.toPage === null) {
            return defaultState();
        }

        const [max, firstPage] = getMinMaxPage(action.NEXT_PAGE.comments);

        if (action.NEXT_PAGE.toPage > max || action.NEXT_PAGE.toPage < firstPage) {
            return {
                comments: action.NEXT_PAGE.comments,
                page: {
                    max,
                    current: action.NEXT_PAGE.currentPage,
                    min: firstPage,
                },
                followed: action.NEXT_PAGE.followed,
            }
        }

        return {
            ...state,
            page: {
                max,
                current: action.NEXT_PAGE.toPage,
                min: firstPage,
            },
        }
    }

    return state;
}

function getMinMaxPage(comments: Comment[]) {
    let max = 0;

    if (comments.length > 10) {
        max = Math.floor(comments.length / 10)
    } else if (comments.length > 1) {
        max = 1;
    }

    const firstPage = comments.length > 0 ? 1 : 0;

    return [max, firstPage];
}

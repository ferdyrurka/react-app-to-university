import {Comment} from "../../entities/Comment";
import {Followed} from "./Followed";
import {CurrentUser} from "../../tools/CurrentUser";

export class CommentsFollowedFilter
{
    public static findByFollowed(
        comments: Comment[],
        followed: Followed,
    ): Comment[]  {
        if (followed === Followed.MY) {
            const currentUserId = CurrentUser.getCurrentUserId();

            comments = comments.filter(comment => comment.postId === currentUserId);
        }

        return comments;
    }
}

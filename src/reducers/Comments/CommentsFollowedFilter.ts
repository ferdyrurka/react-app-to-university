import {IComment} from "../../entities/Comment";
import {Followed} from "./Followed";
import {CurrentUser} from "../../tools/CurrentUser";

export class CommentsFollowedFilter
{
    public static findByFollowed(
        comments: IComment[],
        followed: Followed,
    ): IComment[]  {
        if (followed === Followed.MY) {
            const currentUserId = CurrentUser.getCurrentUserId();

            comments = comments.filter(comment => comment.postId === currentUserId);
        }

        return comments;
    }
}

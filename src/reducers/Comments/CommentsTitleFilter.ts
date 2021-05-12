import {Comment} from "../../entities/Comment";

export class CommentsTitleFilter
{
    public static findByTitle(
        comments: Comment[],
        title: string,
    ): Comment[]  {
        title = title.toLowerCase();

        return comments.filter(
            comment => comment.name.toLowerCase().indexOf(title) > -1
        );
    }
}

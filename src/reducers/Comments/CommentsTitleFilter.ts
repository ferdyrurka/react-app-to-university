import {IComment} from "../../entities/Comment";

export class CommentsTitleFilter
{
    public static findByTitle(
        comments: IComment[],
        title: string,
    ): IComment[]  {
        title = title.toLowerCase();

        return comments.filter(
            comment => comment.name.toLowerCase().indexOf(title) > -1
        );
    }
}

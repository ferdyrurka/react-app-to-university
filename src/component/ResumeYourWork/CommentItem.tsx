import styled from "styled-components";
import {FC, useEffect, useState} from "react";
import {Comment} from "../../entities/Comment";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {FlexRow} from "../../styledHelpers/Grid";
import {User} from "../../entities/User";
import {fetchUserById} from "../../actions/UserAction";

const CommentItemWrapper = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  border-radius: 5px;
  margin-bottom: 8px;
  padding: 10px;
  
  h2 {
    color: ${Colors.blue};
    font-size: ${FontSize["18"]};
    margin-bottom: 10px;
  }
  
  p {
    color: ${Colors.grey};
    margin-bottom: 10px;
  }
`;

const CommentItemsAbout = styled(FlexRow)`
  .item {
    display: flex;
    align-items: center;

    span {
      color: ${Colors.darkGrey};
      font-size: ${FontSize["12"]};
      margin-right: 10px;
    }

    img {
      width: 16px;
      height: auto;
      max-height: 16px;
      margin-right: 5px;
    }
  }
  
  .last-item {
    margin-right: 0;

    span {
      color: ${Colors.grey};
    }
  }
`;

interface CommentItemProps {
    comment: Comment,
}

const CommentItem: FC<CommentItemProps> = props => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUserById(props.comment.postId).then(user => setUser(user));
    }, [props.comment.postId]);

    return (
        <CommentItemWrapper>
            <h2>{props.comment.name}</h2>
            <p>{props.comment.body}</p>
            {user !== null &&
            <CommentItemsAbout>
                <div className="item">
                    <img src={user.avatarUrl ? user.avatarUrl : ''} alt="user avatar"/>
                    <span>{user.company.catchPhrase}</span>
                    <span>+</span>
                </div>

                <div className="item">
                    <img src="media/icons/entities.png" alt="type icon"/>
                    <span> Corporate</span>
                    <span>+</span>
                </div>

                <div className="item last-item">
                    <span>Updated 3 days ago by {user.name}</span>
                </div>
            </CommentItemsAbout>
            }
        </CommentItemWrapper>
    );
}

export default CommentItem;

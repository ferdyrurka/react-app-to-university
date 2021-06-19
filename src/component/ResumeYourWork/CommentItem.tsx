import styled from "styled-components";
import {FC} from "react";
import {IComment} from "../../entities/Comment";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {IUser} from "../../entities/User";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {CarouselFlex} from "../../styledHelpers/Components";

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

const CommentItemsAbout = styled(CarouselFlex)`
  .item {
    display: flex;
    align-items: center;

    span {
      color: ${Colors.darkGrey};
      font-size: ${FontSize["12"]};
      margin-right: 10px;
      white-space: nowrap;
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
    comment: IComment,
}

const CommentItem: FC<CommentItemProps> = props => {
    let user: IUser | undefined;
    let users: IUser[] = useSelector(
        (state: IState) => state.users.users,
        shallowEqual
    );
    user = users.find(user => user.id === props.comment.postId);

    return (
        <CommentItemWrapper>
            <h2>{props.comment.name}</h2>
            <p>{props.comment.body}</p>
            {user !== undefined &&
            <CommentItemsAbout>
                <div className="item">
                    <img src={user.avatarUrl ? user.avatarUrl : ''} alt="user avatar"/>
                    <span>{user.company.catchPhrase}</span>
                    <span>+</span>
                </div>

                <div className="item">
                    <img src="/media/icons/entities.png" alt="type icon"/>
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

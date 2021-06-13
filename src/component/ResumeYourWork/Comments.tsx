import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import React, {Dispatch, useCallback, useEffect, useState} from "react";
import {IComment} from "../../entities/Comment";
import {fetchComments} from "../../actions/CommentAction";
import CommentItem from "./CommentItem";
import {FlexColumn} from "../../styledHelpers/Grid";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {findCommentsAction} from "../../store/FilterCommentsStore";
import {Followed} from "../../reducers/Comments/Followed";
import Pagination from "./Pagination";
import {Breakpoint} from "../../styledHelpers/Breakpoint";
import SearchFollowed from "../Filters/SearchFollowed";

const ITEMS_COUNT: number = 10;

const CommentsContainer = styled.section`
  margin-top: 15px;
`;

const CommentsNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 15px 15px;
  justify-content: space-between;

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    flex-direction: row;
  }
`;

const CommentsTitle = styled.h1`
  color: ${Colors.darkBlue};
  font-size: ${FontSize["22"]};
  font-weight: 700;
`;

const CommentsWrapper = styled(FlexColumn)`
  flex-wrap: nowrap;
`;

function Comments() {
    const [sourceComments, setSourceComments] = useState<IComment[]>([]);

    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        fetchComments().then(comments => {
            setSourceComments(comments);

            dispatch(findCommentsAction(
                (document.getElementById('filter_title') as HTMLInputElement),
                comments,
                Followed.ALL,
            ));
        });
    }, [dispatch]);

    let comments: IComment[] = useSelector(
        (state: IState) => state.comments.comments,
        shallowEqual
    );

    let page: {current: number, min: number, max: number} = useSelector(
        (state: IState) => state.comments.page,
        shallowEqual
    );

    let followed: Followed = useSelector(
        (state: IState) => state.comments.followed,
        shallowEqual
    );

    const changeFollowed = useCallback(
        (newFollowed: Followed) => {
            dispatch(findCommentsAction(
                (document.getElementById('filter_title') as HTMLInputElement),
                sourceComments,
                newFollowed,
            ));
        },
        [dispatch, sourceComments]
    );

    const changeFilterTitle = useCallback(
        () => {
            dispatch(findCommentsAction(
                (document.getElementById('filter_title') as HTMLInputElement),
                sourceComments,
                followed,
            ));
        },
        [dispatch, sourceComments, followed]
    );

    return (
        <CommentsContainer>
            <CommentsNavWrapper>
                <CommentsTitle>Resume your work</CommentsTitle>

                <SearchFollowed filterInputCallback={changeFilterTitle} followed={followed} followedCallback={changeFollowed}/>
            </CommentsNavWrapper>

            {comments.length > 0 &&
            <CommentsWrapper>
                {comments.slice((page.current - 1) * ITEMS_COUNT, page.current * ITEMS_COUNT).map(comment => {
                    return (
                        <CommentItem key={comment.id.toString()} comment={comment}/>
                    );
                })}
                <Pagination/>
            </CommentsWrapper>
            }
        </CommentsContainer>
    );
}

export default Comments;

import React, {Dispatch, useCallback} from "react";
import {nextCommentsPageAction} from "../../store/FilterCommentsStore";
import {IComment} from "../../entities/Comment";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {Followed} from "../../reducers/Comments/Followed";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

const CommentsPaginatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  span {
    color: ${Colors.blue};

    &:first-child {
      margin-right: 15px;
    }

    &:last-child {
      margin-left: 15px;
    }
  }

  .active {
    font-weight: 700;
  }
`;

function Pagination() {
    const dispatch: Dispatch<any> = useDispatch();

    let comments: IComment[] = useSelector(
        (state: IState) => state.comments.comments,
        shallowEqual
    );

    let page: { current: number, min: number, max: number } = useSelector(
        (state: IState) => state.comments.page,
        shallowEqual
    );

    let followed: Followed = useSelector(
        (state: IState) => state.comments.followed,
        shallowEqual
    );

    const nextPage = useCallback(
        (toPage: number) => {
            dispatch(nextCommentsPageAction(
                comments,
                followed,
                toPage,
                page.current,
            ));
        },
        [dispatch, comments, followed, page]
    );

    return (
        <CommentsPaginatorWrapper>
            {comments.length > 0 &&
            <div>
                {page.min >= 1 &&
                <span onClick={() => nextPage(page.current - 1)}>PREVIOUS</span>
                }

                {
                    Array.from(Array(page.max).keys()).map((value: number, index: number) => {
                        ++value;

                        if (value === page.current) {
                            return (
                                <span key={index} className="active"> {value} </span>
                            );
                        }

                        if (value === page.min || value === page.max) {
                            return (
                                <span key={index} onClick={() => nextPage(value)}> {value} </span>
                            );
                        }

                        if ((value > 1 && value === (page.current - 1)) || value === (page.current + 1)) {
                            return (
                                <span key={index} onClick={() => nextPage(value)}> {value} </span>
                            );
                        }

                        if ((value >= 2 && value === (page.current - 2)) || value === (page.current + 2)) {
                            return (
                                <span key={index}> ... </span>
                            );
                        }

                        return '';
                    })
                }

                {page.min >= 1 &&
                <span onClick={() => nextPage(page.current + 1)}>NEXT</span>
                }
            </div>
            }
        </CommentsPaginatorWrapper>
    );
}

export default Pagination;
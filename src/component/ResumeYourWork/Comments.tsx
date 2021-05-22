import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {SearchInput} from "../../styledHelpers/Components";
import React, {Dispatch, useCallback, useEffect, useState} from "react";
import useDropdown from "react-dropdown-hook";
import {Comment} from "../../entities/Comment";
import {fetchComments} from "../../actions/CommentAction";
import CommentItem from "./CommentItem";
import {FlexColumn} from "../../styledHelpers/Grid";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {findCommentsAction, nextCommentsPageAction} from "../../store/FilterCommentsStore";
import {Followed} from "../../reducers/Comments/Followed";

const ITEMS_COUNT: number = 10;

const CommentsContainer = styled.section`
  margin-top: 15px;
`;

const CommentsNavWrapper = styled.div`
  display: flex;
  margin: 20px 0 15px 15px;
  justify-content: space-between;
`;

const CommentsTitle = styled.h1`
  color: ${Colors.darkBlue};
  font-size: ${FontSize["22"]};
  font-weight: 700;
`;

const CommentsActionWrapper = styled.div`
  width: 360px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
`;

const FilterInput = styled(SearchInput)`
  width: 190px;
`;

const FilterAction = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  color: #5D6DB4;
  cursor: pointer;

  .arrow-icon {
    width: 10px;
    height: 8px;
    margin-left: 10px;
  }

  .signal-icon {
    margin-right: 10px;
  }
`;

const FilterActionDropdownMenu = styled.div`
  position: absolute;
  background-color: ${Colors.white};
  top: 30px;
  right: 0;
  width: 160px;
  padding: 5px 10px;
  border-radius: 5px;
`;

const FilterActionOption = styled.div`
  span {
    cursor: pointer;
  }
  
  .active {
    font-weight: bold;
  }
`;

const CommentsWrapper = styled(FlexColumn)`
  flex-wrap: nowrap;
`;

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

function Comments() {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const [sourceComments, setSourceComments] = useState<Comment[]>([]);

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

    let comments: Comment[] = useSelector(
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
        <CommentsContainer>
            <CommentsNavWrapper>
                <CommentsTitle>Resume your work</CommentsTitle>

                <CommentsActionWrapper ref={wrapperRef}>
                    <FilterInput placeholder="Filter by title" id="filter_title" onInput={() => changeFilterTitle()}/>
                    <FilterAction onClick={!dropdownOpen ? toggleDropdown : closeDropdown}>
                        <img className="signal-icon" src="media/icons/ecosystem.png" alt="arrow down"/>
                        <span>Followed</span>
                        <img className="arrow-icon" src="media/icons/arrow-down.png" alt="arrow down"/>
                    </FilterAction>
                    {dropdownOpen &&
                    <FilterActionDropdownMenu>
                        <FilterActionOption>
                            <span className={followed === Followed.MY ? 'active' : ''} onClick={() => changeFollowed(Followed.MY)}>My</span>
                        </FilterActionOption>
                        <FilterActionOption>
                            <span className={followed === Followed.ALL ? 'active' : ''} onClick={() => changeFollowed(Followed.ALL)}>All</span>
                        </FilterActionOption>
                    </FilterActionDropdownMenu>
                    }
                </CommentsActionWrapper>
            </CommentsNavWrapper>

            {comments.length > 0 &&
            <CommentsWrapper>
                {comments.slice((page.current - 1) * ITEMS_COUNT, page.current * ITEMS_COUNT).map(comment => {
                    return (
                        <CommentItem key={comment.id.toString()} comment={comment}/>
                    );
                })}
                <CommentsPaginatorWrapper>
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
                </CommentsPaginatorWrapper>
            </CommentsWrapper>
            }
        </CommentsContainer>
    );
}

export default Comments;

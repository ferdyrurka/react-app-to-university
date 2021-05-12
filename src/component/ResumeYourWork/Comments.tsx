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
import {findCommentsAction} from "../../store/FilterCommentsStore";
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
  input {
    margin-left: 15px;
    cursor: pointer;
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

    const [currentPage, setCurrentPage] = useState(0);
    const dispatch: Dispatch<any> = useDispatch();
    let followed = Followed.ALL;

    useEffect(() => {
        fetchComments().then(comments => {
            setCurrentPage(comments.length > 0 ? 1 : 0);
            setSourceComments(comments);

            dispatch(findCommentsAction(
                (document.getElementById('filter_title') as HTMLInputElement),
                comments,
                followed,
            ));
        });
    }, [dispatch, followed]);

    let comments: Comment[] = useSelector(
        (state: IState) => state.comments.comments,
        shallowEqual
    );

    let page: {min: number, max: number} = useSelector(
        (state: IState) => state.comments.page,
        shallowEqual
    );

    const changePage = (toPage: number) => {
        if (toPage > page.max || toPage < page.min) {
            return;
        }

        setCurrentPage(toPage);
    };

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
                comments,
                followed,
            ));
        },
        [dispatch, comments, followed]
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
                            <label htmlFor="my">My</label>
                            <input type="radio" name="followed" id="my" onClick={() => changeFollowed(Followed.MY)}/>
                        </FilterActionOption>
                        <FilterActionOption>
                            <label htmlFor="all">All</label>
                            <input type="radio" name="followed" id="all" onClick={() => changeFollowed(Followed.ALL)}/>
                        </FilterActionOption>
                    </FilterActionDropdownMenu>
                    }
                </CommentsActionWrapper>
            </CommentsNavWrapper>

            {comments.length > 0 &&
            <CommentsWrapper>
                {comments.slice((currentPage - 1) * ITEMS_COUNT, currentPage * ITEMS_COUNT).map(comment => {
                    return (
                        <CommentItem key={comment.id.toString()} comment={comment}/>
                    );
                })}
                <CommentsPaginatorWrapper>
                    <div>
                        <span onClick={() => changePage(currentPage - 1)}>PREVIOUS</span>

                        {
                            Array.from(Array(page.max).keys()).map((value: number) => {
                                ++value;

                                if (value === currentPage) {
                                    return (
                                        <span className="active"> {value} </span>
                                    );
                                }

                                if (value === page.min || value === page.max) {
                                    return (
                                        <span onClick={() => changePage(value)}> {value} </span>
                                    );
                                }

                                if ((value > 1 && value === (currentPage - 1)) || value === (currentPage + 1)) {
                                    return (
                                        <span onClick={() => changePage(value)}> {value} </span>
                                    );
                                }

                                if ((value >= 2 && value === (currentPage - 2)) || value === (currentPage + 2)) {
                                    return (
                                        <span> ... </span>
                                    );
                                }

                                return '';
                            })
                        }

                        <span onClick={() => changePage(currentPage + 1)}>NEXT</span>
                    </div>
                </CommentsPaginatorWrapper>
            </CommentsWrapper>
            }
        </CommentsContainer>
    );
}

export default Comments;

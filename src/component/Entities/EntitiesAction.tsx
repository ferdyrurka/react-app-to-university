import {Dispatch, FC, useCallback} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";
import SearchFollowed from "../Filters/SearchFollowed";
import {Followed} from "../../reducers/Comments/Followed";
import {Breakpoint} from "../../styledHelpers/Breakpoint";
import {CarouselFlex} from "../../styledHelpers/Components";
import {Sort} from "../../entities/Sort";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {findEntityItemsAction, sortEntityItemsAction} from "../../store/EntityItemsActions";
import {IEntityItem} from "../../entities/EntityItem";

const EntitiesActionContainer = styled(FlexColumn)`
  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const EntitiesActionLeftSection = styled(CarouselFlex)`
  align-items: center;
`;

const EntitiesActionStaticSection = styled(FlexRow)`
  border-right: 1px solid ${Colors.lightGrey};
  align-items: center;
  height: 38px;
  
  .hamburger-menu {
    margin-left: 10px;
    margin-right: 10px;
    
    i {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const EntitiesActionAllButton = styled.button`
  padding: 10px;
  color: #2A3F9D;
  font-weight: bold;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 5px;
  white-space: nowrap;
  
  i {
    &:nth-child(1) {
      margin-right: 7px;
    }
  }
  
  span {
    margin-right: 7px;
  }
`;

const EntitiesActionDataSection = styled(FlexRow)`
  border-right: 1px solid ${Colors.lightGrey};
  height: 38px;
  align-items: center;
  
  button {
    color: ${Colors.grey};
    background-color: transparent;
    border: none;
    white-space: nowrap;
    
    i {
      margin-right: 5px;
    }
  }
  
`;

const EntitiesActionFullScreen = styled(FlexRow)`
  border-right: 1px solid ${Colors.lightGrey};
  padding: 0 10px;
  height: 38px;
  align-items: center;
  color: ${Colors.grey};
  
  &:hover {
    cursor: pointer;
  }
`;

const EntitiesActionShare = styled(FlexRow)`
  height: 38px;
  align-items: center;
  
  button {
    background-color: transparent;
    border: none;
    color: ${Colors.grey};
    white-space: nowrap;

    span {
      margin-left: 8px;
    }
  }
`;

interface EntitiesActionProps {
    sourceEntityItems: IEntityItem[],
}

const EntitiesAction: FC<EntitiesActionProps> = props => {
    const dispatch: Dispatch<any> = useDispatch();

    let sort: Sort = useSelector(
        (state: IState) => state.entityItems.sort,
        shallowEqual
    );

    const changeFilterTitle = useCallback(
        () => {
            dispatch(findEntityItemsAction(
                props.sourceEntityItems,
                sort,
                (document.getElementById('filter_title') as HTMLInputElement)
            ));
        },
        [dispatch, sort, props.sourceEntityItems]
    );

    const changeSort = useCallback(() => {
        dispatch(sortEntityItemsAction(Sort.DESC === sort ? Sort.ASC : Sort.DESC))
    }, [dispatch, sort]);

    return (
        <EntitiesActionContainer>
            <EntitiesActionLeftSection>
                <EntitiesActionStaticSection>
                    <EntitiesActionAllButton>
                        <i className="bi bi-record-circle"/>
                        <span>All</span>
                        <i className="bi bi-caret-down-fill"/>
                    </EntitiesActionAllButton>

                    <div className="hamburger-menu">
                        <i className="bi bi-three-dots"/>
                    </div>
                </EntitiesActionStaticSection>
                <EntitiesActionDataSection>
                    <button onClick={changeSort}>
                        <i className="bi bi-sort-alpha-down"/>
                        <span>Sort</span>
                    </button>
                    <button>
                        <i className="bi bi-funnel"/>
                        <span>Filters</span>
                    </button>
                </EntitiesActionDataSection>
                <EntitiesActionFullScreen>
                    <i className="bi bi-arrows-fullscreen"/>
                </EntitiesActionFullScreen>
                <EntitiesActionShare>
                    <button>
                        <i className="bi bi-share"/>
                        <span>Share</span>
                    </button>
                </EntitiesActionShare>
            </EntitiesActionLeftSection>
            <SearchFollowed filterInputCallback={changeFilterTitle} followed={Followed.ALL} followedCallback={(newFollowed) => {}}/>
        </EntitiesActionContainer>
    );
}

export default EntitiesAction;

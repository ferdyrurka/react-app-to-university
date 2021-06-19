import React, {FC} from "react";
import {Followed} from "../../reducers/Comments/Followed";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";
import {Breakpoint} from "../../styledHelpers/Breakpoint";
import {SearchInput} from "../../styledHelpers/Components";
import {Colors} from "../../styledHelpers/Colors";
import {VoidCallbackFunction} from "../../tools/type";

const SearchFollowedWrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    flex-direction: row;
    width: 360px;
  }
`;

const FilterInput = styled(SearchInput)`
  width: 190px;

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    margin-top: 10px;
    width: 100%;
  }
`;

const FilterAction = styled.div`
  display: flex;
  align-items: center;
  color: #5D6DB4;
  cursor: pointer;
  margin-left: auto;
  margin-right: 20px;

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    margin: 10px 0 0 0;
  }

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

export type FollowedCallbackFunction = (newFollowed: Followed) => void;

interface SearchFollowedProps {
    filterInputCallback: VoidCallbackFunction,
    followed: string,
    followedCallback: FollowedCallbackFunction,
}

const SearchFollowed: FC<SearchFollowedProps> = props => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    return (
        <SearchFollowedWrapper ref={wrapperRef}>
            <FilterInput placeholder="Filter by title" id="filter_title" onInput={() => props.filterInputCallback()}/>
            <FilterAction onClick={!dropdownOpen ? toggleDropdown : closeDropdown}>
                <img className="signal-icon" src="/media/icons/ecosystem.png" alt="arrow down"/>
                <span>Followed</span>
                <img className="arrow-icon" src="/media/icons/arrow-down.png" alt="arrow down"/>
            </FilterAction>
            {dropdownOpen &&
            <FilterActionDropdownMenu>
                <FilterActionOption>
                    <span className={props.followed === Followed.MY ? 'active' : ''} onClick={() => props.followedCallback(Followed.MY)}>My</span>
                </FilterActionOption>
                <FilterActionOption>
                    <span className={props.followed === Followed.ALL ? 'active' : ''} onClick={() => props.followedCallback(Followed.ALL)}>All</span>
                </FilterActionOption>
            </FilterActionDropdownMenu>
            }
        </SearchFollowedWrapper>
    );
}

export default SearchFollowed;

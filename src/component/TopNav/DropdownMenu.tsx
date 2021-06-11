import React, {BaseSyntheticEvent, Dispatch, useCallback, useEffect} from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import {Colors} from "../../styledHelpers/Colors";
import {CenterItems, FlexRow} from "../../styledHelpers/Grid";
import {Breakpoint} from "../../styledHelpers/Breakpoint";
import {shallowEqual, useDispatch, useSelector } from "react-redux";
import {findItemsAction, reset} from "../../store/DropdownMenuItemsStore";
import {IState} from "../../reducers";
import {MenuSectionItems} from "../../reducers/DropdownMenu/MenuItems";
import DropdownMenuSectionItems from "./DropdownMenuSectionItems";

const DropdownMenuContainer = styled.div`
  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    min-width: 100px;
    max-width: 240px;
    width: 100%;
    order: 1;
  }

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    max-width: 25px;
    margin-right: 15px;
    order: 5;
  }
  
  cursor: pointer;
  position: relative;
`;

const DropdownMenuTopNavWrapper = styled.div`
  justify-content: space-between;
  align-items: center;

  .arrow-icon {
    width: 10px;
    height: 8px;
  }
  
  .icon {
    max-width: 25px;
    height: 23px;
    margin-right: 15px;
  }
`;

const DropdownMenuWrapper = styled.div`
  background-color: ${Colors.white};
  width: 280px;
  padding: 5px 0;
  margin-top: 4px;
  position: absolute;
  border-top: 1px solid ${Colors.lightGrey};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 9999;

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    left: 0;
  }

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    right: -15px;
  }
`;

const DropdownMenuFilter = styled.input`
  width: 238px;
  height: 30px;
  margin: 0 10px;
`;

const DropdownMenuLogoutWrapper = styled(FlexRow)`
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  margin-top: 10px;
  border-top: 1px solid ${Colors.lightGrey};
  
  .icon {
    margin-right: 20px;
    width: 20px;
    height: 15px;
  }
`;

function DropdownMenu() {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        if (!dropdownOpen) {
            dispatch(reset());
        }
    }, [dropdownOpen, dispatch]);

    let items: MenuSectionItems[] = useSelector(
        (state: IState) => state.items.items,
        shallowEqual
    );

    const findItems = useCallback(
        (input: BaseSyntheticEvent) => {
            dispatch(findItemsAction(input))
        },
        [dispatch]
    );

    return (
        <DropdownMenuContainer ref={wrapperRef}>
            <DropdownMenuTopNavWrapper onClick={!dropdownOpen ? toggleDropdown : closeDropdown} className="d-none d-md-flex">
                <CenterItems>
                    <img className="icon" src="/media/icons/house2.png" alt="home page"/>
                    <span>Home</span>
                </CenterItems>

                <img className="arrow-icon" src="/media/icons/arrow-down.png" alt="arrow down"/>
            </DropdownMenuTopNavWrapper>

            <DropdownMenuTopNavWrapper onClick={!dropdownOpen ? toggleDropdown : closeDropdown} className="d-flex d-md-none">
                <img className="icon" src="/media/icons/hamburger_menu.png" alt="menu"/>
            </DropdownMenuTopNavWrapper>

            {dropdownOpen &&
                <DropdownMenuWrapper>
                    <DropdownMenuFilter type="text" placeholder="Filter..." onInput={(event) => findItems(event)}/>

                    {items.map(
                        (itemsGroup: MenuSectionItems, index: number) => {
                            return (
                                <DropdownMenuSectionItems itemsGroup={itemsGroup} key={index.toString()}/>
                            );
                        }
                    )}

                    <DropdownMenuLogoutWrapper onClick={closeDropdown}>
                        <img className="icon" src="/media/icons/logout.png" alt="logout"/>
                        <span>Logout</span>
                    </DropdownMenuLogoutWrapper>
                </DropdownMenuWrapper>

            }
        </DropdownMenuContainer>
    );
}

export default DropdownMenu;
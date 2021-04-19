import React, {BaseSyntheticEvent, Dispatch, FC, useCallback} from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {CenterItems, FlexRow, FlexColumn} from "../../styledHelpers/Grid";
import {Link} from "../../styledHelpers/Components";
import { Breakpoint } from "../../styledHelpers/Breakpoint";
import {shallowEqual, useDispatch, useSelector } from "react-redux";
import {findItemsAction} from "../../store/DropdownMenuItemsStore";
import {IState} from "../../reducers";

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

const DropdownMenuIcon = styled.img`
  width: 25px;
  height: auto;
  margin-right: 15px;
`;

const DropdownMenuItemsWrapper = styled.div`
  padding: 0 10px;
  
  &:nth-child(3) {
    border-bottom: 1px solid ${Colors.lightGrey};
    padding-bottom: 5px;
  }
  
  .section-name {
    margin-top: 5px;

    span {
      font-size: ${FontSize["12"]};
      color: ${Colors.grey};
    }
  }
`;

const DropdownMenuItemWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  color: ${Colors.black};
  
  .description {
    color: ${Colors.blue};
    font-size: ${FontSize["14"]};
    margin-top: 5px;
  }
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

const DropdownMenu : FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    const dispatch: Dispatch<any> = useDispatch()

    let items: {title: string, items: {icon: string, title: string, href: string, description: string}[]}[] = useSelector(
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
                    <img className="icon" src="media/icons/house2.png" alt="home page"/>
                    <span>Home</span>
                </CenterItems>

                <img className="arrow-icon" src="media/icons/arrow-down.png" alt="arrow down"/>
            </DropdownMenuTopNavWrapper>

            <DropdownMenuTopNavWrapper onClick={!dropdownOpen ? toggleDropdown : closeDropdown} className="d-flex d-md-none">
                <img className="icon" src="media/icons/hamburger_menu.png" alt="menu"/>
            </DropdownMenuTopNavWrapper>

            {dropdownOpen &&
                <DropdownMenuWrapper>
                    <DropdownMenuFilter type="text" placeholder="Filter..." onInput={(event) => findItems(event)}/>

                    {items.map(
                        (itemGroup, index) => {
                            const title = itemGroup.title;

                            return (
                                <DropdownMenuItemsWrapper key={index}>
                                    <div className="section-name">
                                        <span>{title}</span>
                                    </div>

                                    {itemGroup.items.map(
                                        (item: { icon: string, title: string, href: string, description: string }, index: number) => {
                                            return (
                                                <DropdownMenuItemWrapper key={index} href={item.href}>
                                                    <DropdownMenuIcon src={item.icon} alt={item.title.toLowerCase()}/>

                                                    {item.description.length === 0 &&
                                                        <span>{item.title}</span>
                                                    }

                                                    {item.description.length > 0 &&
                                                        <FlexColumn>
                                                            <span>{item.title}</span>
                                                            <span className="description">{item.description}</span>
                                                        </FlexColumn>
                                                    }
                                                </DropdownMenuItemWrapper>
                                            );
                                        }
                                    )}
                                </DropdownMenuItemsWrapper>
                            );
                        }
                    )}
                    <DropdownMenuLogoutWrapper onClick={closeDropdown}>
                        <img className="icon" src="media/icons/logout.png" alt="logout"/>
                        <span>Logout</span>
                    </DropdownMenuLogoutWrapper>
                </DropdownMenuWrapper>

            }
        </DropdownMenuContainer>
    );
}

export default DropdownMenu;
import React from "react";
import styled from "styled-components";
import useDropdown from "react-dropdown-hook";
import {FlexRow} from "../../styledHelpers/Grid";

function DropdownMenu() {
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    const DropdownMenuContainer = styled.div`
      width: 200px;
    `;

    const DropdownMenuWrapper = styled(FlexRow)`
      justify-content: space-between;
      align-items: center;
    `;

    const DropdownMenuIcon = styled.img`
      width: 10px;
      height: 8px;
    `;

    return (
        <DropdownMenuContainer ref={wrapperRef}>
                <DropdownMenuWrapper onClick={toggleDropdown}>
                    <span>Home</span>
                    <DropdownMenuIcon src="media/icons/arrow-down.png" alt="arrow down"/>
                </DropdownMenuWrapper>
                {dropdownOpen &&
                    <>
                        {<div onClick={closeDropdown}>Close menu after this click</div>}
                    </>
                }
        </DropdownMenuContainer>
    );
}

export default DropdownMenu;
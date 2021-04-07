import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import Search from "./Search";
import {TopNavIcon} from "./Shared";

function Menu() {
    const TopNavMenuWrapper = styled.div`
      display: flex;
      align-items: center;
      width: 100%;

      .logo {
        margin: 0 15px;
        max-width: 36px;
        max-height: 36px;
      }
    `;

    return (
        <TopNavMenuWrapper>
            <img className="logo" src="media/logo.png" alt="app"/>
            <TopNavIcon href="/">
                <img src="media/icons/house2.png" alt="home page"/>
            </TopNavIcon>
            <DropdownMenu/>

            <Search/>
        </TopNavMenuWrapper>
    );
}

export default Menu;
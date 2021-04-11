import React from "react";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import Search from "./Search";

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


function Menu() {
    return (
        <TopNavMenuWrapper>
            <img className="logo" src="media/logo.png" alt="app"/>
            <DropdownMenu/>

            <Search/>
        </TopNavMenuWrapper>
    );
}

export default Menu;
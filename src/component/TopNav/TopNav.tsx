import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import Notification from "./Notification";
import DropdownMenu from "./DropdownMenu";
import Search from "./Search";
import { Breakpoint } from "../../styledHelpers/Breakpoint";

const TopNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  background-color: ${Colors.white};
  box-shadow: 0 7px 7px -2px ${Colors.grey};

  .logo {
    @media only screen and (min-width: ${Breakpoint["tablet"]}) {
      margin: 0 15px;
    }

    margin: 0 5px;
    max-width: 36px;
    max-height: 36px;
    order: 0;
  }
`;

function TopNav() {
    return (
        <TopNavContainer>
            <a href="/"><img className="logo" src="media/logo.png" alt="app"/></a>
            <DropdownMenu/>
            <Search/>
            <Notification/>
        </TopNavContainer>
    );
}

export default TopNav;
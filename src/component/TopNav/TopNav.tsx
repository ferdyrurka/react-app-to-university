import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import Menu from "./Menu";
import Notification from "./Notification";

const TopNavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  background-color: ${Colors.white};
  box-shadow: 0 7px 7px -2px ${Colors.grey};
`;

function TopNav() {
    return (
        <TopNavContainer>
            <Menu/>
            <Notification/>
        </TopNavContainer>
    );
}

export default TopNav;
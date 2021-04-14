import React from "react";
import styled from "styled-components";
import {FlexColumn} from "../../styledHelpers/Grid";
import PersonalData from "./PersonalData";
import Action from "./Action";
import Menu from "./Menu";
import { Breakpoint } from "../../styledHelpers/Breakpoint";

const LeftMenuContainer = styled.div`
  min-width: 300px;
  
  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    max-width: 600px;
    margin: 0 auto 15px auto;
  }

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    max-width: 320px;
  }
`;

const AccountWrapper = styled(FlexColumn)`
  background: #fff;
  border-radius: 5px;
`;

function LeftMenu() {
    return (
        <LeftMenuContainer>
            <AccountWrapper>
                <PersonalData/>
                <Action/>
            </AccountWrapper>

            <Menu/>
        </LeftMenuContainer>
    );
}

export default LeftMenu;

import React from "react";
import styled from "styled-components";
import {FlexColumn} from "../../styledHelpers/Grid";
import PersonalData from "./PersonalData";
import Action from "./Action";
import Menu from "./Menu";

function LeftMenu() {
    const LeftMenuContainer = styled.div`
      margin-left: 20px;
      margin-top: 15px;
      width: 250px;
    `;

    const AccountWrapper = styled(FlexColumn)`
      background: #fff;
      border-radius: 5px;
    `;

    return (
        <LeftMenuContainer>
            <AccountWrapper>
                <PersonalData />
                <Action />
            </AccountWrapper>

            <Menu />
        </LeftMenuContainer>
    );
}

export default LeftMenu;

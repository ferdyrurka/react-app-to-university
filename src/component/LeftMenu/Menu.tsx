import React from "react";
import styled from "styled-components";
import {FlexColumn} from "../../styledHelpers/Grid";
import {Link} from "../../styledHelpers/Components";
import {Colors} from "../../styledHelpers/Colors";

const LeftMenuWrapper = styled(FlexColumn)`
  margin: 5px 0 0 20px;
`;

const LeftMenuItemWrapper = styled.div`
  margin-top: 20px;
`;

const LeftMenuItem = styled(Link)`
  display: flex;
  align-items: center;

  span {
    color: #60677A;
    transition: 0.2s ease-in-out;

    &:hover {
      color: ${Colors.darkGrey};
      transition: 0.2s ease-in-out;
    }
  }

  .logo {
    margin-right: 15px;
    width: 30px;
    height: auto;
  }
`;

function Menu() {
    return (
        <LeftMenuWrapper className="d-none d-md-block">
            <LeftMenuItemWrapper>
                <LeftMenuItem href="/test">
                    <img className="logo" src="media/icons/publications.png" alt="Publications"/>
                    <span>Publications</span>
                </LeftMenuItem>
            </LeftMenuItemWrapper>
            <LeftMenuItemWrapper>
                <LeftMenuItem href="/test">
                    <img className="logo" src="media/icons/ecosystem.png" alt="Ecosystem"/>
                    <span>Ecosystem</span>
                </LeftMenuItem>
            </LeftMenuItemWrapper>
            <LeftMenuItemWrapper>
                <LeftMenuItem href="/test">
                    <img className="logo" src="media/icons/entities2.png" alt="Entities"/>
                    <span>Entities</span>
                </LeftMenuItem>
            </LeftMenuItemWrapper>
        </LeftMenuWrapper>
    );
}

export default Menu;

import React from "react";
import styled from "styled-components";
import {FlexColumn} from "../../styledHelpers/Grid";
import {Link} from "../../styledHelpers/Components";
import {Colors} from "../../styledHelpers/Colors";

function Menu() {
    const MenuWrapper = styled(FlexColumn)`
      margin: 5px 0 0 20px;
    `;

    const MenuItemWrapper = styled.div`
      margin-top: 15px;
    `;

    const MenuItem = styled(Link)`
      &:hover {
        span {
          color: ${Colors.darkGrey};
          transition: 0.2s ease-in-out;
        }
      }

      span {
        color: #60677A;
        vertical-align: super;
        transition: 0.2s ease-in-out;
      }

      .logo {
        margin-right: 15px;
        width: 25px;
        height: auto;
      }
    `;

    return (
        <MenuWrapper>
            <MenuItemWrapper>
                <MenuItem href="/test">
                    <img className="logo" src="media/icons/publications.png" alt="Publications"/>
                    <span>Publications</span>
                </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
                <MenuItem href="/test">
                    <img className="logo" src="media/icons/ecosystem.png" alt="Ecosystem"/>
                    <span>Ecosystem</span>
                </MenuItem>
            </MenuItemWrapper>
            <MenuItemWrapper>
                <MenuItem href="/test">
                    <img className="logo" src="media/icons/entities2.png" alt="Entities"/>
                    <span>Entities</span>
                </MenuItem>
            </MenuItemWrapper>
        </MenuWrapper>
    );
}

export default Menu;

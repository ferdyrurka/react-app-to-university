import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";

const ActionContainer = styled(FlexColumn)`
  border-top: solid 1px ${Colors.lightGrey};
  padding-top: 10px;
`;

const ActionWrapper = styled(FlexRow)`
  margin-bottom: 10px;
  align-items: center;

  .title {
    color: ${Colors.darkGrey};
  }

  .logo {
    width: 25px;
    height: auto;
    margin: 0 5px 0 20px;
  }
`;

const ActionButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  border-width: 1px;
  border-color: #4B5268;
  padding: 4px 8px 1px 8px;
  margin-left: auto;
  margin-right: 15px;

  .btn-img {
    width: 14px;
    height: 14px;
  }
`;

function Action() {
    return (
        <ActionContainer>
            <ActionWrapper>
                <img className="logo" src="/media/icons/network.png" alt="Your network"/>
                <span>Your network</span>
                <ActionButton>
                    <img className="btn-img" src="/media/icons/user-plus.png" alt="Add user"/>
                </ActionButton>
            </ActionWrapper>
            <ActionWrapper>
                <img className="logo" src="/media/icons/publications.png" alt="Your publications"/>
                <span>Your Publications</span>
                <ActionButton>
                    <img className="btn-img" src="/media/icons/plus.png" alt="Add publication"/>
                </ActionButton>
            </ActionWrapper>
        </ActionContainer>
    );
}

export default Action;

import React from "react";
import styled from "styled-components";
import { Breakpoint } from "../../styledHelpers/Breakpoint";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";

const TopNavNotificationWrapper = styled.div`
  display: flex;
  align-items: center;
  order: 3;

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    margin: 0 25px 0 auto;
    padding-left: 15px;
  }

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    margin: 0 5px 0 auto;
    padding-left: 5px;
  }
`;

const TopNavIcon = styled.a`
  img {
    max-width: 25px;
    height: 23px;
    margin-right: 15px;
  }
`;


const TopNavCircleIcon = styled(TopNavIcon)`
  width: 42px;
  height: 42px;
  background-color: #E8E8E8;
  border-radius: 50%;
  position: relative;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 0;
  }
`;

const TopNavBadge = styled.div`
  width: 18px;
  height: 12px;
  top: 0;
  right: 0;
  position: absolute;
  background-color: ${Colors.lightBlue};
  border-radius: 50%;
  font-size: ${FontSize[10]};
  color: ${Colors.white};
  line-height: normal;
  text-align: center;
`;

function Notification() {
    return (
        <TopNavNotificationWrapper>
            <TopNavIcon href="/" className="d-none d-md-block">
                <img src="/media/icons/house.png" alt="home page"/>
            </TopNavIcon>
            <TopNavCircleIcon href="/test">
                <img src="/media/icons/comments.png" alt="home page"/>
                <TopNavBadge>3</TopNavBadge>
            </TopNavCircleIcon>
            <TopNavCircleIcon href="/test">
                <img src="/media/icons/bell.png" alt="home page"/>
                <TopNavBadge>3</TopNavBadge>
            </TopNavCircleIcon>
        </TopNavNotificationWrapper>
    );
}

export default Notification;
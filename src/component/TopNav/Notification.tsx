import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {fontSize} from "../../styledHelpers/FontSizes";
import {TopNavIcon} from "./Shared";

function Notification() {
    const TopNavNotificationWrapper = styled.div`
      display: flex;
      align-items: center;
      margin: 0 25px 0 15px;
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
      font-size: ${fontSize[10]};
      color: ${Colors.white};
      line-height: normal;
      text-align: center;
    `;

    return (
        <TopNavNotificationWrapper>
            <TopNavIcon href="/">
                <img src="media/icons/house2.png" alt="home page"/>
            </TopNavIcon>
            <TopNavCircleIcon href="/test">
                <img src="media/icons/comments.png" alt="home page"/>
                <TopNavBadge>3</TopNavBadge>
            </TopNavCircleIcon>
            <TopNavCircleIcon href="/test">
                <img src="media/icons/bell.png" alt="home page"/>
                <TopNavBadge>3</TopNavBadge>
            </TopNavCircleIcon>
        </TopNavNotificationWrapper>
    );
}

export default Notification;
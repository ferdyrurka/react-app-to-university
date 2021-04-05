import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";

function LeftMenu() {
    const AccountWrapper = styled(FlexColumn)`
      background: #fff;
      border-radius: 5px;
      width: 250px;
      margin-left: 20px;
      margin-top: 15px;
    `;

    const PersonalDataWrapper = styled.div`
      padding: 5px;
      
      h2 {
        font-weight: bold;
        color: ${Colors.blue};
        text-align: center;
      }

      .job-title-wrapper {
        margin-top: 10px;
        margin-bottom: 15px;
        text-align: center;

        span {
          color: ${Colors.grey};
        }
      }
    `;

    const ActionWrapper = styled(FlexColumn)`
      border-top: solid 1px ${Colors.lightGrey};
      padding-top: 10px;
    `;

    const Action = styled(FlexRow)`
      margin-bottom: 10px;
      align-items: center;

      .title {
        color: ${Colors.darkGrey};
      }

      .btn {
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
      }

      .logo {
        width: 30px;
        height: 30px;
        margin: 0 15px;
      }
    `;

    return (
        <AccountWrapper>
            <PersonalDataWrapper>
                <h2>Humberta Swift</h2>

                <div className="job-title-wrapper">
                    <span>Job title - Company</span>
                </div>
            </PersonalDataWrapper>
            <ActionWrapper>
                <Action>
                    <img className="logo" src="media/icons/network.png" alt="Your network"/>
                    <span>Your network</span>
                    <button className="btn">
                        <img className="btn-img" src="media/icons/user-plus.png" alt="Add user"/>
                    </button>
                </Action>
                <Action>
                    <img className="logo" src="media/icons/publications.png" alt="Your publications"/>

                    <span>Your Publications</span>

                    <button className="btn">
                        <img className="btn-img" src="media/icons/plus.png" alt="Add publication"/>
                    </button>
                </Action>
            </ActionWrapper>
        </AccountWrapper>
    );
}

export default LeftMenu;

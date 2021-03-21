import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

function LeftMenu() {
    const AccountWrapper = styled.div`
        background: #fff;
        display: flex;
        justify-content: center;
        padding: 5px;
        border-radius: 5px;
        width: 320px;
    `;

    const PersonalDataWrapper = styled.div`
        h3 {
            font-weight: bold;
            color: ${Colors.blue};
        }
        
        span {
            color: ${Colors.grey};
        }
    `;

    return (
        <AccountWrapper>
            <PersonalDataWrapper>
                <h3>Humberta Swift</h3>

                <span>Job title - Company</span>
            </PersonalDataWrapper>
        </AccountWrapper>
    );
}

export default LeftMenu;

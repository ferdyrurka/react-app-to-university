import React from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

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


function PersonalData() {
    return (
        <PersonalDataWrapper>
            <h2>Humberta Swift</h2>

            <div className="job-title-wrapper">
                <span>Job title - Company</span>
            </div>
        </PersonalDataWrapper>
    );
}

export default PersonalData;

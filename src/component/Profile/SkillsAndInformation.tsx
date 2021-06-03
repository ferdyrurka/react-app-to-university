import styled from "styled-components";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";
import {Colors} from "../../styledHelpers/Colors";
import {EditIcon} from "../../styledHelpers/Components";
import React from "react";

const SkillsAndInformationContainer = styled(FlexColumn)`
  padding-top: 15px;
  padding-bottom: 5px;
  position: relative;
  
  border-top: ${Colors.lightGrey} 1px solid;
`;

const SkillsAndInformationWrapper = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  
  h2 {
    width: 100%;
    margin-bottom: 5px;
    color: ${Colors.grey};
  }
`;

const SkillsAndInformationItem = styled(FlexRow)`
  flex-wrap: wrap;

  div {
    padding: 3px 6px;
    background-color: #E6F0F3;
    border-radius: 3px;
    color: #6BA9B8;
    margin-top: 5px;
    
    margin-right: 10px;
  }
`;

function SkillsAndInformation() {
    return (
        <SkillsAndInformationContainer>
            <EditIcon>
                <i className="bi bi-pencil"/>
            </EditIcon>

            <SkillsAndInformationWrapper>
                <h2>Expertise</h2>

                <SkillsAndInformationItem>
                    <div><span>Mergers and acquisition</span></div>
                </SkillsAndInformationItem>
            </SkillsAndInformationWrapper>

            <SkillsAndInformationWrapper>
                <h2>Specialities</h2>

                <SkillsAndInformationItem>
                    <div><span>Cross border operation</span></div>
                    <div><span>Transaction over 500m&/$</span></div>
                </SkillsAndInformationItem>
            </SkillsAndInformationWrapper>

            <SkillsAndInformationWrapper>
                <h2>Admission to practice law</h2>

                <SkillsAndInformationItem>
                    <div><span>Paris bar association</span></div>
                    <div><span>Tunisian bar association</span></div>
                </SkillsAndInformationItem>
            </SkillsAndInformationWrapper>

            <SkillsAndInformationWrapper>
                <h2>Countries</h2>

                <SkillsAndInformationItem>
                    <div><span>Tunisia</span></div>
                </SkillsAndInformationItem>
            </SkillsAndInformationWrapper>
        </SkillsAndInformationContainer>
    );
}

export default SkillsAndInformation;

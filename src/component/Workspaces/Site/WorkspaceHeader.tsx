import React, {FC} from "react";
import {Item} from "../WorkspaceItems";
import styled from "styled-components";
import {FlexColumn, FlexRow} from "../../../styledHelpers/Grid";
import {Colors} from "../../../styledHelpers/Colors";
import {FontSize} from "../../../styledHelpers/FontSizes";
import {Breakpoint} from "../../../styledHelpers/Breakpoint";

const WorkspaceHeaderContainer = styled(FlexColumn)`
  
`;

const WorkspaceHeaderImage = styled.img`
  width: 100%;
  height: 120px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const WorkspaceBasicInformationWrapper = styled(FlexRow)`
  background-color: ${Colors.white};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 20px 15px;
  align-items: center;
  position: relative;
`;

const WorkspaceIcon = styled.img`
  max-width: 35px;
  height: 50px;
  display: block;

  @media only screen and (max-width: ${Breakpoint["tablet"]}) {
    display: none;
  }
`;

const AboutWorkspace = styled.div`
  margin-left: 15px;
  
  h1 {
    margin-bottom: 15px;
    color: ${Colors.darkBlue};
    font-size: ${FontSize["20"]};
    font-weight: bold;
  }
  
  p {
    color: ${Colors.grey};
    font-size: ${FontSize["14"]};
  }
`;

const WorkspaceEditIcon = styled.img`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 16px;
  height: auto;
`;

interface WorkspaceHeaderProps {
    workspace: Item,
}

const WorkspaceHeader: FC<WorkspaceHeaderProps> = props => {
    return (
        <WorkspaceHeaderContainer>
            <WorkspaceHeaderImage src={props.workspace.headerImageUrl}/>
            <WorkspaceBasicInformationWrapper>
                <WorkspaceEditIcon src="/media/icons/cog.png" alt="edit"/>
                <WorkspaceIcon src={props.workspace.imagUrl} alt={props.workspace.type}/>
                <AboutWorkspace>
                    <h1>{props.workspace.title}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus feugiat faucibus.
                        In blandit erat massa, sed pharetra orci sollicitudin at. Quisque consectetur sed neque vitae efficitur.
                    </p>
                </AboutWorkspace>
            </WorkspaceBasicInformationWrapper>
        </WorkspaceHeaderContainer>
    );
}

export default WorkspaceHeader;
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import WorkspaceItem from "./WorkspaceItem";
import {FlexRow} from "../../styledHelpers/Grid";

const WorkspacesContainer = styled.div`

`;

const WorkspacesTitle = styled.h1`
  color: ${Colors.darkBlue};
  margin: 20px 0 15px 15px;
  font-size: ${FontSize["22"]};
  font-weight: 700;
`;

const WorkspacesItemsWrapper = styled(FlexRow)`
  overflow-x: scroll;
  flex-wrap: nowrap;
  
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const Workspaces = function () {
    return (
        <WorkspacesContainer>
            <WorkspacesTitle>Workspaces</WorkspacesTitle>

            <WorkspacesItemsWrapper>
                <WorkspaceItem
                    title="Client contract client contract client contract"
                    backgroundImageUrl="https://via.placeholder.com/240x80/0000FF/808080"
                    imagUrl="/media/icons/house2.png"
                    smallImageUrl="/media/icons/house.png"
                    type="Contract"
                    updateDate="Last update 2 days ago"
                    usersCount={150}
                />

                <WorkspaceItem
                    title="Client contract client contract client contract"
                    backgroundImageUrl="https://via.placeholder.com/240x80/0000FF/808080"
                    imagUrl="/media/icons/house2.png"
                    smallImageUrl="/media/icons/house.png"
                    type="Contract"
                    updateDate="Last update 2 days ago"
                    usersCount={150}
                />
            </WorkspacesItemsWrapper>
        </WorkspacesContainer>
    );
}

export default Workspaces;

import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import WorkspaceItem from "./WorkspaceItem";
import {Item, ITEMS} from "./WorkspaceItems";
import {Carousel} from "../../styledHelpers/Components";

const WorkspacesContainer = styled.div`

`;

const WorkspacesTitle = styled.h1`
  color: ${Colors.darkBlue};
  margin: 20px 0 15px 15px;
  font-size: ${FontSize["22"]};
  font-weight: 700;
`;

const Workspaces = function () {
    return (
        <WorkspacesContainer>
            <WorkspacesTitle>Workspaces</WorkspacesTitle>

            <Carousel>
                {ITEMS.map((item: Item, index: number) => {
                        return (
                            <WorkspaceItem
                                title={item.title}
                                backgroundImageUrl={item.backgroundImageUrl}
                                imagUrl={item.imagUrl}
                                smallImageUrl={item.smallImageUrl}
                                type={item.type}
                                updateDate="Last update 2 days ago"
                                usersCount={150}
                                key={index}
                            />
                        );
                    }
                )}
            </Carousel>
        </WorkspacesContainer>
    );
}

export default Workspaces;

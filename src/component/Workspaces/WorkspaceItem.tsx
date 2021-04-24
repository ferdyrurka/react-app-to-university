import {FC} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FlexRow} from "../../styledHelpers/Grid";
import {FontSize} from "../../styledHelpers/FontSizes";

const WorkspaceItemDataWrapper = styled.div`
  height: 110px;
  background-color: ${Colors.white};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  padding: 10px;;
`;

const WorkspaceItemTypeBigIcon = styled(FlexRow)`
  -webkit-box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.5);
  background-color: ${Colors.white};
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;
  border-radius: 5px;
  top: -25px;
  left: 10px;
  position: absolute;

  img {
    height: 50px;
    width: auto;
    max-width: 50px;
  }
`;

const WorkspaceItemTitle = styled.div`
  margin-left: 85px;
  height: 53px;
  font-size: ${FontSize["16"]};
  
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const WorkspaceItemShortData = styled(FlexRow)`
  margin-bottom: 8px;
  
  .single-data {
    width: 50%;

    span {
      color: ${Colors.grey};
      font-size: ${FontSize["12"]};
    }
    
    img {
      height: 13px;
      max-width: 18px;
      margin-right: 10px;
    }
  }
`;

const WorkspaceItemDate = styled.div`
  span {
    color: ${Colors.grey};
    font-size: ${FontSize["10"]};
  }
`;

export interface WorkspaceProps {
    title: string,
    backgroundImageUrl: string,
    imagUrl: string,
    smallImageUrl: string,
    type: string,
    updateDate: string,
    usersCount: number,
}

const WorkspaceItem: FC<WorkspaceProps> = props => {
    const WorkspaceItemWrapper = styled.div`
      width: 240px;
      min-width: 240px;
      height: 195px;
      margin-right: 8px;

      .background-image-wrapper {
        background-image: url("${props.backgroundImageUrl}");
        height: 80px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
    `;

    return (
        <WorkspaceItemWrapper>
            <div className="background-image-wrapper"></div>
            <WorkspaceItemDataWrapper>
                <WorkspaceItemTypeBigIcon>
                    <img src={props.imagUrl} alt={props.type}/>
                </WorkspaceItemTypeBigIcon>

                <WorkspaceItemTitle>
                    <h3>{props.title}</h3>
                </WorkspaceItemTitle>

                <WorkspaceItemShortData>
                    <div className="single-data">
                        <img src={props.smallImageUrl} alt={props.type}/>
                        <span>Contract</span>
                    </div>

                    <div className="single-data">
                        <img src="/media/icons/people.png" alt="users"/>
                        <span>{props.usersCount} users</span>
                    </div>
                </WorkspaceItemShortData>

                <WorkspaceItemDate>
                    <span>{props.updateDate}</span>
                </WorkspaceItemDate>
            </WorkspaceItemDataWrapper>
        </WorkspaceItemWrapper>
    );
}

export default WorkspaceItem;

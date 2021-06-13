import {FC} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FlexRow} from "../../styledHelpers/Grid";

const EntitiesActionContainer = styled(FlexRow)`

`;

const EntitiesActionLeftSection = styled(FlexRow)`
  align-items: center;
`;

const EntitiesActionStaticSection = styled(FlexRow)`
  border-right: 1px solid ${Colors.lightGrey};
  align-items: center;
  height: 38px;
  
  .hamburger-menu {
    margin-left: 10px;
    margin-right: 10px;
    
    i {
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const EntitiesActionAllButton = styled.button`
  padding: 10px;
  color: #2A3F9D;
  font-weight: bold;
  border: 1px solid ${Colors.lightGrey};
  border-radius: 5px;
  
  i {
    &:nth-child(1) {
      margin-right: 7px;
    }
  }
  
  span {
    margin-right: 7px;
  }
`;

const EntitiesActionDataSection = styled(FlexRow)`
  border-right: 1px solid ${Colors.lightGrey};
  height: 38px;
  align-items: center;
  
  button {
    color: ${Colors.grey};
    background-color: transparent;
    border: none;
    
    i {
      margin-right: 5px;
    }
  }
  
`;

const EntitiesActionFullScreen = styled(FlexRow)`
  border-right: 1px solid ${Colors.lightGrey};
  padding: 0 10px;
  height: 38px;
  align-items: center;
  color: ${Colors.grey};
  
  &:hover {
    cursor: pointer;
  }
`;

const EntitiesActionShare = styled(FlexRow)`
  height: 38px;
  align-items: center;
  
  button {
    background-color: transparent;
    border: none;
    color: ${Colors.grey};

    span {
      margin-left: 8px;
    }
  }
`;

interface EntitiesActionProps {
}

const EntitiesAction: FC<EntitiesActionProps> = props => {
    return (
        <EntitiesActionContainer>
            <EntitiesActionLeftSection>
                <EntitiesActionStaticSection>
                    <EntitiesActionAllButton>
                        <i className="bi bi-record-circle"/>
                        <span>All</span>
                        <i className="bi bi-caret-down-fill"/>
                    </EntitiesActionAllButton>

                    <div className="hamburger-menu">
                        <i className="bi bi-three-dots"/>
                    </div>
                </EntitiesActionStaticSection>
                <EntitiesActionDataSection>
                    <button>
                        <i className="bi bi-sort-alpha-down"/>
                        <span>Sort</span>
                    </button>
                    <button>
                        <i className="bi bi-funnel"/>
                        <span>Filters</span>
                    </button>
                </EntitiesActionDataSection>
                <EntitiesActionFullScreen>
                    <i className="bi bi-arrows-fullscreen"/>
                </EntitiesActionFullScreen>
                <EntitiesActionShare>
                    <button>
                        <i className="bi bi-share"/>
                        <span>Share</span>
                    </button>
                </EntitiesActionShare>
            </EntitiesActionLeftSection>
        </EntitiesActionContainer>
    );
}

export default EntitiesAction;

import {Dispatch, FC, SetStateAction} from "react";
import styled from "styled-components";
import {FlexRow} from "../../styledHelpers/Grid";
import {FontSize} from "../../styledHelpers/FontSizes";
import {Colors} from "../../styledHelpers/Colors";
import {LIST, MOSAIC} from "./ListingType";

const EntitiesHeaderContainer = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 15px;
`;

const EntitiesHeaderTitle = styled(FlexRow)`
  align-items: center;
  
  h1 {
    font-weight: bold;
    font-size: ${FontSize["20"]};
    color: ${Colors.darkBlue};
  }
  
  i {
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const EntitiesListingTypeWrapper = styled.div`
  .active {
    background-color: #EAECF5;
  }

  .not-active {
    background-color: transparent;
  }
  
  button {
    &:nth-child(1) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      
      border-right: 0;
    }

    &:nth-child(2) {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
`;

const EntitiesHeaderButton = styled.button`
  padding: 10px;
  color: #2A3F9D;
  font-weight: bold;
  border: 1px solid ${Colors.lightGrey};
  
  span {
    margin-left: 10px;
  }
`;

interface EntitiesHeaderProps {
    listingType: string,
    setListingType: Dispatch<SetStateAction<string>>,
}

const EntitiesHeader: FC<EntitiesHeaderProps> = props => {
    return (
        <EntitiesHeaderContainer>
            <EntitiesHeaderTitle>
                <h1>Entities</h1>
                <i className="bi bi-pencil"/>
            </EntitiesHeaderTitle>

            <EntitiesListingTypeWrapper>
                <EntitiesHeaderButton onClick={() => props.setListingType(MOSAIC)}
                                      className={props.listingType === MOSAIC ? 'active' : 'not-active'}
                >
                    <i className="bi bi-border-all"/>
                    {props.listingType === MOSAIC &&
                    <span>Mosaic</span>
                    }
                </EntitiesHeaderButton>
                <EntitiesHeaderButton onClick={() => props.setListingType(LIST)}
                                      className={props.listingType === LIST ? 'active' : 'not-active'}
                >
                    <i className="bi bi-list"/>
                    {props.listingType === LIST &&
                    <span>List</span>
                    }
                </EntitiesHeaderButton>
            </EntitiesListingTypeWrapper>
        </EntitiesHeaderContainer>
    );
}

export default EntitiesHeader;

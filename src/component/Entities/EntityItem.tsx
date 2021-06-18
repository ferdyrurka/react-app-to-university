import {FC} from "react";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {FontSize} from "../../styledHelpers/FontSizes";
import {FlexColumn, FlexRow} from "../../styledHelpers/Grid";
import {IEntityItem} from "../../entities/EntityItem";
import {MOSAIC} from "./ListingType";

const EntityItemDataWrapper = styled(FlexColumn)`
  overflow-y: hidden;
  padding: 5px;

  h2 {
    color: ${Colors.blue};
    font-size: ${FontSize["18"]};
    margin-bottom: 10px;
  }

  span {
    color: ${Colors.grey};
    font-size: ${FontSize["12"]};
  }
`;

const EntityItemImage = styled.img`
  width: 90px;
  height: 90px;
`;

const EntityItemContainer = styled(FlexRow)`
  -webkit-box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.5);
  box-shadow: 10px 10px 40px -10px rgba(0, 0, 0, 0.5);

  height: 90px;
  flex-basis: 100%;
  margin-right: 0;
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: 15px;
`;

interface EntityItemProps {
    entity: IEntityItem,
    listingType: string,
}

const EntityItem: FC<EntityItemProps> = props => {
    return (
        <EntityItemContainer className={props.listingType === MOSAIC ? 'mosaic' : ''}>
            <EntityItemImage src={props.entity.photo} alt={props.entity.name}/>
            <EntityItemDataWrapper>
                <h2>{props.entity.name}</h2>
                <span>Caracas 1050, Distrito Capital, Venezuela</span>
            </EntityItemDataWrapper>
        </EntityItemContainer>
    );
}

export default EntityItem;

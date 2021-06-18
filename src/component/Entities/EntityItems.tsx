import {FC} from "react";
import styled from "styled-components";
import {FlexRow} from "../../styledHelpers/Grid";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import EntityItem from "./EntityItem";
import {IEntityItemsReducer} from "../../reducers/EntityItems/EntityItemsReducer";
import {Breakpoint} from "../../styledHelpers/Breakpoint";

const EntityItemsContainer = styled(FlexRow)`
  margin-top: 20px;
  flex-wrap: wrap;

  @media only screen and (min-width: ${Breakpoint["tablet"]}) {
    .mosaic {
      flex-basis: calc(33% - 10px);
      min-width: 250px;
      margin-right: 10px;

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`;

interface EntityItemsProps {
    listingType: string,
}

const EntityItems: FC<EntityItemsProps> = props => {
    let entityItemsReducer: IEntityItemsReducer = useSelector(
        (state: IState) => state.entityItems,
        shallowEqual
    );

    return (
        <EntityItemsContainer>
            {
                entityItemsReducer.entityItems.map((item, index) => {
                   return (
                       <EntityItem entity={item} key={index} listingType={props.listingType}/>
                   )
                })
            }
        </EntityItemsContainer>
    )
}


export default EntityItems;
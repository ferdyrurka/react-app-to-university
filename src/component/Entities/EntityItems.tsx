import {FC} from "react";
import styled from "styled-components";
import {FlexRow} from "../../styledHelpers/Grid";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import EntityItem from "./EntityItem";
import {IEntityItemsReducer} from "../../reducers/EntityItems/EntityItemsReducer";

const EntityItemsContainer = styled(FlexRow)`
  margin-top: 20px;
  flex-wrap: wrap;
`;

interface EntityItemsProps {}

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
                       <EntityItem entity={item} key={index}/>
                   )
                })
            }
        </EntityItemsContainer>
    )
}


export default EntityItems;
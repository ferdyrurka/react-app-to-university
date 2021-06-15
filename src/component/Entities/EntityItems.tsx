import {FC, useEffect} from "react";
import styled from "styled-components";
import {FlexRow} from "../../styledHelpers/Grid";
import {IPhoto} from "../../entities/Photo";
import {shallowEqual, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {findFirstThirtyEntityItems} from "../../actions/EntityItemsAction";
import EntityItem from "./EntityItem";
import {fetchLatestPhotos} from "../../actions/PhotoAction";
import {Sort} from "../../entities/Sort";

const EntityItemsContainer = styled(FlexRow)`
  margin-top: 20px;
  flex-wrap: wrap;
`;

interface EntityItemsProps {
    sort: Sort,
}

const EntityItems: FC<EntityItemsProps> = props => {
    useEffect(() => {
        fetchLatestPhotos();
    }, [])

    let photos: IPhoto[] = useSelector(
        (state: IState) => state.photos.photos,
        shallowEqual
    );

    const entityItems = findFirstThirtyEntityItems(photos, props.sort);

    return (
        <EntityItemsContainer>
            {
                entityItems.map((item, index) => {
                   return (
                       <EntityItem entity={item} key={index}/>
                   )
                })
            }
        </EntityItemsContainer>
    )
}


export default EntityItems;
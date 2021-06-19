import EntitiesHeader from "../../component/Entities/EntitiesHeader";
import {useEffect, useState} from "react";
import {MOSAIC} from "../../component/Entities/ListingType";
import EntitiesAction from "../../component/Entities/EntitiesAction";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import EntityItems from "../../component/Entities/EntityItems";
import {fetchLatestPhotos} from "../../actions/PhotoAction";
import {findFirstThirtyEntityItems} from "../../actions/EntityItemsAction";
import {IEntityItem} from "../../entities/EntityItem";
import EntitiesFilter from "../../component/Entities/EntitiesFilter";

const EntitiesContainer = styled.div`
  background-color: ${Colors.white};
  padding: 10px 20px;
  border-radius: 5px;
`;

function Entities() {
    const [entityItems, setEntityItems] = useState<IEntityItem[]>([]);

    useEffect(() => {
        fetchLatestPhotos().then((response) => {
            setEntityItems(findFirstThirtyEntityItems(response));
        });
    }, [])

    const [listingType, setListingType] = useState<string>(MOSAIC);
    const [filterOpen, setFilterOpen] = useState<boolean>(false);

    return (
        <EntitiesContainer>
            <EntitiesHeader listingType={listingType} setListingType={setListingType}/>
            <EntitiesAction sourceEntityItems={entityItems} setFilterOpen={setFilterOpen} filterOpen={filterOpen}/>
            {filterOpen &&
            <EntitiesFilter/>
            }
            <EntityItems listingType={listingType}/>
        </EntitiesContainer>
    );
}

export default Entities;

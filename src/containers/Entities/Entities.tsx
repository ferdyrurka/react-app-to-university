import EntitiesHeader from "../../component/Entities/EntitiesHeader";
import {useState} from "react";
import {MOSAIC} from "../../component/Entities/ListingType";
import EntitiesAction from "../../component/Entities/EntitiesAction";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import EntityItems from "../../component/Entities/EntityItems";
import {Sort} from "../../entities/Sort";

const EntitiesContainer = styled.div`
  background-color: ${Colors.white};
  padding: 10px 20px;
  border-radius: 5px;
`;

function Entities() {
    const [listingType, setListingType] = useState<string>(MOSAIC);
    const [sort, setSort] = useState<Sort>(Sort.DESC);

    return (
        <EntitiesContainer>
            <EntitiesHeader listingType={listingType} setListingType={setListingType}/>
            <EntitiesAction
                sort={sort} setSort={setSort}
            />
            <EntityItems sort={sort}/>
        </EntitiesContainer>
    );
}

export default Entities;

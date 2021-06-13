import EntitiesHeader from "../../component/Entities/EntitiesHeader";
import {useState} from "react";
import {MOSAIC} from "../../component/Entities/ListingType";
import EntitiesAction from "../../component/Entities/EntitiesAction";
import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";

const EntitiesContainer = styled.div`
  background-color: ${Colors.white};
  padding: 10px 20px;
  border-radius: 5px;
`;

function Entities() {
    const [listingType, setListingType] = useState<string>(MOSAIC);

    return (
        <EntitiesContainer>
            <EntitiesHeader listingType={listingType} setListingType={setListingType}/>
            <EntitiesAction/>
        </EntitiesContainer>
    );
}

export default Entities;

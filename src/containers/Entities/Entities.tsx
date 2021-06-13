import EntitiesHeader from "../../component/Entities/EntitiesHeader";
import {useState} from "react";
import {MOSAIC} from "../../component/Entities/ListingType";

function Entities() {
    const [listingType, setListingType] = useState<string>(MOSAIC);

    return (
        <main>
            <EntitiesHeader listingType={listingType} setListingType={setListingType}/>
        </main>
    );
}

export default Entities;

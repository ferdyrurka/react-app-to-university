import LatestPublications from "../../component/LatestPublications/LatestPublications";
import Workspaces from "../../component/Workspaces/Workspaces";
import Comments from "../../component/ResumeYourWork/Comments";
import React, {useEffect} from "react";
import {fetchUsers} from "../../actions/UserAction";
import {fetchLatestPhotos} from "../../actions/PhotoAction";

function HomePage() {
    useEffect(() => {
        fetchUsers();
        fetchLatestPhotos();
    }, [])

    return (
        <main>
            <LatestPublications/>
            <Workspaces/>
            <Comments/>
        </main>
    );
}

export default HomePage;

import LatestPublications from "../LatestPublications/LatestPublications";
import Workspaces from "../Workspaces/Workspaces";
import Comments from "../ResumeYourWork/Comments";
import React, {useEffect} from "react";
import {fetchUserById, fetchUsers} from "../../actions/UserAction";
import {CurrentUser} from "../../tools/CurrentUser";
import {fetchLatestPhotos} from "../../actions/PhotoAction";

function HomePage() {
    useEffect(() => {
        fetchUserById(CurrentUser.getCurrentUserId());
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

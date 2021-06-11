import React, {useEffect} from "react";
import {Redirect, useParams } from "react-router-dom";
import {Item, ITEMS} from "../../component/Workspaces/WorkspaceItems";
import WorkspaceHeader from "../../component/Workspaces/Site/WorkspaceHeader";
import Comments from "../../component/ResumeYourWork/Comments";
import {fetchUsers} from "../../actions/UserAction";
import {fetchLatestPhotos} from "../../actions/PhotoAction";

function Workspace() {
    useEffect(() => {
        fetchUsers();
        fetchLatestPhotos();
    }, [])

    let { workspaceSlug } = useParams<{workspaceSlug: string}>();
    const workspace: Item | undefined = ITEMS.find((item: Item) => item.slug === workspaceSlug);

    if (workspace === undefined) {
        return <Redirect to="/test" />
    }

    return (
        <main>
            <WorkspaceHeader workspace={workspace}/>
            <Comments/>
        </main>
    );
}

export default Workspace;

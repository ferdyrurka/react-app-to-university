import React, {useEffect} from "react";
import {Redirect, useParams } from "react-router-dom";
import {Item, ITEMS} from "../../component/Workspaces/WorkspaceItems";
import WorkspaceHeader from "../../component/Workspaces/Site/WorkspaceHeader";
import Comments from "../../component/ResumeYourWork/Comments";
import {fetchUsers} from "../../actions/UserAction";
import {fetchLatestPhotos} from "../../actions/PhotoAction";
import StartWorkingOnCorporate from "../../component/Workspaces/Site/StartWorkingOnCorporate";
import styled from "styled-components";

const WorkspaceContainer = styled.main``;

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
        <WorkspaceContainer>
            <WorkspaceHeader workspace={workspace}/>
            <StartWorkingOnCorporate/>
            <Comments/>
        </WorkspaceContainer>
    );
}

export default Workspace;

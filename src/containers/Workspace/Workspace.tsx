import React from "react";
import {Redirect, useParams } from "react-router-dom";
import {Item, ITEMS} from "../../component/Workspaces/WorkspaceItems";
import WorkspaceHeader from "../../component/Workspaces/Site/WorkspaceHeader";

function Workspace() {
    let { workspaceSlug } = useParams<{workspaceSlug: string}>();

    const workspace: Item | undefined = ITEMS.find((item: Item) => item.slug === workspaceSlug);

    if (workspace === undefined) {
        return <Redirect to="/test" />
    }

    return (
        <main>
            <WorkspaceHeader workspace={workspace}/>
        </main>
    );
}

export default Workspace;

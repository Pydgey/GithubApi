import React, { createContext, useState } from "react";

export const GitHubContext = createContext ({
    user: {},
    repositories: [],
    starred: [],
});

export const GitHubProvider = ({children}) => {
    const [GithubState, setGithubState] = useState({
        user: {
            login: undefined,
            name: "Felipe",
            publicUrl: undefined,
            blog: undefined,
            followers: 0,
            following: 0,
            publicGists: 0,
            publicRepos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        GithubState,
    }

    return (
        <GitHubContext.Provider value = {contextValue}>
            {children}
        </GitHubContext.Provider>
    );
}
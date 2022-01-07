import { useContext } from "react";
import { GitHubContext } from "../providers/github-provider";

export const useGitHub = () => {
    const {GithubState} = useContext(GitHubContext);

    return {GithubState};
}
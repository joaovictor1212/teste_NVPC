import filter from 'filter-url/filter';
import { createContext, useEffect, useState } from "react";
import { Repo } from "../../model/repo/Repo";

const RepoContext = createContext();

export const RepoProvider = ({ children }) => {
    const [repoFound, setRepoFound] = useState(false);
    const [repos, setRepos] = useState([]);
    const [repo, setRepo] = useState({});

    const apiUrl = process.env.REACT_APP_API_URL;
    const id = window.sessionStorage.getItem("id");
    const token = window.sessionStorage.getItem("token")

    const findallrepos = async() => {
        const response = await fetch(`${apiUrl}/repo/findAllById/${id}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        const data = await response.json();
        setRepos(data.repos);
    }

    const addrepo = async(filteredrepo) => {
        const newRepos = [];
        const repo = filter(filteredrepo);
        newRepos.push(repo)
        const response = await fetch(`${apiUrl}/repo/addRepo/toId/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({repos: newRepos})
        });

        const data = await response.json();
        setRepos([data.repo, ...repos]);
        console.log(data.repo);
        return data;
    }

    const searchrepo = async(repoSearched) => {
        const response = await fetch(`${apiUrl}/repo/findRepoByName/${repoSearched}/byUserId/${id}`,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        const data = await response.json();
        setRepoFound(true);
        setRepo(data.repo[0]);
        return data;
    }

    const deleterepo = async(repoDeleted) => {
        const response = await fetch(`${apiUrl}/repo/deleteRepoByName/${repoDeleted}/byUserId/${id}`,  
        {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        const data = await response.json();
        setRepos(repos.filter((repo) => repo.name !== repoDeleted));
        return data;
    }

    return(
        <RepoContext.Provider value={
            {
                addrepo: addrepo,
                deleterepo: deleterepo,
                searchrepo: searchrepo,
                findallrepos: findallrepos,
                repos: repos,
                repoFound: repoFound,
                repo: repo,
                findallrepos: findallrepos
            }
        }
        >{ children }</RepoContext.Provider>
    );
};

export default RepoContext;
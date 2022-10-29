import { useState, useEffect } from 'react';
import RepoContext from '../../context/repos/RepoContext';
import '../repo/Repo.css';

function RepoList({ spanText }){
    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        const fetchRepos = async() => {
            await fetch('https://api.github.com/users/joaovictor1212/repos')
          .then(response => response.json())
          .then(data => setRepos(data));
        }
        fetchRepos();
    }, []);

    
    return (
        <div className="repos-list">
            <h3>Repositórios</h3>
            <ul>
                {repos.map((repodata) => {
                    console.log('repoIndex', repodata)
                    return (
                    <li>
                        <div className="left-block">
                            <span className="repo-owner">
                                <b>{repodata.owner.login}</b>
                            </span>
                            <span className="repo-name">
                                {repodata.name}
                            </span>
                        </div>
                    </li>
                    )
                })}
            </ul>
        </div> 
    )
}

export default RepoList;
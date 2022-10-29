import RepoForm from '../repo-form/RepoForm';
import RepoList from '../repo-list/RepoList';
import './Repo.css';

function RepoComponent(){
    return(
        <div className="container">
            <section id="sec" className="main">
                <RepoForm spanText={"Pesquisar"} />
                <RepoList />
            </section>
            
            {/* <section className="bottom">
                <RepoForm spanText={"Adicionar"} />
            </section> */}
        </div>
);
}

export default RepoComponent;
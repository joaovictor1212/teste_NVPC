import { useContext, useState } from 'react';
import RepoContext from '../../context/repos/RepoContext';
import '../repo/Repo.css';

function RepoForm({spanText}){
    // state
    const [text, setText] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);

    // context
    const { addrepo, searchrepo } = useContext(RepoContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(spanText == 'Adicionar'){
            addrepo(text);
            setText('');
        } else {
            searchrepo(text);
            setText('');
        }
    }

    const handleTextChange = (event) => {
        setText(event.target.value);
        setIsEmpty(false);
    }

    return (
        <form className="container-form">
            <span className="text">{spanText}</span>
            <input onChange={handleTextChange} id="search" className="new-repo-input" value={text} />
            <button disabled={isEmpty} type="submit" className="new-repo-button" onClick={handleSubmit}>{spanText}</button>
        </form>
    );
}

export default RepoForm;
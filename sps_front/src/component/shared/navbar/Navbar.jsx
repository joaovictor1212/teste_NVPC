import { useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const navigate = useNavigate();

    const handleExit = () => {
        window.sessionStorage.clear();
        navigate('/login')
    }
    
    return(
        <nav className="navbar">
            <div className="logo-block">
                <span className="logo">SPS Consultoria</span>
            </div>
            <div className="logout-block">
                <span onClick={handleExit}>Sair</span>
            </div>
        </nav>
    );
}

export default Navbar;
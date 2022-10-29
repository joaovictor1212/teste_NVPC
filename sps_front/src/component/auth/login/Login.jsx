import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';
import './Login.css';

const User = {
    email: '',
    password: ''
}

function Login() {
    // navigate
    const navigate = useNavigate();

    // state
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    // context
    const { authenticate } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        User.email = emailText;
        User.password = passwordText;
        const promise = authenticate(User);
        promise.then((data) => {
            const token = data.token;
            const id = data.user._id;
            window.sessionStorage.setItem("token", token);
            window.sessionStorage.setItem("id", id);
            navigate('/app');
        });
    }

    const handleEmailChange = (event) => {
        const emailTextInput = event.target.value;
        setEmailText(emailTextInput);
    }

    const handlePasswordChange = (event) => {
        const passwordTextInput = event.target.value; 
        setPasswordText(passwordTextInput);
    }

    const handleRegister = () => {
        navigate('/register');
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                
                <div className="form-group">
                    <label>E-mail</label>
                    <input onChange={handleEmailChange} type="email" placeholder="Enter email" />
                </div>
                
                <div className="form-group">
                    <label>Senha</label>
                    <input onChange={handlePasswordChange} type="password" placeholder="Password" />
                </div>

                <div className="form-group-question">
                    <small onClick={handleRegister} className="redir">Ainda não tem uma conta?</small>
                </div>
                <button type="submit" className="btnl">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
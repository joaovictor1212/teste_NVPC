import { User } from '../../model/user/User';
import { useState, useContext } from 'react';
import './Register.css';
import UserContext from '../../context/user/UserContext';
import { useNavigate } from 'react-router-dom';

function Register(){
    // context
    const navigate = useNavigate();

    // state
    const [nameText, setNameText] = useState('');
    const [emailText, setEmailText] = useState('');
    const [passwordText, setPasswordText] = useState('');

    // context
    const {register} = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = new User(nameText, emailText, passwordText);
        register(user);
    }

    const handleNameChange = (event) => {
        const nameTextInput = event.target.value;
        setNameText(nameTextInput);
    }

    const handleEmailChange = (event) => {
        const emailTextInput = event.target.value;
        setEmailText(emailTextInput);
    }

    const handlePasswordChange = (event) => {
        const passwordTextInput = event.target.value;
        setPasswordText(passwordTextInput);
    }

    const handleLogin = () => {
        navigate('/login');
    }

    return(
        <div className="container">
            <form className="register-form" onSubmit={handleSubmit}>
                <h3>Cadastro</h3>

                <div className="form-group">
                    <label htmlFor="exampleInputNome">Nome</label>
                    <input onChange={handleNameChange} type="text" placeholder="Name" />
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input onChange={handleEmailChange} type="email" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input onChange={handlePasswordChange} type="password" placeholder="Password" />
                </div>

                <div className="form-group-question">
                    <small onClick={handleLogin}>Já tem uma conta?</small>
                </div>
                <button type="submit" className="btnr">Criar conta</button>
            </form>
        </div>
    );
}

export default Register;
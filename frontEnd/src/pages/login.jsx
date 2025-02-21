import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../hooks/useLogin.jsx";

const Login = () => {
    const navigate = useNavigate();
    const {login, error, isLoading} = useLogin();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        console.log("loggin in -> email:",email, "        pass:", password);
    }

    const goBack = () => {
        navigate(-1); 
    };

    return (
        <div className="Login-page">
            <h1>The Login Page</h1>

            <form className="login" onSubmit={handleSubmit}>
                <h3>Log In</h3>
                
                <label>Email address:</label>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email} 
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password} 
                />

                <button disabled={isLoading}>Log in</button>
                {error && <div className="error">{error}</div>}
            </form>

            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default Login;

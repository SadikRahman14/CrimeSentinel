import {React,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from "../hooks/useSignUp.jsx";

const SignUp = () => {
    const navigate = useNavigate();
    const {signup, error, isLoading} = useSignup();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password);
        console.log("signing in -> email:",email, "        pass:", password);
    }

    const goBack = () => {
        navigate(-1); 
    };

    return (
        <div className="signUp-page">
            <h1>The signUp Page</h1>

            <form className="signUp-form" onSubmit={handleSubmit}>
                <h3>signUp</h3>
                
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

                <button disabled={isLoading}>Sign up</button>
                {error && <div className="error">{error}</div>}
            </form>

            <button onClick={goBack}>Back</button>
        </div>
    );
};

export default SignUp;

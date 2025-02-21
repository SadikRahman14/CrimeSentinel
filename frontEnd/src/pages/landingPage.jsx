import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout.jsx';
import { useAuthContext } from '../hooks/useAuthContext.jsx'

const LandingPage = () => {
  const navigate = useNavigate(); 
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const goToGreenbeck = () => {
    navigate('/greenbeck');
  };

  const handleLogout = () => {
    logout();
  };

  const goToLogin = () => {
    navigate('/user/login');
  };

  const goToSignup = () => {
    navigate('/user/sign-up');
  };

  return (
    <div className="landing-page">
      <h1>Crime Sentinel</h1>
      <button onClick={goToGreenbeck}>Go to Greenbeck</button>

      {user && (
        <div>
            <br /><br /><br />
            <span>logged in as {user.email} </span>
            <br /><br />
            <button onClick={handleLogout}>Log out</button>
        </div>
      )}

      {!user && (
        <div>
            <button onClick={goToLogin}>Login</button>
            <button onClick={goToSignup}>Sign Up</button>
        </div>
      )}
      
    </div>
  );
};

export default LandingPage;

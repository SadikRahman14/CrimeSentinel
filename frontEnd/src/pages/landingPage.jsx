import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout.jsx';
import { useAuthContext } from '../hooks/useAuthContext.jsx'
import Experiment from './experiment.jsx';

const LandingPage = () => {
  const navigate = useNavigate(); 
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const goToGreenbeck = () => {
    navigate('/practice');
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

  const goToExperiment = () => {
    navigate('/experiment');
  };

  const goToQuery = () => {
    navigate('/query');
  };

  const goToReports = () => {
    navigate('/reports');
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
            <button onClick={goToExperiment}>experiment</button>
            <button onClick={goToQuery}>query</button>
            <button onClick={goToReports}>reports</button>
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

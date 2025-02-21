import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    navigate('/greenbeck');
  };

  return (
    <div className="landing-page">
      <h1>crime sentinel</h1>
      <button onClick={handleClick}>Go to Greenbeck</button>
    </div>
  );
};

export default LandingPage;

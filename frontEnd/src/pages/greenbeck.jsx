import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GreenBeck = () => {
  const [greenBecks, setGreenBecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllGreenBecks = async () => {
    setLoading(true); 
    try {
      const response = await axios.get('http://localhost:4000/api/greenbeck'); 
      setGreenBecks(response.data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="green-beck-page">
      <h2>GreenBeck Profiles</h2>
      <button onClick={getAllGreenBecks}>Get All</button>

      {loading && <p>Loading...</p>} 
      {error && <p>Error: {error}</p>} 

      <div>
        {greenBecks.length > 0 ? (
          <ul>
            {greenBecks.map((greenBeck) => (
              <li key={greenBeck.id}>
                id:{greenBeck.id} - {greenBeck.name} - {greenBeck.age} - {greenBeck.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No GreenBecks found.</p>
        )}
      </div>
    </div>
  );
};

export default GreenBeck;

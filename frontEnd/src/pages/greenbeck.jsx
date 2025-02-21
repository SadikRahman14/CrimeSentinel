import React, { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext.jsx';

const GreenBeck = () => {
  const [greenBecks, setGreenBecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuthContext(); 

  const getAllGreenBecks = async () => {
    if (!user || !user.token) {
      setError("You must be logged in to view this data.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:4000/api/greenbeck', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setGreenBecks(response.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="green-beck-page">
      <h2>GreenBeck Profiles</h2>
      <button onClick={getAllGreenBecks} disabled={!user}>Get All</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div>
        {greenBecks.length > 0 ? (
          <ul>
            {greenBecks.map((greenBeck) => (
              <li key={greenBeck.id}>
                ID: {greenBeck.id} - {greenBeck.name} - {greenBeck.age} - {greenBeck.email}
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

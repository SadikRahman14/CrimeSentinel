import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);  // Start loading
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        username,
        email,
        password,
      });

      if (response && response.data) {
        console.log("Signup successful", response.data);
        // Handle successful signup response
        setLoading(false);
      } else {
        setLoading(false);
        setError("Unexpected response from server");
      }
    } catch (err) {
      setLoading(false);  // Stop loading in case of error
      if (err.response) {
        // Handle specific error from the API
        console.error("API Error:", err.response.data);
        setError(err.response.data.message || "Server error during signup");
      } else {
        // Handle other errors (e.g., no response)
        console.error("Error:", err.message);
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;

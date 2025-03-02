import React, { useEffect, useState } from "react";

const Victims = () => {
  const [victims, setVictims] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/victims")
      .then((response) => response.json())
      .then((data) => {
        setVictims(data.data);
        setQuery(data.sql);
      })
      .catch((error) => console.error("Error fetching victims:", error));
  }, []);

  return (
    <div>
      <h2>Victim Data</h2>
      <pre>{query}</pre>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Crime ID</th>
          </tr>
        </thead>
        <tbody>
          {victims.length > 0 ? (
            victims.map((victim, index) => (
              <tr key={index}>
                <td>{victim.id}</td>
                <td>{victim.name}</td>
                <td>{victim.age}</td>
                <td>{victim.gender}</td>
                <td>{victim.contact_no}</td>
                <td>{victim.crime_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Victims;

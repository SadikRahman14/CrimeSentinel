import React, { useEffect, useState } from "react";

const Witnesses = () => {
  const [witnesses, setWitnesses] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/witnesses")
      .then((response) => response.json())
      .then((data) => {
        setWitnesses(data.data);
        setQuery(data.sql);
      })
      .catch((error) => console.error("Error fetching witnesses:", error));
  }, []);

  return (
    <div>
      <h2>Witness Data</h2>
      <pre>{query}</pre>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Crime ID</th>
          </tr>
        </thead>
        <tbody>
          {witnesses.length > 0 ? (
            witnesses.map((witness, index) => (
              <tr key={index}>
                <td>{witness.id}</td>
                <td>{witness.name}</td>
                <td>{witness.contact_no}</td>
                <td>{witness.crime_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Witnesses;

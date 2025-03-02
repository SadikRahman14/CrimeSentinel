import React, { useEffect, useState } from "react";

const Offenders = () => {
  const [offenders, setOffenders] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/offenders")
      .then((response) => response.json())
      .then((data) => {
        setOffenders(data.data);
        setQuery(data.sql);
      })
      .catch((error) => console.error("Error fetching offenders:", error));
  }, []);

  return (
    <div>
      <h2>Offender Data</h2>
      <pre>{query}</pre>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Crime ID</th>
          </tr>
        </thead>
        <tbody>
          {offenders.length > 0 ? (
            offenders.map((offender, index) => (
              <tr key={index}>
                <td>{offender.id}</td>
                <td>{offender.name}</td>
                <td>{offender.age}</td>
                <td>{offender.gender}</td>
                <td>{offender.status}</td>
                <td>{offender.crime_id}</td>
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

export default Offenders;

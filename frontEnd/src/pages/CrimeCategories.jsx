import React from "react";
import "./CrimeCategories.css";

const crimeCategories = [
  { name: "MURDER", count: 20 },
  { name: "TARGETED KILLING", count: 50 },
  { name: "MURDER DURING ROBBERY", count: 10 },
  { name: "BOMB BLAST", count: 2 },
  { name: "HIGH WAY ROBBERY", count: 30 },
  { name: "BANK ROBBERY", count: 10 },
  { name: "CAR SNATCHING", count: 25 },
  { name: "GANG RAPE", count: 12 },
];

const CrimeCategories = () => {
  return (
    <div className="crime-categories">
      <h2>Browse by Crime Category</h2>
      <p>Explore Crime Types and Patterns</p>
      <div className="category-grid">
        {crimeCategories.map((crime, index) => (
          <div className="category-card" key={index}>
            <h3>{crime.name}</h3>
            <span className="crime-count">{crime.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrimeCategories;

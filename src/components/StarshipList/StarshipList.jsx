// src/components/StarshipList/StarshipList.jsx
import React from 'react';
import StarshipCard from '../StarshipCard/StarshipCard';

const StarshipList = ({ starships, loading, error }) => {
  if (loading) return <p>Loading starships...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  if (!starships.length) return <p>No starships found.</p>;

  return (
    <div className="starship-list">
      {starships.map((ship, idx) => (
        <StarshipCard key={idx} starship={ship} />
      ))}
    </div>
  );
};

export default StarshipList;

// src/components/StarshipCard/StarshipCard.jsx
import React from 'react';

const StarshipCard = ({ starship }) => {
  const {
    name,
    model,
    manufacturer,
    starship_class,
    cost_in_credits,
    hyperdrive_rating,
  } = starship;

  return (
    <div className="starship-card">
      <h2>{name}</h2>
      <p><strong>Model:</strong> {model}</p>
      <p><strong>Class:</strong> {starship_class}</p>
      <p><strong>Manufacturer:</strong> {manufacturer}</p>
      <p><strong>Cost:</strong> {cost_in_credits} credits</p>
      <p><strong>Hyperdrive Rating:</strong> {hyperdrive_rating}</p>
    </div>
  );
};

export default StarshipCard;
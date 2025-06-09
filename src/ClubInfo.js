import React from 'react';
import './ClubInfo.css';

const ClubInfo = ({ club }) => {
  return (
    <div className="card">
      <h2>{club.name}</h2>
      <img src={club.logo} alt="logo" className="club-logo" />
      <p><strong>Місто:</strong> {club.city}</p>
      <p><strong>Рік заснування:</strong> {club.founded}</p>
    </div>
  );
};

export default ClubInfo;

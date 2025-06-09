import React from 'react';
import './Achievements.css';

const Achievements = ({ club }) => {
  return (
    <div className="card achievements">
      <h3>🏆 Досягнення</h3>
      <ul>
        {club.achievements.map((ach, index) => (
          <li key={index}>{ach}</li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;

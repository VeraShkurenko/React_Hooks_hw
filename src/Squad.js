import React from 'react';
import './Squad.css';

const Squad = ({ club }) => {
  return (
    <div className="card squad">
      <h3>👥 Склад</h3>
      <ul>
        {club.squad.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default Squad;

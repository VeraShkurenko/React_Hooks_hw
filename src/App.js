import React, { useState } from 'react';
import ClubInfo from './ClubInfo';
import Achievements from './Achievements';
import Squad from './Squad';
import './App.css';

const clubsData = [
  {
    name: 'FC Barcelona',
    city: 'Barcelona',
    founded: 1899,
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    achievements: ['La Liga Champions', 'UEFA Champions League'],
    squad: ['Ter Stegen', 'Lewandowski', 'Pedri']
  },
  {
    name: 'Manchester City',
    city: 'Manchester',
    founded: 1880,
    logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
    achievements: ['Premier League Champions', 'FA Cup'],
    squad: ['Haaland', 'De Bruyne', 'Ederson']
  }
];

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleRandomClub = () => {
    const randomIndex = Math.floor(Math.random() * clubsData.length);
    setSelectedIndex(randomIndex);
  };

  return (
    <div className="app-container">
      <h1>⚽ Football Club Info</h1>
      <button className="random-btn" onClick={handleRandomClub}>🎲 Показати випадковий клуб</button>
      <div className="card-container">
        <ClubInfo club={clubsData[selectedIndex]} />
        <Achievements club={clubsData[selectedIndex]} />
        <Squad club={clubsData[selectedIndex]} />
      </div>
    </div>
  );
};

export default App;

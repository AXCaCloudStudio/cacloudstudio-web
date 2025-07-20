// src/App.js
import React from 'react';
import './App.css';
import logo from './Logo.png';

const games = [
  { name: 'Crush Game', image: '/images/00001.png', link: '/games/00001/index.html' },
  { name: 'Donkey Jump', image: '/images/00002.png', link: '/games/00002/index.html' },
  { name: 'One Line Puzzle', image: '/images/00003.jpg', link: '/games/00003/index.html' },
  { name: 'Fishing', image: '/images/00004.png', link: '/games/00004/index.html' },
  { name: 'Fireworks', image: '/images/00005.jpg', link: '/games/00005/index.html' },
  // Add more games here
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CA Cloud Studio - Game Collection</h1>
      </header>

      <main className="Game-grid">
        {games.map((game, index) => (
          <div className="Game-item" key={index}>
            <a href={game.link}>
              <img src={game.image} alt={game.name} className="Game-image" />
            </a>
            <a href={game.link} className="Game-title">{game.name}</a>
          </div>
        ))}
      </main>

      <footer className="App-footer">
        <img src={logo} className="Footer-logo" alt="logo" />
        <p>&copy; 2025 CA Cloud Studio LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

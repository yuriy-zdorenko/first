// src/App.js
import React from 'react';
import './App.css'; // Головні стилі
import HobbyFunctional from './components/HobbyFunctional';
import HobbyClass from './components/HobbyClass';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1>Лабораторна робота №24 (CRA)</h1>
        
        <HobbyFunctional />
        <HobbyClass />
        
      </div>
    </div>
  );
}

export default App;
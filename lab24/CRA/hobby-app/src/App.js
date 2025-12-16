import React from 'react';
import './App.css';

class HobbyClass extends React.Component {
  render() {
    return (
      <p>Я люблю займатися фотографією — це дозволяє мені бачити красу в деталях і зберігати моменти назавжди.</p>
    );
  }
}

const HobbyFunction = () => {
  return (
    <p>Також мені подобається грати на гітарі і тим самим проявляти себе.</p>
  );
};

function App() {
  return (
    <div className="App">
      <h2>Моє хобі</h2>
      <HobbyClass />
      <HobbyFunction />
    </div>
  );
}

export default App;

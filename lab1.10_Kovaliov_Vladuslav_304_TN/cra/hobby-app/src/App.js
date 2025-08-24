import React from 'react';
import './App.css';

// Класовий компонент
class HobbyClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Моє хобі – програмування</h2>
        <p>Я розробляю сайти та ігри, це дає мені змогу реалізовувати свої ідеї в реальному житті.</p>
      </div>
    );
  }
}

// Функціональний компонент
function HobbyFunction() {
  return (
    <div>
      <h2>Моє хобі – програмування</h2>
      <p>Я розробляю сайти та ігри, це дає мені змогу реалізовувати свої ідеї в реальному житті.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HobbyClass />
      <hr />
      <HobbyFunction />
    </div>
  );
}

export default App;

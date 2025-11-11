import React from 'react';
import '../HobbyCard.css'; // Імпортуємо наші стилі

function HobbyFunctional() {
  return (
    <div className="hobby-card">
      <h2>Мої хобі (Функціональний компонент)</h2>
      <ul>
        <li>
          <strong>Програмування:</strong> Я захоплююсь веб-розробкою, особливо
          вивченням React та Node.js. Мені подобається створювати
          інтерактивні додатки та вирішувати складні логічні задачі.
        </li>
        <li>
          <strong>Комп'ютерні ігри:</strong> У вільний час я люблю пограти в
          стратегії та RPG. Це допомагає мені розслабитись та розвиває
          стратегічне мислення.
        </li>
      </ul>
    </div>
  );
}

export default HobbyFunctional;
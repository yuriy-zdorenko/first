import React, { Component } from 'react';
import '../HobbyCard.css'; // Імпортуємо ті самі стилі

class HobbyClass extends Component {
  render() {
    return (
      <div className="hobby-card">
        <h2>Моє третє хобі (Класовий компонент)</h2>
        <p>
          Окрім технологій та ігор, я приділяю велику увагу
          фізичному розвитку.
        </p>
        <p>
          <strong>Тренування в залі:</strong> Силові тренування - ще одне моє
          важливе захоплення. Я регулярно відвідую зал, щоб підтримувати
          фізичну форму, витривалість та дисципліну.
        </p>
      </div>
    );
  }
}

export default HobbyClass;
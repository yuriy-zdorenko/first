import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [rotate, setRotate] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setRotate(prevRotate => prevRotate + 5);
        }, 100);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="container">
            <h1>Моє хобі</h1>
            <img
              src="/images/hobby1.png"
              alt="Програмування"
              className="slider-image"
              style={{ transform: `rotate(${rotate}deg)` }}
            />
            <p className="caption">Програмування</p>
        </div>
    );
}

export default App;
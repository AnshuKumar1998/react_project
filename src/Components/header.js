import React from 'react'
import './WeatherApp.css';
import { Link } from 'react-router-dom';

export default function header() {
  return (
    <header className="weather-header">
        <h1>Weather App ☁️</h1>
        <nav>
            <Link to="/">Home 🏠</Link>
            <Link to="/weather">Weather ☁️</Link>
        </nav>
    </header>
  )
}


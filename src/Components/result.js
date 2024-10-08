import React from 'react';
import './WeatherApp.css';
import Loader from './loader';

export default function Result(props) {
  const { weatherData: data } = props;

  function kToc(k) {
    return (k - 273.15).toFixed(2); // Optional: toFixed to limit to 2 decimal places
  }

  function getTheDate(stamp){
    const date = new Date(stamp*1000);
    return date.toLocaleTimeString();
  }

  let showOnPage = <p>Loading.......</p>;

  return (
    <div className="results">
      {data ? (
        <>
          <h2><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
          {data.name}  ({kToc(data.main.temp)}°C) {data.weather[0].description}</h2>
          <p><strong>Country:</strong> {data.sys.country}</p>
          <p><strong>Feel Like:</strong> {kToc(data.main.feels_like)}</p>
          <p><strong>Min Temp:</strong> {kToc(data.main.temp_min)}</p>
          <p><strong>Max Temp:</strong> {kToc(data.main.temp_max)}</p>
          <p><strong>Sunrise:</strong> {getTheDate(data.sys.sunrise)}</p>
          <p><strong>Sunset:</strong> {getTheDate(data.sys.sunset)}</p>
        </>
      ) : (
        <><Loader />{showOnPage}</>
      )}
    </div>
  );
}

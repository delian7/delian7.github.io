import React from 'react';
import '../styles/Weather.css'

interface WeatherProps {
  forecast?: any,
  currentWeather?: any,
  cacheKeyExists?: any
}

const Weather: React.FC<WeatherProps> = ({ forecast, currentWeather, cacheKeyExists }) => {

    const showAddressInput = () => {

    }

    return (
      <>
        <div className="wrapper">
          <span className={`weather-container ${forecast ? "active" : ""}`}>
            <div className="weather-panel">
              <div className="weather-overlay"></div>
              <div className="date-info">
                <h2 className="day-name">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h2>
                <span className="day-number">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <i className="city-icon" data-feather="map-pin"></i>
                <span className="city">{currentWeather?.city_name}</span>
              </div>
              <div className="weather-info">
                <i className="weather-icon" data-feather={currentWeather?.icon}></i>
                <h1 className="temperature">{currentWeather?.temperature}°</h1>
                <h3 className="weather-description">{currentWeather?.condition}</h3>
                {cacheKeyExists && <span className="cache-badge">Served from Cache</span>}
              </div>
            </div>
            <div className="details-panel">
              <div className="today-details">
                <div className="precipitation">
                  <span className="label">HIGH</span>
                  <span className="value">{currentWeather?.high}°</span>
                  <div className="clearfix"></div>
                </div>
                <div className="humidity">
                  <span className="label">LOW</span>
                  <span className="value">{currentWeather?.low}°</span>
                  <div className="clearfix"></div>
                </div>
                <div className="wind">
                  <span className="label">FEELS LIKE</span>
                  <span className="value">{currentWeather?.feels_like}°</span>
                  <div className="clearfix"></div>
                </div>
              </div>
              <div>
                <ul className="week-forecast">
                  {forecast?.map((day: any, index: any) => (
                    <li key={index}>
                      <i className="day-icon" data-feather={day.icon}></i>
                      <span className="day-label">{new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span className="day-temp">{day.temperature}°F</span>
                    </li>
                  ))}
                  <div className="clearfix"></div>
                </ul>
              </div>
              <div className="location-section">
                <button className="location-btn" onClick={() => showAddressInput()}>
                  <i data-feather="map-pin"></i><span>Change location</span>
                </button>
              </div>
            </div>
          </span>
          <div className={`address-input ${!forecast ? "active" : "hide"}`} id="addressInput">
            <form onSubmit={handleSubmit}>
              <input type="text" name="address" placeholder="Search by address, city, or zip code" />
              <button type="submit">Get Forecast</button>
            </form>
          </div>
        </div>
      </>
    );
};

// Function to handle form submission
const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle the form submission logic here
};

export default Weather;

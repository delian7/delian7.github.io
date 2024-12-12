import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../styles/Weather.css'
import { Input, SlideFade } from "@chakra-ui/react";
import { Icon, MapPin, Sun, Cloud, CloudRain } from 'react-feather';
import { Box } from '@chakra-ui/react'


const iconMap: { [key: string]: Icon } = {
  sun: Sun,
  cloud: Cloud,
  rain: CloudRain,
};


interface Forecast {
  high: number;
  low: number;
  feels_like: number;
  icon: string;
  date: Date;
  temperature: number;
}

interface CurrentWeather {
  city_name: String;
  icon: string;
  temperature: number;
  condition: String;
  high: String;
  low: String;
  feels_like: String;
}

interface WeatherProps {
  forecast?: Forecast[],
  currentWeather?: CurrentWeather,
  cacheKeyExists?: any
}

const Weather: React.FC<WeatherProps> = () => {
  const [address, setAddress] = useState('')
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | undefined>();
  const [forecast, setForecast] = useState<Forecast[] | undefined>();
  const [cacheKeyExists, setCacheKeyExists] = useState<boolean>();
  const [iconName, setIconName] = useState<string>('cloud');
  const [units, setUnits] = useState('imperial');
  const [hideChangeLocation, setHideChangeLocation] = useState(true);
  const IconComponent = iconMap[iconName]; // Get the corresponding icon component
  const [loading, setLoading] = useState(true);

  const getWeatherData = useCallback(async(location: string) => {
    const response = await fetch(`https://bmepodrfarrqpcbl57nma67aay0fabwk.lambda-url.us-east-2.on.aws/?location=${location}&units=${units}`)
    const json = await response.json()

    setCurrentWeather(json['current_weather']);
  }, [units]);

  const getWeatherDataRef = useRef(getWeatherData); // Create a ref to hold the function
  useEffect(() => {
    getWeatherDataRef.current = getWeatherData; // Update the ref on change
  }, [getWeatherData]);

  const addressRef = useRef(address); // Create a ref to hold the current address
  useEffect(() => {
    addressRef.current = address; // Update the ref on address change
  }, [address]);

  useEffect(() => {
    getWeatherDataRef.current(addressRef.current); // Update the ref on change
  }, [units]);

  useEffect(() => {
    const getLocationByIP = async (ip: string) => {
      const response = await fetch(`http://ip-api.com/json/${ip}`);
      const data: {city: string} = await response.json();
      return data.city;
    };

    const getIpAddress = async () => {
      const response = await fetch('https://api.ipify.org?format=json')
      const data: {ip: string} = await response.json();
      return data.ip;
    }

    const fetchLocation = async () => {
      const ip = await getIpAddress();
      const location = await getLocationByIP(ip)

      setAddress(location);
      await getWeatherDataRef.current(location);
      setLoading(false);
    }
    fetchLocation()
  }, []);

  const showAddressInput = () => {
    setLoading(false);
    setForecast(undefined);
    setCurrentWeather(undefined);
  }

  const handleUnitChange = () => {
    setUnits(units === 'imperial' ? 'metric' : 'imperial')
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setUnits('metric')
    getWeatherData(address);
  };

  return (
    <>
      <div className="wrapper" onMouseEnter={() => setHideChangeLocation(false)} onMouseLeave={() => setHideChangeLocation(true)}>
        <span className={`weather-container ${currentWeather ? "active" : ""}`}>
          <div className="weather-panel">
            <div className="weather-overlay"></div>
            <div className="date-info">
              <h2 className="day-name">{new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h2>
              <span className="day-number">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <MapPin className="city-icon" />
              <span className="city">{currentWeather?.city_name}</span>
            </div>
            <Box className="weather-info">
              <IconComponent className="weather-icon" />
              <h1 className="temperature">{currentWeather?.temperature}°<span>{ units === 'imperial' ? 'F' : 'C' }</span></h1>
              <h3 className="weather-description">{currentWeather?.condition}</h3>

              {cacheKeyExists && <span className="cache-badge">Served from Cache</span>}
            </Box>
          </div>
          <div className={`details-panel ${forecast ? "active" : "hide"}`}>
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
          </div>
        </span>
        <SlideFade in={!hideChangeLocation && !!currentWeather}>
            <Box
              className='location-selection'
              width="100%"
              display={'flex'}
            >
              <button className="location-btn" onClick={() => showAddressInput()}>
                <MapPin /><span>Change location</span>
              </button>
              <button className="unit-btn" onClick={() => handleUnitChange()}>
                <span>C/F</span>
              </button>
            </Box>
        </SlideFade>
        <Box
          className={`address-input ${(!currentWeather && !loading) ? "active" : "hide"}`}
          id="addressInput"
        >
          <form onSubmit={handleSubmit}>
            <Input type="text" color="black" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Search by address, city, or zip code" />
            <button type="submit">Get Forecast</button>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Weather;

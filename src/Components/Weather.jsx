import React, { useEffect, useState } from 'react';
import './weather.css';
import search_icon from '/Assets/search.png';
import humidity_icon from '/Assets/humidity.png';
import wind_icon from '/Assets/wind.png';

function Weather() {
    const [weatherData, setWeatherData] = useState(false);
    const [inputSearch, setInputSearch] = useState("Kochi");

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setWeatherData({
                location: data.name,
                humidity: data.main.humidity,
                temperature: Math.floor(data.main.temp),
                windSpeed: data.wind.speed,
                icon: data.weather[0].icon,
                videoData: data.weather[0].main
            });
        } catch (error) {
            console.error("Error fetching weather data :", error);
        }
    };

    useEffect(() => {
        search("Kochi");
    }, []);

    const renderVideo = () => {
        switch (weatherData.videoData) {
            case 'Clouds':
                return '/Assets/cloudy.mp4';
            case 'Rain':
                return '/Assets/rain.mp4';
            case 'Clear':
                return '/Assets/sunny.mp4';
            case 'Snow':
                return '/Assets/snow.mp4';
            case 'Drizzle':
                return '/Assets/drizzle.mp4';
            case 'Thunderstorm':
                return '/Assets/thunder.mp4';
            case 'Mist':
                return '/Assets/mist.mp4';
            case 'Haze':
                return '/Assets/haze.mp4';
            default:
                return '/Assets/normal.mp4';
        }
    };

    return (
        <div className="main">
            {
                weatherData && (
                    <video className='background-video' src={renderVideo()} autoPlay muted loop />
                )
            }

            <div className="weather">
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        onChange={(e) => setInputSearch(e.target.value)} 
                    />
                    <img src={search_icon} alt="search" onClick={() => search(inputSearch)} />
                </div>

                {
                    weatherData && (
                        <img 
                            src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} 
                            alt="weather-icon" 
                            className='weather-icon' 
                        />
                    )
                }

                <p className='temp'>{weatherData.temperature}°C</p>
                <p className='loc'>{weatherData.location}</p>
                <p className='loc'>{weatherData.videoData}</p>

                <div className="weather-data">
                    <div className="col">
                        <img src={humidity_icon} alt="humidity" />
                        <div>
                            <p>{weatherData.humidity} %</p>
                            <span>Humidity</span>
                        </div>
                    </div>
                    <div className="col">
                        <img src={wind_icon} alt="wind speed" />
                        <div>
                            <p>{weatherData.windSpeed} m/s </p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Weather;

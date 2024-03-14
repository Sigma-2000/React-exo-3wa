import { createContext, useState, useEffect, useContext } from 'react';

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

const WeatherContextProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('');

  useEffect(() => {
    if (weatherData) {
      setTemperature(weatherData.main.temp);
      setCondition(weatherData.weather[0].description)
    }
  }, [weatherData]);

  const value = {
    weatherData,
    setWeatherData,
    temperature,
    condition,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
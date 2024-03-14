import { useState, useEffect } from 'react';
import { callWeather, callCoordinateTown } from '../utils/apiCall';
import { useWeatherContext } from '../utils/weatherContext';

const Input = () => {
  const [townNameInput, setTownNameInput] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const apiKey = "2b2f2549f6eeda9ff4641470527e9d43";
  const { setWeatherData } = useWeatherContext();

  useEffect(() => {
    if (lat && lon) {
      const fetchWeather = async () => {
        const weather = await callWeather(lat, lon, apiKey);
        setWeatherData(weather);
      };
      fetchWeather();
    }
  }, [lat, lon, setWeatherData]);

  const handleChange = (e) => {
    setTownNameInput(e.target.value);
  };

  const handleClick = async () => {
    try {
      const dataTown = await callCoordinateTown(townNameInput);
      setLat(dataTown[0]);
      setLon(dataTown[1]);
    } catch (error) {
      console.error('Erreur lors de la récupération des données de la ville:', error);
    }
  };

  return (
    <div className="reach">
      <h2>Enter the name of a French town</h2>
      <input value={townNameInput} onChange={handleChange} />
      <button onClick={handleClick}>Reach</button>
    </div>
  );
};

export default Input;
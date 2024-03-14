import { useWeatherContext } from '../utils/weatherContext';

const TownWeather = () => {
  const { temperature, condition } = useWeatherContext();
  const tempInCelsius = (temperature - 273.15).toFixed(2);

  return (
    <div>
      <h2>Meteo Results:</h2>
      {temperature && <p>Temperature: {tempInCelsius} °C</p>}
      {condition && <p>Weather condition: {condition}</p>}
    </div>
  );
};

export default TownWeather;
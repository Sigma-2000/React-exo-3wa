import { useWeatherContext } from '../utils/weatherContext';

const TownWeather = () => {
  const { temperature, condition } = useWeatherContext();

  return (
    <div>
      <h2>Résultat Météo</h2>
      {temperature && <p>Température: {temperature}</p>}
      {condition && <p>Weather condition: {condition}</p>}
    </div>
  );
};

export default TownWeather;
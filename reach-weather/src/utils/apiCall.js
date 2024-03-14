import axios from 'axios';
export async function callWeather(lat, lon, apiKey) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Il y a eu un problème avec l\'appel API:', error);
  }
}

export async function callCoordinateTown(town){
  try {
    const response = await axios.get(`https://api-adresse.data.gouv.fr/search/?q=${town}&type=municipality&filds=centre`);
    const dataTown =response.data.features[0].geometry.coordinates;
    return dataTown;
  } catch (error) {
    console.error('Il y a eu un problème avec l\'appel API:', error);
  }

}

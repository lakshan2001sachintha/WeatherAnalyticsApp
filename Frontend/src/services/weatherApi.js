import axios from "axios"

const API_URL = "http://localhost:5010/api/weather/comfort"

export const getComfortWeather = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

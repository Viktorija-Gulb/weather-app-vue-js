import {ref } from 'vue'
import {API_KEY, CURRENT_WEATHER} from './../constants'

const getForecast = () => {
  const forecast = ref(null)
  const ferror = ref(null)

  const forecastLoad = async () => {
    try {
      let data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${CURRENT_WEATHER}&appid=${API_KEY}`)
      if(!data.ok) {
        throw Error('no data available')
      }
      forecast.value = await data.json()
    }
    catch (err){
      ferror.value = err.message
      console.log(err.message)
    }
  }
  return { forecast, ferror, forecastLoad}
}

export default getCurrentWeather

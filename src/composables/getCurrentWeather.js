import {ref } from 'vue'
import {API_KEY, LOCATION} from './../constants'

const getCurrentWeather = () => {
  const currentWeather = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}`)

      if(!data.ok) {
        throw Error('no data available')
      }
      currentWeather.value = await data.json()
    }
    catch (err){
      error.value = err.message
      console.log(err.message)
    }
  }
  return { currentWeather, error, load}
}

export default getCurrentWeather

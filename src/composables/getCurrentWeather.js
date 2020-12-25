import {ref } from 'vue'
import {API_KEY, LOCATION, URL_BASE} from './../constants'

const getCurrentWeather = () => {
  const currentWeather = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(`${URL_BASE}/weather?q=${LOCATION}&appid=${API_KEY}`)

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

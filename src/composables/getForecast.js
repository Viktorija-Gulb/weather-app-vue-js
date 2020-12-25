import {ref } from 'vue'
import {API_KEY, LOCATION, URL_BASE} from './../constants'

const getForecast = () => {
  const forecast = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      let data = await fetch(`${URL_BASE}/forecast?q=${LOCATION}&appid=${API_KEY}`)
      if(!data.ok) {
        throw Error('no data available')
      }
      forecast.value = await data.json()
    }
    catch (err){
      error.value = err.message
      console.log(err.message)
    }
  }
  return { forecast, error, load}
}

export default getForecast

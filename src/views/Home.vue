<template>
    <div class='wrapper'>

      <home-page-header 
        :location="currentWeather.name" 
        :tempMax="currentWeather.main.temp_max" 
        :tempMin="currentWeather.main.temp_min" />

      <CurrentWeather 
        :mainTemp="currentWeather.main.temp" 
        :location="currentWeather.name" 
        :cloudy="currentWeather.weather[0].main" />

      <div class='bottom-section'>
        <div class='bottom-section__title'>Week forecast</div>
        <div class='bottom-section__forecact' >
          <WeekForecast />
        </div>
      </div>
    </div>
</template>


<script>
import '../styles/components/Home.scss'
import WeekForecast from '../components/WeekForecast.vue'
import HomePageHeader from '../components/HomePageHeader.vue'

import getCurrentWeather from '../composables/getCurrentWeather'
import CurrentWeather from '../components/CurrentWeather.vue'

export default {
  name: 'Home',

  components: {
    WeekForecast,
    HomePageHeader,
    CurrentWeather
  },
  data() {
    return{
      query: ''
    }
  },

  setup() {
    const {currentWeather, error, load } = getCurrentWeather()
    load()
    return {currentWeather, error }

  },

  created() {
    this.query = this.$route.params.data
  }

}
</script>
<template>
    <div class='wrapper'>

      <div class='weather-box' v-if="typeof currentWeather !== 'undefined'">
        <home-page-header 
          :location="currentWeather.name" 
          :tempMax="currentWeather.main.temp_max" 
          :tempMin="currentWeather.main.temp_min" />

        <CurrentWeather 
          :mainTemp="currentWeather.main.temp" 
          :location="currentWeather.name" 
          :weather="currentWeather.weather[0].main" />
      </div>

      <div class='bottom-section'>
        <div class='bottom-section__title'>Week forecast</div>
        <div class='bottom-section__forecact'>
          <WeekForecast 
            :weekData="this.weekData.slice(1)"
          />
        </div>
      </div>
    </div>
</template>


<script>
import '../styles/components/Home.scss'
import WeekForecast from '../components/WeekForecast.vue'
import HomePageHeader from '../components/HomePageHeader.vue'
import CurrentWeather from '../components/CurrentWeather.vue'
import { API_KEY, LOCATION, URL_BASE } from '../constants'

export default {
  name: 'Home',

  components: {
    WeekForecast,
    HomePageHeader,
    CurrentWeather
  },
  data() {
    return{
      currentWeather: {},
      query: this.$route.params.data ? this.$route.params.data : LOCATION,
      weekData: [],
      latitude: null,
      longitude: null
    }
  },


  created() {
    this.fetchWeather()
  },

  mounted(){
    this.getWeekData();
    this.query = this.$route.params.data
  },

  methods: {
    fetchWeather(){
      fetch(`${URL_BASE}/weather?q=${this.query}&appid=${API_KEY}`)
        .then(res => {
          return res.json();
        }).then(this.setResults);
    },
    setResults (results) {
      this.currentWeather = results;
    },

    async getWeekData(){
      this.latitude = this.currentWeather.coord.lat
      this.longitude = this.currentWeather.coord.lon

      const res = await fetch(`${URL_BASE}/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=alerts,hourly,minutely&appid=${API_KEY}`);
      const data = await res.json();
      this.weekData = data.daily;
    }
  }

}
</script>
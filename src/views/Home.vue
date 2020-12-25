<template>
    <div class='wrapper'>

      <div class='weather-box' v-if="typeof currentWeather.main !== 'undefined'">
        <home-page-header 
          :location="currentWeather.name" 
          :tempMax="currentWeather.main.temp_max" 
          :tempMin="currentWeather.main.temp_min" />

        <CurrentWeather 
          :mainTemp="currentWeather.main.temp" 
          :location="currentWeather.name" 
          :cloudy="currentWeather.weather[0].main" />
      </div>

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

// import getCurrentWeather from '../composables/getCurrentWeather'
import CurrentWeather from '../components/CurrentWeather.vue'
import { API_KEY, URL_BASE } from '../constants'

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
      query: this.$route.params.data ? this.$route.params.data : 'Vilnius'
    }
  },

  // setup() {
  //   const {currentWeather, error, load } = getCurrentWeather()
  //   load()
  //   return {currentWeather, error }
  // },

  created() {
    this.fetchWeather()
  },

  mounted(){
    this.query = this.$route.params.data
  },

  methods: {

    fetchWeather(){
      console.log('methods query ', this.query)
      fetch(`${URL_BASE}/weather?q=${this.query}&appid=${API_KEY}`)
        .then(res => {
          return res.json();
        }).then(this.setResults);
    },
    setResults (results) {
      this.currentWeather = results;
    }
  }

}
</script>
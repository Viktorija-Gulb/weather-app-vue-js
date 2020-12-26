<template>       
  <div class='main-box'>
    <div class='main-box__wrapper'>
      <div class='main-box__temp'>{{ displayTemp(mainTemp) }}&#176;</div>
      <h2 class='main-box__town'>{{ location }}</h2>
      <div class='main-box__weather'>
        <span class='main-box__current'>{{ weather }}</span>
        <weather-switch-component :weather="weather" />
        
      </div>
    </div>
  </div>
</template>

<script>
import '../styles/components/CurrentWeather.scss'
import WeatherSwitchComponent from './WeatherSwitchComponent.vue'

export default {
  home: 'CurrentWeather',
  components: {
    WeatherSwitchComponent
  },
  props: ['mainTemp', 'location', 'weather'],

  methods: {
    displayTemp(temp){
      return Math.round(temp - 273.15);
    }
  }
  }
</script>
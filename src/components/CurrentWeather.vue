<template>       
  <div class='main-box'>
    <div class='main-box__wrapper'>
      <div class='main-box__temp'>{{ displayTemp(mainTemp) }}&#176;</div>
      <h2 class='main-box__town'>{{ location }}</h2>
      <p class='main-box__weather'>
        <span class='main-box__current'>{{ cloudy}}</span>
        <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><CloudySvg /></icon-base>
      </p>
    </div>
  </div>
</template>

<script>
import '../styles/components/CurrentWeather.scss'
import CloudySvg from '../IconsAsSvg/CloudySvg'

export default {
  home: 'CurrentWeather',
  components: {
    CloudySvg
  },
  props: ['mainTemp', 'location', 'cloudy'],

  methods: {
    displayTemp(temp){
      return Math.round(temp - 273.15);
    }
  }
  }
</script>
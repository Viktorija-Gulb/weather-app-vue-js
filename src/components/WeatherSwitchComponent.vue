<template>
    <div class='chart__icon' v-if="weather === 'Clouds'">
      <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><cloudy-svg /></icon-base>
    </div>
    <div class='chart__icon' v-else-if="weather === 'Clear'">
      <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><sun-svg /></icon-base>
    </div>
    <div class='chart__icon' v-else-if="weather === 'Rain'">
      <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><cloud-rain-svg /></icon-base>
    </div>
    <div class='chart__icon' v-else-if="weather === 'Snow'">
      <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><cloud-rain-svg /></icon-base>
    </div>
    <div class='chart__icon' v-else>
      <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud-sun"><cloud-sun-svg /></icon-base>
    </div>
</template>

<script>
import '../styles/components/CurrentWeather.scss'
import IconBase from '../IconsAsSvg/IconBase.vue'
import CloudySvg from '../IconsAsSvg/CloudySvg'
import CloudRainSvg from '../IconsAsSvg/CloudRainSvg'
import SunSvg from '../IconsAsSvg/SunSvg.vue'
import CloudSunSvg from '../IconsAsSvg/CloudSunSvg.vue'

export default {
  home: 'WeatherSwitchComponent',
  components: { IconBase, CloudySvg, CloudRainSvg, SunSvg, CloudSunSvg },
  props: ['weather']
}
</script>
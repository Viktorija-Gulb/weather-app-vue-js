<template>
  <div class='top-section'>
    <div class='status-bar'>
      <div class='status-bar__cloud'>
        <icon-base width="30" height="30" viewBox='0 0 51 51' icon-name="cloud"><Cloud /></icon-base>
      </div>
      <div class='status-bar__location'>
        <a class='status-bar__title' :href="$router.resolve({name: 'Search'}).href">Weather forecast</a>
        <span class='status-bar__town'>{{ location }}</span>
      </div>
      <div class='status-bar__settings'><icon-base width="30" height="30" viewBox='0 0 51 51' icon-name="cloud"><SettingsSvg /></icon-base></div>
    </div>
    
    <div class='day-overview'>
      <div class='day-overview__title'>Day forecast</div>
      <div class='day-overview__temp'>
        <span class='day-overview__day'>{{ displayTemp(tempMax)}}</span>
        <span class='day-overview__night'>{{ displayTemp(tempMin) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Cloud from '../IconsAsSvg/Cloud'
import SettingsSvg from '../IconsAsSvg/SettingsSvg'

export default {
  home: 'HomePageHeader',
  components: {
    Cloud,
    SettingsSvg
  },
  props: ['location', 'tempMax', 'tempMin'],
  methods: {
    displayTemp(temp){
      return Math.round(temp - 273.15);
    }
  }
  }
</script>
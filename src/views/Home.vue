<template>
    <div class='wrapper'>
      <div class='top-section'>
        <div class='status-bar'>
          <div class='status-bar__cloud'>
            <icon-base width="30" height="30" viewBox='0 0 51 51' icon-name="cloud"><Cloud /></icon-base>
          </div>
          <div class='status-bar__location'>
            <span class='status-bar__title'>Weather forecast</span>
            <span class='status-bar__town'>{{results.name}}</span>
          </div>
          <div class='status-bar__settings'><icon-base width="30" height="30" viewBox='0 0 51 51' icon-name="cloud"><SettingsSvg /></icon-base></div>
        </div>
        
        <div class='day-overiew'>
          <div class='day-overiew__title'>Day forecast</div>
          <div class='day-overiew__temp'>
            <span class='day-overiew__day'>8</span>
            <span class='day-overiew__night'>3</span>
          </div>
        </div>
      </div>
      <div class='main-box' v-if="typeof results.main != 'undefined'">
        <div class='main-box__wrapper'>
          <div class='main-box__temp'>{{displayTemp(results.main.temp)}}&#176;</div>
          <h2 class='main-box__town'>{{results.name}}</h2>
          <p class='main-box__weather'>
            <span>{{results.weather[0].main}}</span>
            <icon-base width="25" height="25" iconColor='currentColor' viewBox="0 0 42 27" icon-name="cloud"><CloudySvg /></icon-base>
          </p>
        </div>
      </div>

      <div class='bottom-section'>
        <div class='bottom-section__title'>Week forecast</div>
        <div class='bottom-section'>week forecast chart</div>
      </div>
    </div>
</template>


<style lang="scss">
  .search-box {
    background: yellow;
    &.search-bar {
      border-radius: 10px;
    }
  }
</style>


<script>
import Cloud from '../IconsAsSvg/Cloud'
import SettingsSvg from '../IconsAsSvg/SettingsSvg'
import CloudySvg from '../IconsAsSvg/CloudySvg'
import {API_KEY, CURRENT_WEATHER} from './../constants'
import axios from 'axios'

export default {
  name: 'Home',
  props: {
    API_KEY: String,
    CURRENT_WEATHER: String
  },
  components: {
    Cloud,
    SettingsSvg,
    CloudySvg
  },
  // data: {
  //   results: []
  // },
  data () {
    return {
      results: {},
      weekData: {}
    }
  },
  mounted(){
    this.fetchData();
    this.weekForecast();
  }, 
  
  methods: {
    fetchData(){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CURRENT_WEATHER}&appid=${API_KEY}`).then((response) => { 
        // console.log('response ', response.data.weather[0].main)
         this.results = response.data
    }).catch( error => { console.log(error); });
    },

    weekForecast() {
      axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CURRENT_WEATHER}&appid=${API_KEY}`
        ).then((response) => { 
        console.log('response ', response.data)
         this.weekData = response.data
    }).catch( error => { console.log(error); });
    },

    displayTemp: function( temp )
      {return Math.round(temp - 273.15)}
  },
}
</script>

<style lang="scss">
.status-bar {
  // display: flex;
}
</style>
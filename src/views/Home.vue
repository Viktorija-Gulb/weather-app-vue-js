<template>
    <div class='search-box'>
      <input type="text" class="search-bar" placeholder='Search...' />
    </div>
    <h1>hello</h1>
    <div class='top-section' v-if="typeof results != 'undefined'">
      <span>Weather forecast</span>
      <span>{{results.name}}</span>
      <h2>Day forecast</h2>
    </div>
    <div class='location-box' v-if="typeof results.main != 'undefined'">
      <div>{{displayTemp(results.main.temp)}}</div>
      <h2>{{results.name}}</h2>
      <p>weather</p>
    </div>

    <div class='bottom-section'>
      <div>Week forecast</div>
      <div>week forecast chart</div>
      <icon-base width="16" height="16" viewBox='0 0 51 51' icon-name="cloud"><Cloud /></icon-base>
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
import {API_KEY, CURRENT_WEATHER} from './../constants'
import axios from 'axios'

export default {
  name: 'Home',
  props: {
    API_KEY: String,
    CURRENT_WEATHER: String
  },
  components: {
    Cloud
  },
  // data: {
  //   results: []
  // },
  data () {
    return {
      results: {}
    }
  },
  mounted(){
    this.fetchData();
  }, 
  
  methods: {
    fetchData(){
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CURRENT_WEATHER}&appid=${API_KEY}`).then((response) => { 
        console.log(response.data.main)
         this.results = response.data
    }).catch( error => { console.log(error); });
    },

    displayTemp: function( temp )
      {return Math.round(temp - 273.15)}
  },
}
</script>
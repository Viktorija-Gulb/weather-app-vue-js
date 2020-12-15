<template>
  <h1>Search Page</h1>
  <div class='search-box'>
      <input type="text" class="search-bar" placeholder='Search...' />
    </div>

</template>

<script>

import axios from 'axios'
import {API_KEY, CURRENT_WEATHER} from './../constants'

export default {
  name: 'Search',
  props: {
    API_KEY: String,
    CURRENT_WEATHER: String
  },
  components: {

  },
  // data: {
  //   results: []
  // },
  data () {
    return {
      results: {},
     
    }
  },
  mounted(){
    // this.fetchData();
    this.weekForecast();
  }, 
  
  methods: {
    // fetchData(){
    //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CURRENT_WEATHER}&appid=${API_KEY}`).then((response) => { 
    //     // console.log('response ', response.data.weather[0].main)
    //      this.results = response.data
    // }).catch( error => { console.log(error); });
    // },

    weekForecast() {
       axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${CURRENT_WEATHER}&cnt=7&appid=${API_KEY}`).then((response) => { 
        // console.log('response ', response.data.weather[0].main)
         this.results = response.data
    }).catch( error => { console.log(error); });
    },

    displayTemp: function( temp )
      {return Math.round(temp - 273.15)}
  },
}
</script>
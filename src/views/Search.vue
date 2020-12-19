<template>
  <div class='wrapper'>
    <div class='header'>
      <div class='header__top-bar'>
        <button class='header__btn'><span>Done</span></button>
        <div class='header__location'>
          <span class='header__title'>Location</span>
          <span class='header__subtitle'>{{ currentWeather.name }}</span>
        </div>
      </div>
      <div class='header__search-box'>
      <div class='header__left-icon'>
        <icon-base width="30" height="30" viewBox='0 0 51 51'  icon-name="cloud" iconColor='#fff'><SearchIcon /></icon-base>
      </div>
        <input type="text" v-model="search" class="search-bar" placeholder='Search...' @chsnge="console.log(search)"/>
        <div class='header__right-icon'>
          <icon-base width="30" height="30" viewBox='0 0 51 51'  icon-name="cloud" iconColor='#fff'><CancelIcon /></icon-base>
        </div>
      </div>
    </div>
    <div>
      <div v-for="city in this.filteredCities" :key="city.id">
        <p>
          {{city.name}}
        </p>
      </div>
    </div>
    
  </div>
</template>

<script>

import SearchIcon from '../IconsAsSvg/SearchIcon'
import CancelIcon from '../IconsAsSvg/CancelIcon'
import getCurrentWeather from '../composables/getCurrentWeather'
// import json from '../cityList.json'

export default {
  name: 'Search',
  components: {
    SearchIcon,
    CancelIcon
  },

  setup() {
    const {currentWeather, forecast, error, load } = getCurrentWeather()
    load()
    return {currentWeather, forecast, error }
  },

  data() {
    return {
      search: '',
      cityList: [
        {
          id: 1,
          name: 'Vilnius'
        },
        {
          id: 2,
          name: 'Kaunas'
        },
        {
          id: 3,
          name: 'Trakai'
        }
      ]
    }
  },

  computed: {
    filteredCities(){
      return this.cityList.filter(city => {
        return city.name.toLowerCase().includes(this.search.toLowerCase())
       })
    }
  }
}


</script>
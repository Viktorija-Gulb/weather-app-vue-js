<template>
  <div class='wrapper'>
    <div class='header'>
      <div class='header__top-bar'>
        <button class='header__btn' @click="shareData()"><span>Done</span></button>
        <div class='header__location'>
          <span class='header__title'>Location</span>
          <span class='header__subtitle'>{{ currentWeather.name }}</span>
        </div>
      </div>
      <div class='header__search-box'>
      <div class='header__left-icon'>
        <icon-base width="30" height="30" viewBox='0 0 51 51'  icon-name="cloud" iconColor='#fff'><SearchIcon /></icon-base>
      </div>
        <input type="search" v-model="query" placeholder='Search...' @keyup.enter="submit" />
        <div class='header__right-icon'>  
          <icon-base width="30" height="30" viewBox='0 0 51 51'  icon-name="cloud" iconColor='#fff'><CancelIcon /></icon-base>
        </div>
      </div>
    </div>
    <div class="search-results">
      <ul class="results-list">
        <li class="results-list__item" v-for="city in this.filteredCities" :key="city.id" @click="selectCity(city.name)">{{city.name}}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>

import SearchIcon from '../IconsAsSvg/SearchIcon'
import CancelIcon from '../IconsAsSvg/CancelIcon'
import getCurrentWeather from '../composables/getCurrentWeather'

export default {
  name: 'Search',
  components: {
    SearchIcon,
    CancelIcon
  },

  setup() {
    const {currentWeather, error, load } = getCurrentWeather()
    load()
    return {currentWeather, error }
  },

  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      query: '',
      data: [],
      cityList: []

    }
  },

  mounted() {
    this.getList()
  },
  
  methods: {
    shareData(){
      this.$router.push({ name: 'Home', params: { data: this.query}})
    },
    selectCity(name){
      this.query = name;
    },
    async getList(){
      // const res = await fetch('http://localhost:8080/cityList.json');
      const res = await fetch('http://localhost:8080/data.json');
      const data = await res.json();
      this.data = data;
    }
  },

  computed: {
    filteredCities(){
      const filtered = this.data.filter(city => {
        return city.name.toLowerCase().includes(this.query.toLowerCase())
       })
        
       return filtered;
    }
  }
}

</script>
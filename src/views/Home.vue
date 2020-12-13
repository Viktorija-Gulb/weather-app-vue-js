<template>
    <div class='search-box'>
      <input type="text" class="search-bar" placeholder='Search...' />
    </div>
    <h1>hello</h1>
    <div class='top-section'>
      <span>Weather forecast</span>
      <span>Town</span>
      <h2>Day forecast</h2>
    </div>
    <div class='location-box'>
      <div>6 deg</div>
      <h2>Town</h2>
      <p>weather</p>
    </div>

    <div class='bottom-section'>
      <div>Week forecast</div>
      <div>week forecast chart</div>
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
import axios from 'axios'

export default {
  name: 'Home',
  props: {
  },

  data () {
    return {
      info: null
    }
  },
  mounted(){
    console.log('component is mount')
      axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      console.log('response data ', response.data)
    })
  }
  // mounted () {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  //     console.log('response data ', response.data)
  //   })
  // }

  
}
</script>
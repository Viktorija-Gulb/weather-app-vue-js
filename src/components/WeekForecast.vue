<template>
  <!-- <div v-if="this.forecast.list">
    <div class='chart' v-for="day in this.forecast.list.slice(0,5)" :key="day.dt">

      <div class='chart__column'>
        <div class='chart__weekDay'>{{ day.dt_txt }}</div>
        <div class='chart__icon'>icon</div>
        <div class='chart__temp'>
          <span class='chart__min'>{{displayTemp(day.main.temp_max)}}</span>
          <span class='chart__max'>{{displayTemp(day.main.temp_min)}}</span>
        </div>
        <div class='chart__graph'>gr</div>
      </div>
    </div>
  </div> -->
 
    <div class='chart' v-if="weekWeather">
      <div class='chart__column' v-for="day in weekWeather" :key="day.id">
        <div class='chart__weekDay'>{{ day.day}}</div>
        <div class='chart__icon'>
          <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><CloudySvg /></icon-base>
        </div>
        <div class='chart__temp'>
          <span class='chart__max'>{{ day.max_temp}}</span>
          <span class='chart__min'>{{ day.min_temp}}</span>
        </div>
        <div class='chart__graph'>
          <div class='chart__graph-max'></div>
          <div class='chart__graph-min'></div>
        </div>
      </div>
  </div>
</template>

<script>
import IconBase from '../IconsAsSvg/IconBase.vue'
import CloudySvg from '../IconsAsSvg/CloudySvg'
// import weekWeather from '../constants'

// import getForecast from '../composables/getForecast'

export default {
  name: 'WeekForecast',
  components: { IconBase, CloudySvg },
  data(){
    return {
      weekWeather: [
        {
          id: 1,
          day: 'MON',
          "max_temp": 8,
          "min_temp": 5,
        },
        {
          id: 2,
          day: 'TUE',
          "max_temp": 8,
          "min_temp": 5,
        },
        {
          id: 3,
          day: 'WED',
          "max_temp": 8,
          "min_temp": 5,
        },
        {
          id: 4,
          day: 'THU',
          "max_temp": 6,
          "min_temp": 2,
        },
        {
          id: 5,
          day: 'FRI',
          "max_temp": 8,
          "min_temp": 5,
        },
        {
          id: 6,
          day: 'SAT',
          "max_temp": 8,
          "min_temp": 5,
        },
        {
          id: 7,
          day: 'SUN',
          "max_temp": 8,
          "min_temp": 5,
        },
      ]
    }
  }

  // setup(){
  //   const {forecast, error, load } = getForecast()
  //   load()

  //   return {forecast, error }
  // },
  // methods: {
  //   displayTemp: function( temp )
  //     {return Math.round(temp - 273.15)}
  // },
  
}
</script>
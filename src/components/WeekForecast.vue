<template> 
    <div class='chart' v-if="weekData">
      <div class='chart__column' v-for="day in weekData" :key="day.dt">
        <div class='chart__weekDay'>{{ unixToWeekDay(day.dt)}}</div>
        <weather-switch-component :weather="day.weather[0].main" />
        <div class='chart__temp'>
          <span class='chart__max'>{{ displayTemp(day.temp.max) }}</span>
          <span class='chart__min'>{{ displayTemp(day.temp.min) }}</span>
        </div>
        <div class='chart__graph'>
          <div class='chart__graph-max' :style="{height: Math.sign(displayTemp(day.temp.max)) === '-1' ? '0px' : displayTemp(day.temp.max)+'px'}"></div>
          <div class='chart__graph-min' 
          :style="{height: Math.sign(displayTemp(day.temp.min)) === '-1' ? '0px' : displayTemp(day.temp.min)+'px'}"
          ></div>
        </div>
      </div>
    </div>
</template>

<script>
import '../styles/components/WeekForecast.scss'
import WeatherSwitchComponent from './WeatherSwitchComponent.vue'

export default {
  name: 'WeekForecast',
  components: {
    WeatherSwitchComponent
  },
  props: ['weekData'],

  methods: {
    unixToWeekDay(timeStamp){
      const dateObject = new Date(timeStamp * 1000)
      return dateObject.toLocaleString("en-US", {weekday: "short"}).toUpperCase();
    },
    displayTemp(temp){
      return Math.round(temp - 273.15);
    }
  }
}
</script>
<template> 
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

}
</script>
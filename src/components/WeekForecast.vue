<template> 
    <div class='chart' v-if="weekData">
      <div class='chart__column' v-for="day in weekData" :key="day.dt">
        <div class='chart__weekDay'>{{ unixToWeekDay(day.dt)}}</div>
        <div class='chart__icon'>
          <icon-base width="25" height="25" viewBox="0 0 42 27" icon-name="cloud"><CloudySvg /></icon-base>
        </div>
        <div class='chart__temp'>
          <span class='chart__max'>{{ displayTemp(day.temp.max) }}</span>
          <span class='chart__min'>{{ displayTemp(day.temp.min) }}</span>
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
import { API_KEY, URL_BASE } from '../constants'

export default {
  name: 'WeekForecast',
  components: { IconBase, CloudySvg },
  data(){
    return {
      weekData: []
    }
  },

  mounted(){
    this.getWeekData();
  },

  methods: {
    async getWeekData(){
      const res = await fetch(`${URL_BASE}/onecall?lat=54.687157&lon=25.279652&exclude=alerts,hourly,minutely&appid=${API_KEY}`);
      const data = await res.json();
      this.weekData = data.daily;
      console.log('response', this.weekData)
    },
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
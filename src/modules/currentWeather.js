import { reactive, toRefs } from "vue";
import {API_KEY, CURRENT_WEATHER} from './../constants'

const state = reactive({
  error: null,
  weather: null,
  loaded: false,
  loading: false,
});

export default function useCurrentWeather() {
  const load = async () => {
    if (!state.loaded) {
      try {
        const usersResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CURRENT_WEATHER}&appid=${API_KEY}`
        );
        const data = await usersResponse.json();
        this.weather = data;
        console.log('state ', state)
      } catch (e) {
        state.error = e;
      }
    }
  };

  return { ...toRefs(state), load };
}
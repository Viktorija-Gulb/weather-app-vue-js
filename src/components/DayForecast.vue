<template>
    <div class='search-box'>
      <input type="text" class="search-bar" placeholder='Search...' />
    </div>
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

<script>
export default {
  name: 'DayForecast'
}
</script>
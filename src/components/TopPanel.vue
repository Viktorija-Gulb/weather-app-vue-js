<template>
  <div class='status-bar'>
          <div class='status-bar__cloud'>
            {{ leftChildren }}
          </div>
          <div class='status-bar__location'>
            <span class='status-bar__title'>Weather forecast</span>
            <span class='status-bar__town'>{{ title }}</span>
          </div>
          <div class='status-bar__settings'>{{ right-children }}</div>
        </div>
</template>


<script>
// import Cloud from '../IconsAsSvg/Cloud'
// import SettingsSvg from '../IconsAsSvg/SettingsSvg'

export default {
  name: 'TopPanel',
  components: {
    // Cloud,
    // SettingsSvg
  },
  props: ['title', 'leftChildren', 'right-children']
}
</script>
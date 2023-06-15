<template>
  <div class="sonOfApp">
    <oo-button>🏀</oo-button>
    <!-- <oo-jsx-button>🌹</oo-jsx-button> -->
    <oo-icon color="blue" size="18px">oo-icon</oo-icon>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-arrow-left"></use>
    </svg>
    <OoArrow/>
  </div>
</template>

<script setup lang="ts">
import OoArrow from './components/IconArrow.vue'
defineOptions({name:'App'})
// const fs = require('fs')
</script>

<style lang="scss">
#app {
  height: 100vh;
  .sonOfApp {
    height: 100%;
  }
  .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
  }
}
</style>
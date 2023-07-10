<template>
  <div class="sonOfApp">
    <oo-button>🏀</oo-button>
    <!-- <oo-jsx-button>🌹</oo-jsx-button> -->
    <!-- <oo-icon color="blue" size="18px" v-drag> -->
    <oo-icon color="blue" size="18px" v-drag="{
      fn:getMoreData,
      ace:'ace'
    }" style="position: fixed">
      <Male/>
    </oo-icon>
    
  </div>
</template>

<script setup lang="ts">
import * as OoSvg from '@arsenal-ui/icons-vue'
import {ArrowLeft,Male} from '@arsenal-ui/icons-vue'
import vDrag from './directives/drag'
defineOptions({name:'App'})
const getMoreData = ()=>{
  console.log('xxxxx')
}
</script>

<style lang="scss">
#app {
  height: 100vh;
  .sonOfApp {
    height: 100%;
    // position: relative;
  }
  // .icon {
  //     width: 1em; height: 1em;
  //     vertical-align: -0.15em;
  //     fill: currentColor;
  //     overflow: hidden;
  // }
}
</style>
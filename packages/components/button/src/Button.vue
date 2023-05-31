<template>
  <button @click="()=>console.log('222')">
    <slot>按钮</slot>
  </button>
</template>
<!-- <script lang='ts' setup name='OoButton'>
  //  import { ref, reactive} from 'vue'
   
</script> -->
<script lang="ts">
export default{
  name: "OoButton"
}
</script>
<style scoped lang='scss'>
 
</style>

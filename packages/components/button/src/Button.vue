<template>
  <button @click="()=>console.log('222')">
    <slot>按钮</slot>
  </button>
</template>
<script lang='ts' setup>
defineOptions({ name: 'OoButton'})
   
</script>
<style scoped lang='scss'>
 
</style>

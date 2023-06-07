<template>
 <i :class="ns.b()" :style="style">
  <slot />
 </i>
</template>
<script lang='ts' setup>
import {useNamespace} from '@arsenal-ui/hooks'
import {iconProps} from './icon'
import {computed} from 'vue'
defineOptions({
  name:'OoIcon'
})
const props = defineProps(iconProps)
const style = computed(()=>{
  if(!props.size && !props.color) return {}
  return {

  }
})

const ns = useNamespace('icon')
   
</script>
<style scoped lang='scss'>
 
</style>

<template>
 <i :class="ns.b()" :style="style">
  <slot />
 </i>
</template>
<script lang='ts' setup>
import {useNamespace} from '@arsenal-ui/hooks'
import {iconProps} from './icon'
import {computed} from 'vue'
import {addUnit, isUndefined} from '@arsenal-ui/utils'
import type { CSSProperties } from 'vue'
import '@arsenal-ui/theme-chalk/src/index.scss'
defineOptions({
  name:'OoIcon'
})
const props = defineProps(iconProps)
const style = computed<CSSProperties>(()=>{
  if(!props.size && !props.color) return {}
  return {
    fontSize: isUndefined(props.size) ? '' : addUnit(props.size),
    'color': props.color
  }
})

const ns = useNamespace('icon')
   
</script>
<style scoped lang='scss'>
// .oo-icon{
//   :deep(svg){
//     height: 2em;
//     width: 2em;
//   }
// }
</style>

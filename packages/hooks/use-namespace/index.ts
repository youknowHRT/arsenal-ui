import {computed, unref} from 'vue'

export const defaultNamespace = 'oo'

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier:string
)=>{
  let cls = `${namespace}-${block}`
  if(blockSuffix){
    cls+=`-${blockSuffix}`
  }
  return cls
}

export const useNamespace = (block: string) =>{
  const namespace = computed(()=>defaultNamespace)
  const b =(blockSuffix='')=>
    _bem(unref(namespace),block,blockSuffix,'','')
  
  return {
    namespace,
    b
  }
}
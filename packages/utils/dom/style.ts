import {isNumber, isStringNumber,isString} from '../types'
export const addUnit = (value?: string|number, defaultUnit= 'px') =>{
  if(!value)return ''
  if(isNumber(value) || isStringNumber(value)){
    return `${value}${defaultUnit}`
  }else if(isString(value)){
    return value
  }
}

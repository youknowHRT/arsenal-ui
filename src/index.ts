// import {createApp} from 'vue'
// import { createApp } from "vue/dist/vue.esm-browser";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import ArsenalUI from '../src/entry'

// import SButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

createApp({
  template:`
    <div style="margin-bottom:20px;">
      <SButton color="blue">主要按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
    <div>
         <SButton color="blue" round plain icon="search" ></SButton>
         <SButton color="green" round plain icon="edit" ></SButton>
         <SButton color="gray" round plain icon="check" ></SButton>
         <SButton color="yellow" round plain icon="message" ></SButton>
         <SButton color="red" round icon="delete" ></SButton>
     </div>
    `
  })
 .use(ArsenalUI)
 .mount("#app");
 
const iconFiles = import.meta.glob('./*.svg', { eager: true });
import { install } from 'arsenal-plus';
import { h,App} from 'vue'
for(let key in iconFiles){
  console.log(key,'🍑')
  console.log(iconFiles[key],'🍑🍑')
}
const icons = Object.keys(iconFiles).map((key) => {
  const name = key.replace('./', '').replace('.svg', '');
  console.log(name,'🥭',iconFiles[key])
  // app.component(name, iconFiles[key]);
  // return h('div', { class: 'icon',id:name } )
    // return App.component(name, iconFiles[key])
});
console.log(icons,'🍑🍑🍑')
export default icons
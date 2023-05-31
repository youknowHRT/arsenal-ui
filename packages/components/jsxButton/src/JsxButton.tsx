import {defineComponent} from 'vue'

export default defineComponent({
  name: 'OoJsxButton',
  // render(){
  //   return <button>jsx-button</button>
  // }
  setup: (context)=>{
    return ()=> <button onClick={()=>console.log('111')}>
      {/* { context.slots.default?.() } */}
      {/* {context} */}
      🍋
    </button>
  }
})
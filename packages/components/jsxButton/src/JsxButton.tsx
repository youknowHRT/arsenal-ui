import {defineComponent} from 'vue'

export default defineComponent({
  name: 'OoJsxButton',
  // render(){
  //   return <button>jsx-button</button>
  // }
  setup: (context)=>{
    return ()=> <button>
      {/* { context.slots.default?.() } */}
      {/* {context} */}
      🍋
    </button>
  }
})
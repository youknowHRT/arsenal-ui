import { DirectiveBinding } from 'vue'
interface DragData {
  isDragging: boolean;
  startX: number;
  startY: number;
  initialLeft: number;
  initialTop: number;
}
export default{
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const data: DragData = {
      isDragging: false,
      startX: 0,
      startY: 0,
      initialLeft: 0,
      initialTop: 0
    }
    el.onmousedown = (event: MouseEvent) => {
      // if (!binding.value) {
      //   return;
      // }

      event.preventDefault();
      data.isDragging = true;
      data.startX = event.clientX;
      data.startY = event.clientY;
      const { left, top } = el.getBoundingClientRect();
      data.initialLeft = left;
      data.initialTop = top;
      document.onmousemove = (event: MouseEvent) => {
        if (data.isDragging) {
          // 计算鼠标的位移量
          const offsetX = event.clientX - data.startX;
          const offsetY = event.clientY - data.startY;
          // 更新元素的位置
          el.style.left = `${data.initialLeft + offsetX}px`;
          el.style.top = `${data.initialTop + offsetY}px`;
        }
      };
      document.onmouseup = () => {
        if (data.isDragging) {
          // 设置拖动状态为false
          data.isDragging = false;
          // 移除事件监听器
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  },
}
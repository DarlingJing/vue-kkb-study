import Vue from 'vue';
import Notice from '@/components/Notice'
export default function create(Component, props){
  const Constructor = Vue.extend(Component);
  const comp = new Constructor({propsData: props});
  comp.$mount();
  document.body.appendChild(comp.$el);

  // 删除函数
  comp.remove = () => {
    document.body.removeChild(comp.$el);
    vm.$destroy();
  }
  return comp;
} 

// export default {
//   install(Vue){
//     Vue.prototype.$notice = function (options){
//       const comp = create(Notice, props);
//       comp.show();
//       return comp;
//     }
//   }
// }
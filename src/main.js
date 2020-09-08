import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueScrollReveal from 'vue-scroll-reveal';
// reset.css 全局重置样式
import '../src/assets/style/reset.css'
// 动画效果
import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)
// 使用 element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  class: 'scroll-item', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1,
  //distance: '10px',
  mobile: false
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

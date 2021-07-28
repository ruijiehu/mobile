import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'normalize.css/normalize.css'
import '@/style/reset.less'
import { Tabbar, TabbarItem, Loading } from 'vant'

// 消除移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)
// 实现active效果
document.body.addEventListener('touchstart', function () {})
const app = createApp(App)
app
  .use(store)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Loading)
  .use(router)
  .mount('#app')

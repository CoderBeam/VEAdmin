import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@icon-park/vue/styles/index.css'
import VueI18n from "vue-i18n"
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN', // 标识当前所用的语言
  messages: {
    // 将定义好的语言包导入
    'zh-CN': require('./assets/lang/zh.js'), // 已经定义好的中文包
    'en-US': require('./assets/lang/en.js') // 已经定义好的英文包
  }
})
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

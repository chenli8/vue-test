import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import codemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'


Vue.config.productionTip = false
Vue.use(codemirror, /* { 
  options: { theme: 'base16-dark', ... },
  events: ['scroll', ...]
} */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})   

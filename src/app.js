import Vue from 'vue'
import Cookies from 'js-cookie'

if (!Cookies.get('cookie')) {
  Cookies.set('cookie', 'secret')
}

console.log(Cookies.get('cookie'))

import App from './App'

Vue.config.productionTip = false

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})

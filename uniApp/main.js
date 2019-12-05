import Vue from 'vue'
import App from './App'
import globalVariable from './globalVariable.js'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$globalVariable = globalVariable;
const app = new Vue({
    ...App
})
app.$mount()

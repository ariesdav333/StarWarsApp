import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import vueAxios from 'vue-axios'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

Axios.defaults.baseURL = "https://swapi.co/api/";

Vue.use(Vuelidate)
Vue.use(vueAxios, Axios)
Vue.use(Vuelidate)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

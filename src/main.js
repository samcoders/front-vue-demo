import Vue from 'vue'
//import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './lang'
import './icons'
import './styles/index.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');

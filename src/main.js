import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper )
Vue.use(Vuetify)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

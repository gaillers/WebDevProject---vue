import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import '../node_modules/swiper/swiper.scss'
 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

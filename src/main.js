import Vue from 'vue';
import App from './App.vue';
import onepx from './directive/onepx';
// import onepx from 'vue-onepx'

Vue.use(onepx);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

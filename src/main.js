import Vue from 'vue';
import App from './App.vue';
import onepx from './directive/onepx';

Vue.use(onepx);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

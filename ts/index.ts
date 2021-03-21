import Vue from 'vue';
import App from './pages/App';
import router from './router/index';

import '../scss/styles';

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});

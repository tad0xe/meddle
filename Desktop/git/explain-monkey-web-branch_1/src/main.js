import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VModal from 'vue-js-modal';
import 'vue-js-modal/dist/styles.css'
// import "@/styles/index.scss"

Vue.use(VModal, {
  dynamicDefaults: {
    dialog: true,
    draggable: true,
    resizable: true,
    height: 'auto',
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

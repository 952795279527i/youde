import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/my";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");

import Vue from "vue";
import VueRouter from "vue-router";
import Car from "../components/Car.vue";
import Count from "../components/Count.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Car,
  },
  {
    path: "/count",
    component: Count,
  },
];
export default new VueRouter({
  routes,
});

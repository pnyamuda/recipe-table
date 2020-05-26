import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App.vue";
import VueAgile from 'vue-agile';

 
Vue.use(VueAgile)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

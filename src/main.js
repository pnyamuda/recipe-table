import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App.vue";
import VueAgile from 'vue-agile';
import VueRouter from 'vue-router';
import theRouter from './routes';



export const eventBus = new Vue();

Vue.use(VueRouter)

Vue.use(VueAgile)


const router = new VueRouter({
    routes: theRouter,
    mode:"history"
})

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount("#app");



import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import Vue from "vue";
import App from "./App.vue";
import VueAgile from 'vue-agile';
import VueRouter from 'vue-router';
import theRouter from './routes';

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// register VueFusionCharts component
Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)


export const eventBus = new Vue();

Vue.use(VueRouter)

Vue.use(VueAgile)


const router = new VueRouter({
    routes: theRouter
})

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router,
}).$mount("#app");

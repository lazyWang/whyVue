import Vue from "vue";
import vueRouter from "vue-router";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(vueRouter);
Vue.use(ElementUI);

import Appcompent from "./component/App.vue";
import routerConfig from './router';
import api from "./js/api_config";
import axios from './js/axios_config';
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
    el:"#app",
    render: c => c(Appcompent),
    router:new vueRouter(routerConfig)
})
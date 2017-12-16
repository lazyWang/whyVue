import Vue from "vue";
import Appcompent from "./component/App.vue";

new Vue({
    el:"#app",
    render: c => c(Appcompent)
})
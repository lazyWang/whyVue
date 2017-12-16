import homeComponent from "../component/home/home.vue";
import loginComponent from "../component/login/login.vue";

export default{
    routes:[
        {path:"/",redirect:"/home"},
        { name: "home", path: '/home', component: homeComponent},
        { name: 'login', path: "/login", component: loginComponent}
    ]
}
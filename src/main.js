import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// install bootstrap first
import 'bootstrap/dist/css/bootstrap.css';
// Importing the bootstrapvue library
import BootstrapVue from 'bootstrap-vue';


Vue.config.productionTip = false;
Vue.use(BootstrapVue)





createApp(App).use(router).mount("#app");

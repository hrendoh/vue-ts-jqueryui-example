import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// declare const $: any;
// import "jquery-ui";

new Vue({
  render: h => h(App)
}).$mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/vue-router";
import pinia from "./plugins/pinia";

createApp(App).use(router).use(pinia).mount("#app");

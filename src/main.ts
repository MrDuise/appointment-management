import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import { createPinia } from "pinia";
import router from "./router";

// Create the Vue app
const app = createApp(App);

// Use PrimeVue globally
app.use(PrimeVue);

// Use the router
app.use(router);

//use pinia
app.use(createPinia);

// Mount the app to the DOM
app.mount("#app");

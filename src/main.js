import { createApp } from "vue";
import App from "./App.vue";
import components from "@/components/UI/index.js";
import router from "@/pages/router/router.js";
import './index.css'

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.use(router);
app.mount("#app");
app.config.unwrapInjectedRef = true;

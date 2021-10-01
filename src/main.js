import { createApp } from "vue";
import App from "./App.vue";
import VueTyperComponent from "./vue-typer/components/VueTyper.vue";

export const VueTyper = VueTyperComponent;

const app = createApp(App);

app.component(VueTyperComponent);

app.mount("#app");

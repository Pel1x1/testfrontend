import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Cryptoicon from 'vue-cryptoicon';
import icons from 'vue-cryptoicon/src/icons';

const app = createApp(App);

Cryptoicon.add(icons);
app.use(Cryptoicon);
app.use(router);

app.mount("#app");

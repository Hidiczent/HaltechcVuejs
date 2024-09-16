import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import i18n from "./common/configuration/i18n.config";
const pinia = createPinia();

// ຄ່າເລິີ່ມຕົ້ນຂອງພາສາ

const tenancy = "pao";
const currentHostname = window.location.hostname;
const expectedHostname = `${tenancy}.localhost`;

if (currentHostname !== expectedHostname) {
  console.log("not...");
  window.location.href = `http://${expectedHostname}:5173/test`;
} else {
  console.log("here...");
  const app = createApp(App);
  app.use(i18n);
  app.use(pinia);
  app.use(router);
  app.mount("#app");
}

// app.use(pinia)

import { createRouter, createWebHistory } from "vue-router";
import Test from "../Views/Test.vue";
// import User from "../Views/User.vue";
import TestEvent from "../Views/TestEvent.vue";
import StyleBinding from "../Views/StyleBinding.vue";
import Properties from "../Views/Properties.vue";
import Login from "../Views/Login.vue";
import TestSlots from "../Views/TestSlots.vue";
import ListRendering from "../Views/ListRendering.vue";
import Axios from "../Views/Axios.vue";
// import PiniaExample from "../Views/PiniaExample.vue";
import ListRenderingNew from "../Views/ListRenderingNew.vue";
import TodoList from "../Views/TodoList.vue";
import { countryRoute } from "../Views/Module/admin/router";
// ໄດ້ມາຈາກ createWebHistory  port
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      children: [
        { path: "test", component: Test },
        // { path: "user", component: User },
        { path: "event", component: TestEvent },
        { path: "Binding", component: StyleBinding },
        { path: "properties", component: Properties },
        { path: "login", component: Login },
        { path: "slot", component: TestSlots },
        { path: "list", component: ListRendering },
        { path: "axi", component: Axios },
        { path: "todolist", component: TodoList },
        // { path: "pi", component: PiniaExample },
        { path: "newlist", component: ListRenderingNew },
        ...countryRoute,
      ],
    },
  ],
});
export default router;

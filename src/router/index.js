import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import LogOut from "../views/LogOut.vue";
import ListingsIndex from "../views/ListingsIndex.vue";
import ListingsNew from "../views/ListingsNew.vue";
import ListingsShow from "../views/ListingsShow.vue";
import ConversationsShow from "../views/ConversationsShow.vue";
import ConversationsIndex from "../views/ConversationsIndex.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/logout",
    name: "LogOut",
    component: LogOut,
  },
  {
    path: "/listings",
    name: "ListingsIndex",
    component: ListingsIndex,
  },
  {
    path: "/listings/new",
    name: "ListingsNew",
    component: ListingsNew,
  },
  {
    path: "/listings/:id",
    name: "ListingsShow",
    component: ListingsShow,
  },
  {
    path: "/conversations",
    name: "ConversationsIndex",
    component: ConversationsIndex,
  },
  {
    path: "/conversations/:id",
    name: "ConversationsShow",
    component: ConversationsShow,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

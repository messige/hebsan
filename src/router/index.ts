import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  {
    path: "/abcFeasts",
    name: "ABCFeasts",
    component: () => import("../views/ABCFeasts.vue"),
  },
  {
    path: "/sancta",
    name: "Sancta",
    component: () => import("../views/Sancta.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/OfficeList/HoraMajor/:feast/:office",
    name: "HoraMajor",
    props: true,
    component: () => import("../views/HoraMajor.vue"),
  },
  {
    path: "/HoraMajorTR/:feast/:office/:language",
    name: "HoraMajorTR",
    component: () => import("../views/HoraMajorTR.vue"),
    props: true,
  },
  {
    path: "/HoraMinor/:feast/:office",
    name: "HoraMinor",
    component: () => import("../views/HoraMinor.vue"),
    props: true,
  },
  {
    path: "/HoraMinorTR/:feast/:office/:language",
    name: "HoraMinorTR",
    component: () => import("../views/HoraMinorTR.vue"),
    props: true,
  },
  {
    path: "/Completorium/:feast",
    name: "Completorium",
    component: () => import("../views/Completorium.vue"),
    props: true,
  },
  {
    path: "/CompletoriumTR/:feast/:office/:language",
    name: "CompletoriumTR",
    component: () => import("../views/CompletoriumTR.vue"),
    props: true,
  },
  { path: "/toni", name: "Toni", component: () => import("../views/Toni.vue") },
  {
    path: "/officeList",
    name: "OfficeList",
    component: () => import("../views/OfficeList.vue"),
    props: true,
  },
  {
    path: "/piecesForAFeast/:feastIndex/:feast/:feastDate/:feastAnnoABC",
    name: "PiecesForAFeast",
    component: () => import("../views/PiecesForAFeast.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;

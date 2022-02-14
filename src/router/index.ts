import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/HomePage" },
  { path: "/HomePage", name: "HomePage", component: HomePage },
  {
    path: "/ABCFeasts",
    name: "ABCFeasts",
    component: () => import("../views/ABCFeasts.vue"),
  },
  {
    path: "/HebdomadaSancta",
    name: "HebdomadaSancta",
    component: () => import("../views/HebdomadaSancta.vue"),
  },
  {
    path: "/AboutPage",
    name: "AboutPage",
    component: () => import("../views/AboutPage.vue"),
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
    // path: "/Completorium/:feast",
    path: "/AdCompletorium",
    name: "AdCompletorium",
    component: () => import("../views/AdCompletorium.vue"),
    props: true,
  },
  {
     //path: "/CompletoriumTR/:feast/:office/:language",
    path: "/CompletoriumTR",
    name: "CompletoriumTR",
    component: () => import("../views/CompletoriumTR.vue"),
    props: true,
  },
  { path: "/ToniCommunes", 
    name: "ToniCommunes", 
    component: () => import("../views/ToniCommunes.vue") 
  },
  {
    path: "/OfficeList",
    name: "OfficeList",
    component: () => import("../views/OfficeList.vue"),
    props: true,
  },
  {
    // path: "/piecesForAFeast/:feastIndex/:feast/:feastDate/:feastAnnoABC",
    path: "/piecesForAFeast",
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

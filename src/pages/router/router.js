import MainPage from "@/pages/MainPage.vue";
import GalleriesList from "@/pages/GalleriesList.vue";
import About from "@/pages/About.vue";
import GalleryPage from "@/pages/GalleryPage.vue";
import NotFound from "@/pages/NotFound.vue";
import WelcomePage from "@/pages/WelcomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
    meta: {
      layout: "WelcomeLayout",
    },
  },
  {
    path: "/main",
    name: "mainPage",
    component: MainPage,
  },

  {
    path: "/GalleriesList_:name",
    name: "galleriesList",
    component: GalleriesList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/gallerieslist_:name/:galleryid",
    name: "gallerypage",
    component: GalleryPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "unknownPage",
    redirect: "/404",
  },
  {
    path: "/404",
    name: "PNF",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory("/Gallery_on_VUE3/"),
  routes,
});

export default router;

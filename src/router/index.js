import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "posts",
      component: PostsView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("../views/PostView.vue"),
    },
    {
      path: "/authors",
      name: "authors",
      component: () => import("../views/AuthorsView.vue"),
    },
    {
      path: "/author/:username",
      name: "author",
      component: import("../views/AuthorView.vue"),
    },
  ],
});

export default router;

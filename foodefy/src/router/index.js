import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/admin/Dashboard.vue";
import Login from "../views/admin/Login.vue"; // adjust as needed

const routes = [
  { path: "/admin/login", component: Login },
  {
    path: "/admin/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("admin_token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // redirect to login if not authenticated
  } else {
    next(); // allow navigation
  }
});

export default router;

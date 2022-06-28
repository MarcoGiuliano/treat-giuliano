const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/IndexPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      {
        path: "influencers",
        component: () => import("pages/InfluencersPage.vue"),
      },
      {
        path: "perfil",
        component: () => import("pages/InfluencerPerfilPage.vue"),
      },
      {
        path: "cargar",
        component: () => import("pages/CargarPage.vue"),
      },
      {
        path: "retar",
        component: () => import("pages/RetarPage.vue"),
      },
      {
        path: "reto",
        component: () => import("pages/InfluencerRetoPage.vue"),
      },
      {
        path: "perfil-user",
        component: () => import("pages/PerfilUserPage.vue"),
      },
      {
        path: "",
        component: () => import("pages/WhitePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

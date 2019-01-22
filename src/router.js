import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const routes = [
  {
    path: "/home",
    name: "home",
    component: resolve => require(["./views/home/home.vue"], resolve),
    meta: {
      title: "微信"
    }
  },
  {
    path: "/phone",
    name: "phone",
    component: resolve => require(["./views/phone/phone.vue"], resolve),
    meta: {
      title: "通讯录"
    }
  },
  {
    path: "/find",
    name: "find",
    component: resolve => require(["./views/find/find.vue"], resolve),
    meta: {
      title: "发现"
    }
  },
  {
    path: "/my",
    name: "my",
    component: resolve => require(["./views/my/my.vue"], resolve),
    meta: {
      title: "我"
    }
  },
  {
    path: "*",
    redirect: "/home"
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;

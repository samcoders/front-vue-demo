import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '../layout'
import i18n from '../lang'

Vue.use(Router);
NProgress.configure({showSpinner: false});
const app_title = i18n.t('app.name');

// 2. 定义路由
// 每个路由应该映射一个组件。
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('../view/home'),
        meta: {
          title: 'home'
        }
      }
    ]
  },

  {
    name: 'login',
    path: '/login',
    component: () => import('../view/login'),
    meta: {
      title: 'login'
    }
  },

  {
    name: '404',
    path: '/404',
    component: () => import('../view/404'),
    meta: {
      title: '404'
    }
  },

  //通配符路由放最后
  {
    path: '*', //通常用于404错误
    redirect: '/404' //重定向
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new Router({
  routes // (缩写) 相当于 routes: routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  let title = to.meta && to.meta.title;
  if (title) {
    let hasTitle = i18n.te(`router.${title}`);
    if (hasTitle) {
      title = i18n.t(`router.${title}`);
      title = `${title} - ${app_title}`
    }

    document.title = title;
  }
  next();
});

router.afterEach(() => {
  NProgress.done()
});

export default router;
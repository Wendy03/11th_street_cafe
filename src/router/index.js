import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/LayoutView.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/frontend/HomeView.vue'),
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/frontend/AboutView.vue'),
      },
      {
        path: '/information',
        name: 'information',
        component: () => import('../views/frontend/InformationView.vue'),
      },
      {
        path: '/follows',
        name: 'follows',
        component: () => import('../views/frontend/FollowsView.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/frontend/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/frontend/ProductView.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/frontend/CartView.vue'),
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/frontend/OrderView.vue'),
      },
      {
        path: '/checkout/:orderId',
        name: 'checkout',
        component: () => import('../views/frontend/CheckoutView.vue'),
      },
      {
        path: '/articles',
        name: 'articles',
        component: () => import('../views/frontend/ArticlesView.vue'),
      },
      {
        path: '/article/:id',
        name: 'article',
        component: () => import('../views/frontend/ArticleView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginAmin.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('@/views/backend/AdminProducts.vue'),
      },
      {
        path: 'orders',
        component: () => import('@/views/backend/AdminOrders.vue'),
      },
      {
        path: 'coupons',
        component: () => import('@/views/backend/AdminCoupons.vue'),
      },
      {
        path: 'articles',
        component: () => import('@/views/backend/AdminArticles.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;

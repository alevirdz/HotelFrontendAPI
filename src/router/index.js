import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import HistoryPage from '@/views/HistoryPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RecoveryPassword from '@/views/RecoveryPassword.vue';
import ResetPasswordByLink from '@/views/ResetPasswordByLink.vue';
import NotFoundPage from '@/views/404Page.vue';

import Main from '@/views/admin/Main.vue';
import DashboardModule from '@/views/admin/DashboardModule.vue';
import CatalogModule from '@/views/admin/CatalogModule.vue';
import CustomersModule from '@/views/admin/CustomersModule.vue';
import ProductsModule from '@/views/admin/ProductsModule.vue';
import ProfileModule from '@/views/admin/ProfileModule.vue';
import SettingsModule from '@/views/admin/SettingsModule.vue';
import UsersListModule from '@/views/admin/UsersListModule.vue';
import UsersRolesModule from '@/views/admin/UsersRolesModule.vue';
import ReservationModule from '@/views/admin/ReservationModule.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/history',
    name: 'HistoryPage',
    component: HistoryPage,
  },
  {
    path: '/About',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/recovery-password',
    name: 'RecoveryPassword',
    component: RecoveryPassword,
  },
    {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPasswordByLink,
  },
  {
    path: '/admin',
    name: 'Main',
    redirect: '/admin/dashboard',
    component: Main,
    children: [
      {
        path: '/admin/dashboard',
        name: 'DashboardModule',
        component: DashboardModule,
      },
      {
        path: '/admin/catalog',
        name: 'CatalogModule',
        component: CatalogModule,
      },
      {
        path: '/admin/reservation',
        name: 'ReservationModule',
        component: ReservationModule,
      },
      {
        path: '/admin/customers',
        name: 'CustomersModule',
        component: CustomersModule,
      },
      {
        path: '/admin/products',
        name: 'ProductsModule',
        component: ProductsModule,
      },
      {
        path: '/admin/profile',
        name: 'ProfileModule',
        component: ProfileModule,
      },
      {
        path: '/admin/settings',
        name: 'SettingsModule',
        component: SettingsModule,
      },
      {
        path: '/admin/users-list',
        name: 'UserListModule',
        component: UsersListModule,
      },
      {
        path: '/admin/users-roles',
        name: 'UserRolesModule',
        component: UsersRolesModule,
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('sessionToken') !== null;
  if (to.path.startsWith('/admin') && !isAuthenticated) {
    next({ name: 'LoginPage' });
  } else {
    next();
  }
});

export default router;

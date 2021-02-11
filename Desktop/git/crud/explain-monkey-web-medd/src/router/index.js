import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ExpertsPage from '../views/ExpertsPage.vue'
import ExpertRegistration from '../views/ExpertRegistration.vue'
import UserDashboard from '../views/UserDashboard'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/experts',
    name: 'experts-page',
    component: ExpertsPage,
  },
  {
    path: '/expert-registration/:displayedComponent',
    name: 'expert-registration',
    component: ExpertRegistration,
  },
  {
    path: '/dashboard/user/:displayedComponent',
    name: 'user-dashboard',
    component: UserDashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home';
import About from './About';
import Movie from './Movie';
import NotFound from './NotFound';

export default createRouter({
  // Hash
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages
  // https://google.com/
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/movie/:movieId',
      component: Movie,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});
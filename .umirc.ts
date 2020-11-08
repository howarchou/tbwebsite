import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    { path: '/teambuilding', component: '@/pages/teambuilding/index' },
    {
      path: '/teambuilding-detail',
      component: '@/pages/teambuilding/detail/detail',
    },
    {
      path: '/partner',
      component: '@/pages/partners/index',
    },
    {
      path: '/about',
      component: '@/pages/about/index',
    },
  ],
  devServer: {
    port: 6677,
  },
});

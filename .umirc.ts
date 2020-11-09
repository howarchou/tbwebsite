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
    {
      path: '/case',
      component: '@/pages/case/index',
    },
    {
      path: '/case-detail',
      component: '@/pages/case/detail/index',
    },
  ],
  devServer: {
    port: 6677,
  },
});

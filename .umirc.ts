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
  ],
  devServer: {
    port: 6677,
  },
});

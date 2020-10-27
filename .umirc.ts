import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/home/index' },
    { path: '/teambuilding', component: '@/pages/teambuilding/index' },
  ],
  devServer: {
    port: 6677,
  },
});

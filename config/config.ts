/**
 *  Created by pw on 2020/11/14 4:28 下午.
 */
import { defineConfig } from 'umi';
import proxyConfig from './proxy';
const { environment } = process.env;

export default defineConfig({
  title: '鱼跃团建',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/layout/index',
      routes: [
        { path: '/', component: '@/pages/home/index' },
        {
          path: '/teambuilding',
          component: '@/pages/teambuilding/index',
          extra: true,
        },
        {
          path: '/teambuilding-teambuilding-detail',
          component: '@/pages/teambuilding/teambuilding-detail/index',
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
    },
  ],
  devServer: {
    port: 6677,
  },
  proxy: proxyConfig[environment || 'dev'],
  define: {
    'process.env.environment': 'dev',
  },
  hash: true,
});

/**
 *  Created by pw on 2020/11/14 4:28 下午.
 */
import { defineConfig } from 'umi';

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
    },
  ],
  devServer: {
    port: 6677,
  },
  proxy: {
    '/h5/': {
      target: 'http://tms.cicisoft.cn',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/pre/': {
      target: 'http://tms.cicisoft.cn',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
});

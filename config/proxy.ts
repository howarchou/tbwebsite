/**
 *  Created by pw on 2020/11/23 6:31 下午.
 */

export default {
  dev: {
    '/h5/': {
      target: 'http://tms.cicisoft.cn',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/pre/': {
      target: 'http://tms.cicisoft.cn',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
} as any;

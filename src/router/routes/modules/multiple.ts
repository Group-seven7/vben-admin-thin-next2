import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/multiple',
  name: 'multiple',
  component: LAYOUT,
  redirect: '/multiple/analysis',
  meta: {
    orderNo: 9,
    icon: 'ic:sharp-people',
    title: '多页模块',
  },
  children: [
    {
      path: 'foo',
      name: 'Foo',
      component: () => import('/@/views/multiple/foo/foo.vue'),
      meta: {
        // affix: true,
        title: 'Foo页面',
      },
    },
    {
      path: 'bar',
      name: 'Bar',
      component: () => import('/@/views/multiple/bar/bar.vue'),
      meta: {
        title: 'Bar页面',
      },
    },
  ],
};

export default dashboard;

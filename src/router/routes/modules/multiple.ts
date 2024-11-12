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
    {
      path: 'meeting1',
      name: 'Meeting1',
      component: () => import('/@/views/multiple/meeting1/meeting1.vue'),
      meta: {
        title: 'meeting1页面',
      },
    },
    {
      path: 'meeting2',
      name: 'Meeting2',
      component: () => import('/@/views/multiple/meeting2/meeting2.vue'),
      meta: {
        title: 'meeting2页面',
      },
    },
    {
      path: 'meeting3',
      name: 'Meeting3',
      component: () => import('/@/views/multiple/meeting3/meeting3.vue'),
      meta: {
        title: 'meeting3页面',
      },
    },
    {
      path: 'meeting4',
      name: 'Meeting4',
      component: () => import('/@/views/multiple/meeting4/meeting4.vue'),
      meta: {
        title: 'meeting4页面',
      },
    },
    {
      path: 'meeting5',
      name: 'Meeting5',
      component: () => import('/@/views/multiple/meeting5/meeting5.vue'),
      meta: {
        title: 'meeting5页面',
      },
    },
    {
      path: 'meeting6',
      name: 'Meeting6',
      component: () => import('/@/views/multiple/meeting6/meeting6.vue'),
      meta: {
        title: 'meeting6页面',
      },
    },
    {
      path: 'meeting',
      name: 'Meeting',
      component: () => import('/@/views/multiple/meeting/meeting.vue'),
      meta: {
        title: 'meeting页面',
      },
    },
    {
      path: 'meeting7',
      name: 'Meeting7',
      component: () => import('/@/views/multiple/meeting7/meeting7.vue'),
      meta: {
        title: 'meeting7页面',
      },
    },
  ],
};

export default dashboard;

import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const performance: AppRouteModule = {
  path: '/performance',
  name: 'performance',
  component: LAYOUT,
  redirect: '/performance',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '业绩管理',
  },
  children: [
    {
      path: '/performance/ledger',
      name: 'ledger',
      redirect: '/performance/ledger/',
      component: ()=> import('/@/views/performance/ledger/commission.vue'),
      meta: {
        // affix: true,
        title: '业绩台账',
      },
      children: [
        {
          path: '/performance/ledger/lent',
          name: 'lent',
          meta: {
            title: '租赁提成明细',
          },
          component: () => import('/@/views/performance/ledger/commission.vue'),
        },
        {
          path: '/performance/ledger/summary',
          name: 'summary',
          meta: {
            title: '租赁提成汇总',
          },
          component: () => import('/@/views/performance/ledger/summary.vue'),
        },
        {
          path: '/performance/ledger/history',
          name: 'history',
          meta: {
            title: '租赁提成历史',
          },
          component: () => import('/@/views/performance/ledger/history.vue'),
        },
      ],
    },
    {
      path: '/performance/configuration',
      name: 'configuration',
      meta: {
        title: '分佣配置',
      },
      component: ()=> import('/@/views/performance/configuration.vue'),
    },
  ],
};

export default performance;

import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

import { defHttp } from '/@/utils/http/axios';

export function getMultipleData(){
  return defHttp.get({url:'/multiple'});
}


const dashboard: AppRouteModule = {
  path: '/multiple',
  name: 'multiple',
  component: LAYOUT,
  redirect: '/multiple/analysis',
  meta: {
    orderNo: 9,
    icon: 'ic:sharp-people',
    title: '数据分析综合终端',
  },
  children: [
    {
      path: 'Financial ledgers',
      name: 'Financial ledgers',
      component: () => import('/@/views/multiple/Financial ledgers/financial ledgers.vue'),
      meta: {
        // affix: true,
        title: '财务台账',
      },
    },
    {
      path: 'Lease ledger',
      name: 'Lease ledger',
      component: () => import('/@/views/multiple/Lease ledger/lease ledger.vue'),
      meta: {
        title: '租贷台账',
      },
    },
    {
      path: 'Investment data',
      name: 'Investment data',
      component: () => import('/@/views/multiple/Investment data/Investment data.vue'),
      meta: {
        // affix: true,
        title: '欠租欠款报表',
      },
    },
    {
      path: 'Rent arrears',
      name: 'Rent arrears',
      component: () => import('/@/views/multiple/Rent arrears/Rent arrears.vue'),
      meta: {
        // affix: true,
        title: '招商数据报表',
      },
    },
    {
      path: 'Attract customers',
      name: 'Attract customers',
      component: () => import('/@/views/multiple/Attract customers/Attract customers.vue'),
      meta: {
        // affix: true,
        title: '招商客户画像',
      },
    },
    {
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('/@/views/multiple/dashboard/index.vue'),
      meta: {
        // affix: true,
        title: '数据分析',
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

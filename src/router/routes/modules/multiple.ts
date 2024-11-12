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
  ],
};

export default dashboard;

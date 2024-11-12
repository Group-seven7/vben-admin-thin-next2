import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/single',
  name: 'single',
  component: LAYOUT,
  redirect: '/single/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '资产管理',
    orderNo: 1,
  },
  children: [
    {
      path: 'index',
      name: 'singlePage',
      component: () => import('/@/views/single/index.vue'),
      meta: {
        title: '资产管理的首页',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;

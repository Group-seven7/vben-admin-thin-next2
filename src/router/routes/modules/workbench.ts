import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/workbench',
  name: 'workbench',
  component: LAYOUT,
  redirect: '/workbench/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:about-dot-me',
    title: '工作台',
    orderNo: 0,
  },
  children: [
    {
      path: 'index',
      name: 'workbenchPage',
      component: () => import('/@/views/workbench/index.vue'),
      meta: {
        title: '单页模块的页面',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true,
      },
    },
  ],
};

export default dashboard;

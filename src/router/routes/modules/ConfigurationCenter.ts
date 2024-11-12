import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/disposition',
  name: 'disposition',
  component: LAYOUT,
  redirect: '/disposition/index',
  meta: {
    orderNo: 10,
    icon: 'line-md:align-center',
    title: '配置中心',
  },
  children: [
    {
      path: 'index',
      name: 'configuration',
      component: () => import('/src/views/disposition/index.vue'),
      meta: {
        affix: true,
        title: '配置中心',
      },
    },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/src/views/EnterpriseSettings/Rolepost/tablecontens.vue'),
    //   meta: {
    //     title: '角色权限',
    //   },
    // },
  ],
};

export default dashboard;

import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/inverse',
  name: 'inverse',
  component: LAYOUT,
  redirect: '/inverse/index',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '用户管理',
  },
  children: [
    {
      path: 'index',
      name: 'inversepage',
      component: () => import('/src/views/EnterpriseSettings/department/IndividualsMenge.vue'),
      meta: {
        affix: true,
        title: '部门权限',
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/src/views/EnterpriseSettings/Rolepost/tablecontens.vue'),
      meta: {
        title: '角色权限',
      },
    },
  ],
};

export default dashboard;

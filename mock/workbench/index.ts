import { MockMethod } from 'vite-plugin-mock';
// import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';
import { resultSuccess } from '../_util';

function createAuditList() {
  return {
    auditManagement: {
      待我审批: '@integer(60,100)',
      我发起的: 0,
      抄送我的: 1,
    },
  };
}
function createFuncrionList() {
  return {
    commonFunctions: {
      招商管理: 'carbon:user-avatar-filled',
      资产管理: 0,
      财务管理: 1,
      审批管理: 1,
    },
  };
}
function preRentalList() {
  return {
    preRenta: {
      等待入住: '@integer(60,100)',
      今日预定: '@integer(1,100)',
      本周预定: '@integer(1,100)',
      本月预定: '@integer(1,100)',
    },
  };
}
function contractList() {
  return {
    contract: {
      待签字: '@integer(1,100)',
      再租中: '@integer(1,100)',
      即将搬出: '@integer(1,100)',
      已到期: '@integer(1,100)',
    },
  };
}
function dataaList() {
  return {
    dataa: {
      a: '@integer(1,100)',
      b: '@integer(1,100)',
      c: '@integer(1,100)',
      d: '@integer(1,100)',
      e: '@integer(1,100)',
      f: '@integer(1,100)',
      g: '@integer(1,100)',
    },
  };
}
function createFeatureList1() {
  return {
    featureList1: [
      {
        id: 1,
        title: '8101-房型ML',
        type: '办公楼',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        status1: '定',
        status2: '签',
      },
      {
        id: 2,
        title: '8102-房型ML',
        type: '厂房',
        rent: '南 - 20㎡- 1000元/月',
        rentalPeriod: '空置  3  天',
        status1: '退',
      },
      {
        id: 3,
        title: '8103-房型ML',
        type: '商铺',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        status1: '定',
        status2: '签',
        status3: '欠',
      },
      {
        id: 4,
        title: '8105-房型ML',
        type: '公寓',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        status1: '定',
        status2: '签',
      },
      {
        id: 5,
        title: '8106-房型ML',
        type: '招商中心',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        status1: '退',
        status2: '转',
      },
      {
        id: 6,
        title: '8107-房型ML',
        type: '设备中心',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        path: '',
      },
    ],
  };
}
function createFeatureList2() {
  return {
    featureList2: [
      {
        id: 1,
        title: '8101-房型ML',
        type: '车位',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        path: '',
      },
      {
        id: 2,
        title: '8101-房型ML',
        type: '广告牌',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        path: '',
      },
      {
        id: 3,
        title: '8101-房型ML',
        type: '会议室',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        path: '',
      },
      {
        id: 4,
        title: '8101-房型ML',
        type: '会议室',
        rent: '3000元/月（小五天/押2付6）',
        rentalPeriod: '2022.11.02~2023.11.01',
        path: '',
      },
    ],
  };
}
export default [
  {
    url: '/basic-api/workbench',
    timeout: 1000,
    method: 'get',
    response() {
      return resultSuccess({
        //审核管理
        ...createAuditList(),
        //常用功能
        ...createFuncrionList(),
        //租前
        ...preRentalList(),
        //合约管理
        ...contractList(),
        ...dataaList(),
        ...createFeatureList1(),
        ...createFeatureList2(),
      });
    },
  },
] as MockMethod[];

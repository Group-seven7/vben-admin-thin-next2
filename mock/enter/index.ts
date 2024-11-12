import { MockMethod } from 'vite-plugin-mock';
// import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';
import { resultSuccess } from '../_util';
function planningList() {
  return {
    planning: [
      {
        id: 1,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 2,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 3,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 4,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 5,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 6,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 7,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 8,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 9,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 10,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 11,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 12,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
    ],
  };
}
function columnsList() {
  return {
    columns: [
      {
        title: '序号',
        dataIndex: 'key',
      },
      {
        title: '状态',
        className: 'column-money',
        dataIndex: 'state',
      },
      {
        title: '项目',
        dataIndex: 'project',
      },
      {
        title: '房型/门牌号',
        dataIndex: 'House',
      },
      {
        title: '产品类型',
        dataIndex: 'type',
      },
      {
        title: '承租/预定信息',
        dataIndex: 'Information',
      },
      {
        title: '价格(元/月)',
        dataIndex: 'Price',
      },
      {
        title: '户型',
        dataIndex: 'huxing',
      },
      {
        title: '面积',
        dataIndex: 'area',
      },
      {
        title: '朝向',
        dataIndex: 'Towards',
      },
      {
        title: '负责人信息',
        dataIndex: 'Head',
      },
    ],
  };
}
function dataList() {
  return {
    dataa: [
      {
        key: '1',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '2',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '3',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '4',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '5',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '6',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },

      {
        key: '7',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '8',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '9',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
      {
        key: '10',
        state: '已租',
        project: '测试楼栋',
        House: '房型ML-101',
        type: '公寓',
        Information: '-',
        Price: '3000',
        huxing: '两室两厅一厨一卫',
        area: '30㎡',
        Towards: '南',
        Head: '刘清晨-123456789',
      },
    ],
  };
}
function management() {
  return {
    management: [
      {
        title: '状态',
        dataIndex: 'key',
      },
      {
        title: '预订人信息',
        className: 'column-money',
        dataIndex: 'state',
      },
      {
        title: '定金(元)',
        dataIndex: 'project',
      },
      {
        title: '预计入住日期',
        dataIndex: 'House',
      },
      {
        title: '预计入住时长',
        dataIndex: 'type',
      },
      {
        title: '操作',
        dataIndex: 'Information',
      },
    ],
  };
}
function Contract() {
  return {
    contract: [
      {
        key: '待生效',
        state: '111-123456789',
        project: '100',
        House: '2023_02_11',
        type: '一年',
        Information: '：',
      },
    ],
  };
}
function managementa() {
  return {
    managementa: [
      {
        title: '状态',
        dataIndex: 'key',
      },
      {
        title: '签约类型',
        className: 'column-money',
        dataIndex: 'state',
      },
      {
        title: '租客信息',
        dataIndex: 'project',
      },
      {
        title: '租金（元/月）',
        dataIndex: 'House',
      },
      {
        title: '押金(元)',
        dataIndex: 'type',
      },
      {
        title: '收款方式',
        dataIndex: 'Information',
      },
      {
        title: '合同周期',
        dataIndex: 'Duration',
      },
      {
        title: '操作',
        dataIndex: 'operate',
      },
    ],
  };
}
function Contracta() {
  return {
    contracta: [
      {
        key: '口',
        state: '状态',
        project: '黄哈哈123456789',
        House: '3000',
        type: '3000',
        Information: '押一付一',
        Duration: '2023.02.10-2.24.02.09',
        operate: '：',
      },
    ],
  };
}
function Financial() {
  return {
    financial: [
      {
        title: '口',
        dataIndex: 'key',
      },
      {
        title: '状态',
        className: 'column-money',
        dataIndex: 'state',
      },
      {
        title: '收(付)款人信息',
        dataIndex: 'project',
      },
      {
        title: '应收（付）',
        dataIndex: 'House',
      },
      {
        title: '待收(付)',
        dataIndex: 'type',
      },
      {
        title: '已收(付)',
        dataIndex: 'typeq',
      },
      {
        title: '应收(付)日期',
        dataIndex: 'Information',
      },
      {
        title: '完成/作废日期',
        dataIndex: 'Duration',
      },
      {
        title: '账单摘要',
        dataIndex: 'operate',
      },
      {
        title: '操作',
        dataIndex: 'operate1',
      },
    ],
  };
}
function bills() {
  return {
    bills: [
      {
        key: '1',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '2',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '3',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '4',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '5',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '6',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '7',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '8',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
      {
        key: '9',
        state: '待收',
        project: '黄哈哈123456789',
        House: '+6000',
        type: '+6000',
        typeq: '0',
        Information: '2023.02.10',
        Duration: '-',
        operate: '房屋租金',
        operate1: ':',
      },
    ],
  };
}

function Postrental() {
  return {
    postrental: [
      {
        title: '状态',
        dataIndex: 'key',
      },
      {
        title: '申请人',
        className: 'column-money',
        dataIndex: 'state',
      },
      {
        title: '目标房源地址',
        dataIndex: 'project',
      },
      {
        title: '提交时间',
        dataIndex: 'House',
      },
      {
        title: '操作',
        dataIndex: 'type',
      },
    ],
  };
}
function service() {
  return {
    service: [
      {
        key: '待处理',
        state: '黄哈哈/123456789',
        project: '武汉精准医疗产业基地一期7#栋-202室',
        House: '2023.02.10 20:46',
        type: '详情',
      },
    ],
  };
}
export default [
  {
    url: '/basic-api/enter',
    timeout: 1000,
    method: 'get',
    response() {
      return resultSuccess({
        ...planningList(),
        ...columnsList(),
        ...dataList(),
        ...management(),
        ...Contract(),
        ...Contracta(),
        ...managementa(),
        ...Financial(),
        ...bills(),
        ...Postrental(),
        ...service(),
      });
    },
  },
] as MockMethod[];

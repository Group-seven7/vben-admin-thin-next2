import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util'; // 用于返回成功结果
import Mock from 'mockjs';
// import icon from "/@/components/Icon"; // 确保导入 Mock.js



// 生成随机企业数据的方法
function createEnterpriseList(num) {
  const enterprises = Mock.mock({
    [`enterprises|${num}`]: [
      {
        status: '@pick(["正常", "异常"])', // 公司状态
        number: '@increment(1000)', //编号
        name: '@cname', // 随机姓名
        phone: /^1[3-9]\d{9}$/, // 随机电话
        worktime: '@integer(1, 40)', //工龄
        email: '@email', // 随机邮箱
        department: '@pick("（直属）软新", "（直属）老师")',
        work: '@pick("财务", "管家", "总经理", "保安")',
      },
    ],
  });
  // <Icon icon="ant-design:more-outlined" width="1.2em" height="1.2em"  style="color: black" />
  // 将生成的数据添加 ID
  return enterprises.enterprises.map((enterprise, index) => ({
    id: index + 1, // ID 从 1 开始
    ...enterprise, // 展开其他随机数据
  }));
}

function createOrganizationData() {
  return [
    {
      name: 'E+',
      icon: 'material-symbols-light:home-outline',
    },
    {
      name: '未分配员工',
      icon: 'icon-park-outline:people',
    },
    {
      name: '申请加入员工',
      icon: 'mdi-light:bell',
    },
  ];
}
function createFeatureList() {
  return [
    {
      title: '招商管理',
      title_child: '租客-私客',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
    {
      title: '资产管理',
      title_child: '空房快查',
      title_child_2: '资产管理',
      title_child_3: '调价管理',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
    {
      title: '合约管理',
      title_child: '预定管理',
      title_child_2: '排队管理',
      title_child_3: '租客管理',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
    {
      title: '财务管理',
      title_child: '账单管理',
      title_child_1: '未知款',
      title_child_2: '账单流水',
      title_child_3: '租客转账通知',
      title_child_4: '开票记录',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
    {
      title: '租后管理',
      title_child: '其他工单',
      title_child_1: '换房申请',
      title_child_2: '退房申请',
      title_child_3: '续租申请',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
    {
      title: '智能设备',
      title_child: '智能门锁',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
    {
      title: '钱包',
      title_child: '钱包管理',
      actors: '全部',
      actors_2: '本店',
      actors_3: '可查看本店及子集部门数据',
      actors_4: '本部',
      actors_5: '与本人相关',
    },
  ];
}

export default [
  {
    url: '/basic-api/getEnterprise',
    timeout: 1000,
    method: 'get',
    response() {
      const num = 10; // 设置返回随机企业数据的数量，比如10个
      const enterprises = createEnterpriseList(num);
      const organizationData = createOrganizationData();

      return resultSuccess({
        enterprises,
        organizationData, // 将组织架构数据合并到返回结果中
        featureList: createFeatureList(),
      });
    },
  },
] as MockMethod[];

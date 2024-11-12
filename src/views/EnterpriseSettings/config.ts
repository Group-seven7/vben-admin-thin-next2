//config.ts
export interface dataSourceType {
  id?: number;
  name: string;
  phone: string;
  age: number;
  createdata: string;
  lastedata: string;
  sales: string;
  category: string;
  pathways: string;
  nextdata: string;
  remark: string;
  status: string;
  number: number;
  email: string;
  department: string;
  work: string;
}
export const columnsData = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    // slots: { customRender: 'status' },
  },
  {
    title: '员工编号',
    dataIndex: 'number',
    key: 'number',
    align: 'center',
  },
  {
    title: '员工姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '员工电话(登入账号)',
    dataIndex: 'phone',
    key: 'phone',
    align: 'center',
  },
  {
    title: '工龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    align: 'center',
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department',
    align: 'center',
  },
  {
    title: '部门角色',
    dataIndex: 'work',
    key: 'work',
    align: 'center',
  },
  {
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' },
    align: 'center',
  },
];

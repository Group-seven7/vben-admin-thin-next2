<!--成员管理-->
<template>
  <Table :columns="columnsData" :dataSource="dataSource" row-key="id" :pagination="{ pageSize: 3 }">
    <template #action="{ record }">
      <MoreOutlined @click="showMoreOptions(record)" />
    </template>
  </Table>
</template>

<script setup lang="ts">
  import { defineProps, watch } from 'vue';
  import { Table } from 'ant-design-vue';
  import { MoreOutlined } from '@ant-design/icons-vue';

  const props = defineProps({
    dataSource: {
      type: Array,
      required: true,
    },
  });

  // 表格列配置
  const columnsData = [
    { title: '序号', dataIndex: 'id', key: 'id', align: 'center' },
    { title: '状态', dataIndex: 'status', key: 'status', align: 'center' },
    { title: '员工编号', dataIndex: 'number', key: 'number', align: 'center' },
    { title: '员工姓名', dataIndex: 'name', key: 'name', align: 'center' },
    { title: '员工电话(登入账号)', dataIndex: 'phone', key: 'phone', align: 'center' },
    { title: '工龄', dataIndex: 'worktime', key: 'worktime', align: 'center' },
    { title: '邮箱', dataIndex: 'email', align: 'center' },
    { title: '部门', dataIndex: 'department', key: 'department', align: 'center' },
    { title: '部门角色', dataIndex: 'work', key: 'work', align: 'center' },
    { title: '操作', dataIndex: 'action', slots: { customRender: 'action' }, align: 'center' },
  ];

  // 监听 props.dataSource 的变化
  watch(
    () => props.dataSource,
    (newData) => {
      console.log('数据已更新：', newData);
    },
  );
</script>

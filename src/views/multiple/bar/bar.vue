<template>
  <a-table :data-source="data" :columns="columns" :pagination="false">
    <template #bodyCell="{ record }">
      <a @click="executePersonCustomCell(record, column)" style="cursor: pointer">
        {{ record[column.dataIndex] }}
      </a>
    </template>
  </a-table>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          { key: '1', name: 'John Brown', age: 32, address: 'New York' },
          { key: '2', name: 'Jim Green', age: 42, address: 'London' },
          { key: '3', name: 'Joe Black', age: 32, address: 'Sydney' },
        ],
        columns: [
          { title: 'Name', dataIndex: 'name', width: '30%' },
          { title: 'Age', dataIndex: 'age', width: '20%' },
          {
            title: 'Address',
            dataIndex: 'address',
            width: '50%',
            customCell: this.executePersonCustomCell,
          },
        ],
      };
    },
    methods: {
      executePersonCustomCell(record) {
        return {
          on: {
            click: (event) => {
              console.log(a);
            },
          },
        };
        // 处理单元格点击事件
      },
    },
  };
</script>

<style>
  /* 这里可以添加样式 */
</style>

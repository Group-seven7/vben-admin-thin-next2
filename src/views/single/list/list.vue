<template>
  <PageWrapper>
    <div style="display: flex; flex-direction: column; height: 100%">
      <a-table :columns="columns" :data-source="data" bordered :pagination="false" style="flex: 1">
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
          </template>
        </template>
      </a-table>
      <div style="display: flex; justify-content: flex-end">
        <a-pagination v-model:current="current" :total="500" style="margin-top: 16px" />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { getEnterData } from '/@/api/enter';
  import { ref } from 'vue';
  const current = ref(6);
  const data = ref([]);
  const columns = ref([]);
  console.log(data);

  // 调用 API 并更新数据
  getEnterData()
    .then((res) => {
      columns.value = res.columns;
      data.value = res.dataa;
    })
    .catch((err) => {
      console.error(err);
      if (err.code === 'ECONNABORTED') {
        alert('请求超时，请稍后再试');
      } else {
        alert('发生错误：' + err.message);
      }
    });
</script>
<style scoped>
  th.column-money,
  td.column-money {
    text-align: right !important;
  }
</style>

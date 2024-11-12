<template>
  <PageWrapper>
    <div class="tabs-container">
      <a-tabs v-model:activeKey="activeKey" type="card" style="flex-grow: 1">
        <a-tab-pane key="1" tab="汇总">
          <a-table :columns="columns" :data-source="data" bordered :pagination="false">
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">
                <a>{{ text }}</a>
              </template>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="明细">
          <div>明细</div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  import { getEnterData } from '/@/api/enter';
  const data = ref([]);
  const columns = ref([]);
  const activeKey = ref('1');

  // 调用 API 并更新数据
  getEnterData()
    .then((res) => {
      columns.value = res.financial;
      data.value = res.bills;
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
<style scoped></style>

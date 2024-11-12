<template>
  <PageWrapper>
    <div>
      <a-tabs v-model:activeKey="activeKey" type="card">
        <a-tab-pane key="1" tab="预定">
          <a-table
            :columns="columns"
            :data-source="data"
            bordered
            :pagination="false"
            style="flex: 1"
          >
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">
                <a>{{ text }}</a>
              </template>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="2" tab="租客合同">
          <a-table
            :columns="columnsa"
            :data-source="dataa"
            bordered
            :pagination="false"
            style="flex: 1"
          >
            <template #bodyCell="{ column, text }">
              <template v-if="column.dataIndex === 'name'">
                <a>{{ text }}</a>
              </template>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="border-t border-dashed border-gray-400 pt-2 mt-3 flex">
      <div class="m-3 border-r border-dashed border-gray-400 pr-3 text-gray-500 text-sm"
        >程贝创建于 2022年11月2日 21：11</div
      >
      <div class="m-3 text-gray-500 text-sm">刘清晨更新于 2023年2月10日 16:22</div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  import { getEnterData } from '/@/api/enter';
  const data = ref([]);
  const columns = ref([]);
  const columnsa = ref([]);
  const dataa = ref([]);
  const activeKey = ref('1');

  // 调用 API 并更新数据
  getEnterData()
    .then((res) => {
      columns.value = res.management;
      data.value = res.contract;
      columnsa.value = res.managementa;
      dataa.value = res.contracta;
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

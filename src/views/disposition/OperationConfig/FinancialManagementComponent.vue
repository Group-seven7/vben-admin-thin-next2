<!--财务管理-->
<template>
  <PageWrapper class="overflow-y-auto h-75vh border border-gray-300">
  <header class="flex items-center px-4 py-2 border-b">
    <!-- 左侧选择框 -->
    <div class="flex justify-start mr-4">
      <Select
        ref="select"
        v-model:value="value1"
        style="width: 200px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option value="E+SPACE">门店：E+SPACE</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
      </Select>
    </div>

    <!-- 居中的选项卡 -->
    <div class="flex-grow text-center">
      <Tabs type="card" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="决策配置" />
        <a-tab-pane key="2" tab="默认字段配置" />
      </Tabs>
    </div>
  </header>
  <div class="p-4">
    <div v-if="activeKey === '1'" class="border p-4 rounded-md"></div>
    <div v-else-if="activeKey === '2'" class="border p-4 rounded-md"></div>
  </div>
  </PageWrapper>
</template>
<script setup lang="ts">
 import { PageWrapper } from '/@/components/Page';
import { Select, Tabs } from 'ant-design-vue';
import { ref } from 'vue';
const value1 = ref('门店：E+SPACE');
</script>
<style scoped lang="less"></style>

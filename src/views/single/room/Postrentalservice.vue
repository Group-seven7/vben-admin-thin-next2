<template>
  <PageWrapper>
    <a-tabs v-model:activeKey="activeKey" centered>
      <a-tab-pane key="1" tab="换房申请">
        <table class="bordered-table">
          <thead>
            <tr>
              <th>状态</th>
              <th>申请人</th>
              <th>目标房源地址</th>
              <th>提交时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 待处理 </td>
              <td> 黄哈哈/123456789 </td>
              <td> 武汉精准医疗产业基地一期7#栋-202室 </td>
              <td> 2023.02.10 20:46 </td>
              <td class="text-blue-500" @click="showDetailModal"> 详情 </td>
            </tr>
          </tbody>
        </table>

        <!-- 详情对话框 -->
        <a-modal
          v-model:visible="isModalVisible"
          title="详情"
          @cancel="isModalVisible = false"
          footer="null"
        >
          <p>状态: 待处理</p>
          <p>申请人: 黄哈哈/123456789</p>
          <p>目标房源地址: 武汉精准医疗产业基地一期7#栋-202室</p>
          <p>提交时间: 2023.02.10 20:46</p>
        </a-modal>
      </a-tab-pane>
      <a-tab-pane key="2" tab="退房申请" force-render>
        <table class="bordered-table">
          <thead>
            <tr>
              <th>状态</th>
              <th>申请人</th>
              <th>预计离房日期</th>
              <th>提交时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 待处理 </td>
              <td> 黄哈哈/123456789 </td>
              <td> 2023.02.10 </td>
              <td> 2023.02.10 20:46 </td>
              <td class="text-blue-500" @click="showDetailModal"> 详情 </td>
            </tr>
          </tbody>
        </table>
      </a-tab-pane>
    </a-tabs>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';

  const activeKey = ref('1');
  const isModalVisible = ref(false);

  const showDetailModal = () => {
    isModalVisible.value = true; // 显示对话框
  };
</script>

<style scoped>
  .bordered-table {
    width: 100%;
    border-collapse: collapse; /* 合并边框 */
  }

  .bordered-table th,
  .bordered-table td {
    border: 1px solid #dddddd; /* 边框颜色 */
    padding: 8px; /* 单元格内边距 */
    text-align: left;
  }

  .text-blue-500 {
    color: #007bff; /* 自定义的蓝色 */
    cursor: pointer; /* 指针样式 */
  }
</style>

<template>
  <header class="flex flex-col md:flex-row w-full">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <div v-for="(item, index) in data.dataa" :key="index" class="bg-white rounded-lg p-4 shadow">
        <span class="text-base font-semibold">公寓(1236套，1256间)</span>
        <span class="ml-4">出租率45.08%</span>
        <div class="bg-gray-100 h-[200px] mt-4">
          <nav class="grid grid-cols-2 md:grid-cols-3 text-center">
            <div class="flex flex-col mt-4">
              <span class="text-xl">{{ item }}</span>
              <span class="text-sm">空置</span>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-xl font-bold">{{ item }}</span>
              <span class="text-sm">配置</span>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-xl font-bold">{{ item }}</span>
              <span class="text-sm">今日预定</span>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-xl font-bold">{{ item }}</span>
              <span class="text-sm">即将搬入(30天内)</span>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-xl font-bold">{{ item }}</span>
              <span class="text-sm">即将到期(30天内)</span>
            </div>
            <div class="flex flex-col mt-2">
              <span class="text-xl font-bold">{{ item }}</span>
              <span class="text-sm">已到期</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { getWorkbenchData } from '/@/api/workbenck';

  // 定义 ref 存储数据
  const data = ref({});

  // 调用 API 获取数据
  getWorkbenchData()
    .then((res) => {
      data.value = res; // 将响应数据赋值给 data
    })
    .catch((error) => {
      console.error('获取数据失败:', error); // 错误处理
    });
</script>

<style scoped>
  * {
    box-sizing: border-box; /* 使宽高计算包括 Padding 和 Border */
    margin: 0; /* 消除默认外边距 */
    padding: 0; /* 消除默认内边距 */
  }

  header {
    display: flex;
    flex-direction: column; /* 在小屏幕上垂直排列 */
  }

  .flex {
    display: flex; /* 使这个元素使用 Flexbox */
  }

  @media (min-width: 768px) {
    header {
      flex-direction: row; /* 在大屏幕上水平排列 */
    }
  }
</style>

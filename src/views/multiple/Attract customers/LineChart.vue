<template>
  <div ref="chartContainer" style="width: 100%; height: 100%;"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const chartContainer = ref<HTMLElement | null>(null);

// 使用新的条形图配置
const option = {
  title: {
    text: 'Awesome Chart'
  },
  xAxis: {
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {},
  series: [{
    type: 'bar',
    data: [220, 182, 191, 234, 290, 330, 310]
  }]
};

// 初始化条形图
onMounted(() => {
  if (chartContainer.value) {
    const chartInstance = echarts.init(chartContainer.value);
    chartInstance.setOption(option);
    window.addEventListener('resize', () => {
      chartInstance.resize();
    });
  }
});
</script>

<style scoped>
/* 此处可以添加样式 */
</style>

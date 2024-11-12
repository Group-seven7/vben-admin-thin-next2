<template>
  <div ref="lineChart" style="width: 800px; height: 400px;"></div> <!-- 将宽度设置为 800px -->
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const lineChart = ref<HTMLElement | null>(null);

// 更新的折线图配置
const option = {
  title: {
    text: '选择周期的租贷情况',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: { // 添加图例配置
    data: ['新签',  '退租', '续签'],
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2023.03.01', '2023.03.02', '2023.03.03', '2023.03.04', '2023.03.05', '2023.03.06', '2023.03.07','2023.03.08','2023.03.09','2023.03.10'],
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      
    },
    max: 100,
  },
  series: [
    {
      name: '新签',
      type: 'line',
      data: [60, 80, 99, 45, 46, 56, 49,49,76,24],
    },
    {
      name: '退租',
      type: 'line',
      data: [10, 20, 45, 34, 90, 45, 43,46,78,75],
    },
    {
      name: '续签',
      type: 'line',
      data: [50, 46, 10, 9, 12, 14, 78,13,45,14],
    },
  ],
};

// 初始化折线图
onMounted(() => {
  if (lineChart.value) {
    const chartInstance = echarts.init(lineChart.value);
    chartInstance.setOption(option);
    window.addEventListener('resize', () => {
      chartInstance.resize();
    });
  }
});
</script>

<style scoped>
/* 如果需要，加入样式 */
</style>

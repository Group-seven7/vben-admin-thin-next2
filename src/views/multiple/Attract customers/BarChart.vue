<template>
  <div class="bar-chart-container">
    <div ref="barChart" class="bar-chart" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default defineComponent({
  name: 'BarChart',
  setup() {
    const barChart = ref<HTMLDivElement | null>(null);

    const option = {
      title: {
        text: '全国新闻记者各分类人数',
        subtext: '数据来源：中国记协'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2017年']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        name: '人',
      },
      yAxis: {
        type: 'category',
        data: ['新闻网站记者', '电台、电视台和新闻电影制片厂记者', '通讯社记者', '期刊记者', '报纸记者', '总记者数']
      },
      series: [
        {
          name: '2017年',
          type: 'bar',
          data: [1406, 136224, 2849, 6324, 84761, 231564]
        },
      ]
    };

    const renderChart = () => {
      if (!barChart.value) return;
      const chartInstance = echarts.init(barChart.value);
      chartInstance.setOption(option);
    };

    onMounted(() => {
      renderChart();
      window.addEventListener('resize', renderChart); // 支持窗口缩放时图表自适应
    });

    return {
      barChart,
    };
  }
});
</script>

<style>
.bar-chart-container {
  width: 100%;
  height: 400px; /* 组件高度 */
}
</style>

<template>
  <div ref="pieChart" style="width: 600px; height: 400px;"></div>
</template>

<script>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default {
  setup() {
    const pieChart = ref(null);

    // ECharts 配置
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}" // 移除了百分比的显示
      },
      color: ['#8fc31f', '#f35833', '#00ccff', '#ffcc00','#1780EA'],
      legend: {
        orient: 'vertical',
        x: 'right',
        data: ['项目1', '项目2', '项目3', '项目4', '项目5'],
        formatter: function(name) {
          const data = option.series[0].data;
          const total = data.reduce((sum, item) => sum + item.value, 0); // 计算总和
          const item = data.find(item => item.name === name); // 找到对应的项
          if (item) {
            return `${name} ${item.value}`; // 移除百分比，直接显示项的值
          }
          return name; // 返回项名
        }
      },
      series: [{
        name: '项目各自出租率对比',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: [
          { value: 30000, name: '项目1' },
          { value: 25000, name: '项目2' },
          { value: 200000, name: '项目3' },
          { value: 150000, name: '项目4' },
          { value: 100000, name: '项目5' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          show: true,
          // position: 'inside', // 可以根据需要选择是否显示在内部
          formatter: '{b} : {c}' // 移除了百分比
        },
        labelLine: { show: true }
      }]
    };

    // 初始化图表
    onMounted(() => {
      const chartInstance = echarts.init(pieChart.value);
      chartInstance.setOption(option);
      window.addEventListener('resize', () => {
        chartInstance.resize(); // 图表自适应窗口大小
      });
    });

    return {
      pieChart
    };
  }
};
</script>

<style scoped>
/* 如果需要，请加入样式 */
</style>

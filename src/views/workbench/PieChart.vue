<template>
  <div>
    <div ref="pieChart" style="height: 400px"></div>
  </div>
</template>

<script>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import * as echarts from 'echarts';

  export default {
    name: 'PieChart',
    setup() {
      const pieChart = ref(null);
      let chartInstance = null;

      const initChart = () => {
        chartInstance = echarts.init(pieChart.value);

        const data = [
          { value: 10, name: '公寓' },
          { value: 15, name: '商办' },
          { value: 20, name: '商铺' },
          { value: 25, name: '厂房' },
          { value: 30, name: '车位' },
          { value: 30, name: '广告牌' },
          { value: 30, name: '会议室' },
        ];

        // 计算总和以便计算百分比
        const total = data.reduce((sum, item) => sum + item.value, 0);

        const option = {
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            bottom: '0%', // 设置图例的位置为底部
            itemGap: 20, // 图例项目之间的间距
          },
          series: [
            {
              name: '资产类型',
              type: 'pie',
              radius: '65%',
              data: data,
              label: {
                formatter: (params) => {
                  const percent = ((params.value / total) * 100).toFixed(2) + '%';
                  return `${percent}`;
                },
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
            },
          ],
        };

        chartInstance.setOption(option);
      };

      onMounted(initChart);

      onBeforeUnmount(() => {
        if (chartInstance) {
          chartInstance.dispose();
        }
      });

      return {
        pieChart,
      };
    },
  };
</script>

<style scoped>
  /* 在这里可以添加样式 */
</style>

<template>
  <div ref="barChart" style="width: 100%; height: 400px;"></div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

export default {
  setup() {
    const barChart = ref(null);
    
    // 数据
    const years = ['2018', '2019', '2020'];
    const jdData = [
      ['南山区', '福田区', '宝安区', '龙岗区', '罗湖区', '龙华区', '光明区', '盐田区', '坪山区', '大鹏新区'],
      ['南山区', '福田区', '宝安区', '龙岗区', '罗湖区', '龙华区', '光明区', '盐田区', '坪山区', '大鹏新区'],
      ['南山区', '福田区', '宝安区', '龙岗区', '罗湖区', '龙华区', '光明区', '盐田区', '坪山区', '大鹏新区'],
    ];
    const data = [
      [92840, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778],
      [103310, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871],
      [108730, 94964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369],
    ];

    const option = {
      baseOption: {
        timeline: {
          data: years,
          axisType: 'category',
          autoPlay: true,
          playInterval: 5000,
          left: '10%',
          right: '10%',
          bottom: '0%',
          width: '80%',
          label: {
            normal: {
              textStyle: { color: '#ff8800' },
            },
            emphasis: {
              textStyle: { color: '#fff' },
            },
          },
        },
        title: {
          text: '',
          right: '2%',
          bottom: '8%',
          textStyle: {
            fontSize: 24,
            color: '#666'
          }
        },
        tooltip: { trigger: 'axis' },
        grid: {
          left: '8%',
          right: '2%',
          bottom: '6%',
          top: '0%',
          containLabel: true
        },
        yAxis: [{
          type: 'category',
          data: '',
          nameTextStyle: { color: '#fff' },
          axisLabel: {
            textStyle: { fontSize: 12, color: '#333' },
            interval: 0
          },
          axisLine: { lineStyle: { color: '#333' }},
          splitLine: { show: false }
        }],
        xAxis: [{
          type: 'value',
          name: '',
          splitNumber: 8,
          nameTextStyle: { color: '#333' },
          axisLine: { lineStyle: { color: '#333' }},
          axisLabel: { formatter: '{value} ' },
          splitLine: { show: true, lineStyle: { color: '#ccc' }}
        }],
        series: [{
          type: 'bar',
          barWidth: '50%',
          label: {
            normal: {
              show: true,
              position: 'inside',
              formatter: '{c}'
            }
          },
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                  '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                  '#bda29a', '#376956', '#c3bed4', '#495a80',
                  '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                  '#04dd98', '#d9b3e6', '#b6c3fc', '#315dbc'
                ];
                return colorList[params.dataIndex];
              }
            }
          },
        }],
        animationDurationUpdate: 2000,
        animationEasingUpdate: 'quinticInOut'
      },
      options: []
    };

    // Prepare options for each year
    for (let n = 0; n < years.length; n++) {
      let res = data[n].map((value, index) => ({ name: jdData[n][index], value })).sort((a, b) => b.value - a.value).slice(0, 6);
      const res1 = res.map(item => item.name);
      const res2 = res.map(item => item.value);

      option.options.push({
        title: { text: `${years[n]}年` },
        yAxis: { data: res1 },
        series: [{ data: res2 }]
      });
    }

    // Initialize the chart
    onMounted(() => {
      const chartInstance = echarts.init(barChart.value);
      chartInstance.setOption(option);
      window.addEventListener('resize', () => {
        chartInstance.resize();
      });
    });

    return {
      barChart
    };
  }
};
</script>

<style scoped>
/* 如果需要，请加入样式 */
</style>

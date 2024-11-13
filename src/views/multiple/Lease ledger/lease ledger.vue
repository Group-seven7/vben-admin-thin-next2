<template>
  <div class="tabs-container">
    <a-tabs v-model:activeKey="activeKey" @change="handleTabChange">
      <a-tab-pane key="1" tab="图表">
        <div v-if="activeKey === '1'" class="chart-container">
          <div class="pie-chart-container">
            <h1>项目各自出租率对比</h1>
            <PieChart class="responsive-pie-chart" />
          </div>
          <div class="line-chart-container">
            <h1>项目租金趋势</h1>
            <LineChart />
          </div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="数据" force-render>
        <div v-if="activeKey === '2'" class="data-table-wrapper">
          <div class="select-wrapper">
            <span class="select-label">项目：</span>
            <a-select
              v-model:value="value"
              style="width: 120px;"
              :options="items"
              @change="handleSelectChange"
            />
          </div>
          <a-table 
            :columns="columns" 
            :data-source="filteredTableData" 
            :scroll="{ x: 1500, y: 300 }" 
            class="data-table">
          </a-table>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { Tabs, Table, Select } from 'ant-design-vue';
import PieChart from './PieChart.vue'; // 根据实际路径引入
import LineChart from './LineChart.vue'; // 根据实际路径引入
import type { TableColumnsType } from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-tabs': Tabs,
    'a-table': Table,
    'a-select': Select,
    PieChart,
    LineChart,
  },
  setup() {
    const activeKey = ref('1');
    const showSelect = ref(false); // 控制选择器的显示

    const columns: TableColumnsType = [
      { title: '序号', width: 100, dataIndex: 'key', key: 'key', fixed: 'left' },
      { title: '项目名称', width: 80, dataIndex: 'name', key: 'name', fixed: 'left' },
      // 其他列既可继续添加 ...
      {
        title: '解除合同时间',
        key: 'operation',
        fixed: 'right',
        width: 150,
      },
    ];

    interface DataItem {
      key: number;
      name: string;
      address: string;
    }

    const tableData: DataItem[] = [];
    for (let i = 1; i <= 35; i++) {
      tableData.push({
        key: i,
        name: `项目${i}`,
        address: `London Park no. ${i}`,
      });
    }

    // 选择器选项
    const items = ref([
      { label: '请选择', value: undefined },
      { label: '全部', value: '全部' },
      ...Array(35).fill(null).map((_, index) => ({
        label: `项目${index + 1}`,
        value: `项目${index + 1}`,
      })),
    ]);
    const value = ref(undefined); // 设置value为undefined以显示“请选择”

    // 计算属性，过滤表格数据
    const filteredTableData = computed(() => {
      if (value.value === '全部') {
        return tableData; // 返回所有数据
      } else if (value.value) {
        return tableData.filter(item => item.name === value.value);
      }
      return tableData; // 当未选择时返回所有数据
    });

    const handleSelectChange = (selectedValue) => {
      console.log('已选择:', selectedValue);
    };

    const handleTabChange = (key) => {
      activeKey.value = key;
      if (key === '2') {
        showSelect.value = true; // 点击数据时显示选择器
      } else {
        showSelect.value = false; // 其他情况下隐藏选择器
      }
    };

    return {
      activeKey,
      showSelect,
      columns,
      filteredTableData,
      items,
      value,
      handleSelectChange,
      handleTabChange,
    };
  },
});
</script>

<style>
.chart-container {
  width: 100%;
  height: auto; /* 自适应内容高度 */
  overflow: hidden; /* 隐藏溢出的内容 */
}

.pie-chart-container {
  width: 100%; /* 饼图容器宽度自动取99% */
  display: flex;
  flex-direction: column; /* 垂直排列标题和图表 */
  align-items: center; /* 水平中心对齐 */
}

.responsive-pie-chart {
  max-width: 80%; /* 饼图最大宽度 */
  height: auto; /* 让高度自适应，保持等比缩放 */
}

.line-chart-container {
  width: 100%; /* 线状图宽度 */
  height: 400px; /* 设置线状图容器的高度 */
  margin-top: 20px; /* 饼图与线状图之间的间距 */
}

.data-table {
  margin-top: 16px; /* 表格与顶部的间距 */
  width: 100%; /* 设置表格宽度为100% */
  overflow-x: auto; /* 水平滚动 */
}

.tabs-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 50px; /* 可选：为整个容器添加左内边距 */
}

.select-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 16px; /* 为选择器和表格之间添加间距 */
}

.select-label {
  margin-right: 8px; /* 标签与选择器之间的间距 */
}

/* 媒体查询，针对不同屏幕尺寸调整样式 */
@media (max-width: 768px) {
  .tabs-container {
    padding-left: 20px; /* 小屏幕下减少内边距 */
  }
}

@media (max-width: 480px) {
  .tabs-container {
    padding-left: 10px; /* 更小屏幕下进一步减少内边距 */
  }
}
</style>

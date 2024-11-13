<template>
  <div class="tabs-container">
    <div class="tab-header">
      <a-tabs v-model:activeKey="activeKey" @change="handleTabChange">
        <a-tab-pane key="1" tab="图表">
          <div v-if="activeKey === '1'" class="no-chart">暂无图表</div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="数据" force-render>
          <div v-if="activeKey === '2'" class="data-table-wrapper">
            <a-table 
              :columns="columns" 
              :data-source="filteredTableData" 
              :scroll="{ x: 1500, y: 300 }" 
              class="data-table">
            </a-table>
          </div>
        </a-tab-pane>
      </a-tabs>
      <div class="select-wrapper" v-if="activeKey === '2'">
        <span class="select-label">指定统计周期：</span>
        <a-radio-group v-model="selectedTimeFrame">
          <a-radio value="this_week">本周</a-radio>
          <a-radio value="this_month">本月</a-radio>
          <a-radio value="this_year">本年</a-radio>
        </a-radio-group>
        <a-date-picker
          v-model="selectedDate"
          style="margin-left: 8px;"
          placeholder="选择日期"
          format="YYYY-MM-DD"
        />
        <span class="select-label">项目：</span>
        <a-select
          v-model:value="value"
          style="width: 120px;"
          :options="items"
          @change="handleSelectChange"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { Tabs, Table, Select, Radio, DatePicker } from 'ant-design-vue';
import type { TableColumnsType } from 'ant-design-vue';

export default defineComponent({
  components: {
    'a-tabs': Tabs,
    'a-table': Table,
    'a-select': Select,
    'a-radio-group': Radio.Group,
    'a-radio': Radio,
    'a-date-picker': DatePicker,
  },
  setup() {
    const activeKey = ref('1');
    const selectedTimeFrame = ref('this_week'); // 存储时间选择
    const selectedDate = ref(null); // 存储日期选择
    const columns: TableColumnsType = [
      { title: '序号', width: 100, dataIndex: 'key', key: 'key', fixed: 'left' },
      { title: '项目名称', width: 80, dataIndex: 'name', key: 'name', fixed: 'left' },
      { title: '分期', dataIndex: 'address', key: '1', width: 150 },
      { title: '楼栋号', dataIndex: 'address', key: '2', width: 150 },
      { title: '房间号', dataIndex: 'address', key: '3', width: 150 },
      { title: '合同甲方名称', dataIndex: 'address', key: '4', width: 150 },
      { title: '合同编号', dataIndex: 'address', key: '5', width: 150 },
      { title: '客户名称', dataIndex: 'address', key: '6', width: 150 },
      { title: '签约日期', dataIndex: 'address', key: '7', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '租金单价', dataIndex: 'address', key: '8', width: 150 },
      { title: '租期（年）', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同起始日', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同到期日', dataIndex: 'address', key: '8', width: 150 },
      { title: '应收履约保证金时间', dataIndex: 'address', key: '8', width: 150 },
      { title: '应收履约保证金金额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '已收履约保证金时间', dataIndex: 'address', key: '8', width: 150 },
      { title: '已收履约保证金金额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '装修免租期（天）', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同应收租金总额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '租金税率', dataIndex: 'address', key: '8', width: 150 },
      { title: '截止当前应收租金金额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '截止当前已收租金金额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '截止当前欠缴租金金额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '截止当前开具发票时间', dataIndex: 'address', key: '8', width: 150 },
      { title: '截止当前已开具发票金额', dataIndex: 'address', key: '8', width: 150 },
      { title: '已开发票对应租金周期', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同面积', dataIndex: 'address', key: '8', width: 150 },
      { title: '截止2023年x-1季度累计已确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '2023年当年x-1季度累计已确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '2023年3月确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '2023年6月确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '2023年9月确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '2023年12月确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '租金减免额度（月）', dataIndex: 'address', key: '8', width: 150 },
      { title: '租金减免总金额（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '租金减免应冲减收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '租金减免已冲减收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '提前退租时间', dataIndex: 'address', key: '8', width: 150 },
      { title: '提前退租收取违约金应确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '提前退租收取违约金已确认收入（元）', dataIndex: 'address', key: '8', width: 150 },
      { title: '合同是否在执行中', dataIndex: 'address', key: '8', width: 150 },
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
    const value = ref(undefined);

    // 计算属性，过滤表格数据
    const filteredTableData = computed(() => {
      if (value.value === '全部') {
        return tableData;
      } else if (value.value) {
        return tableData.filter(item => item.name === value.value);
      }
      return tableData;
    });

    const handleSelectChange = (selectedValue) => {
      console.log('已选择:', selectedValue);
    };

    const handleTabChange = (key) => {
      activeKey.value = key;
    };

    return {
      activeKey,
      columns,
      filteredTableData,
      items,
      value,
      selectedTimeFrame,
      selectedDate,
      handleSelectChange,
      handleTabChange,
    };
  },
});
</script>

<style>
.chart-container {
  width: 100%;
  height: 400px; /* 设置图表容器的高度 */
  overflow: auto; /* 如有必要允许滚动 */
}

.no-chart {
  text-align: center; /* 中心对齐 */
  padding: 50px 0; /* 上下内边距 */
  display: flex; /* flexbox布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.data-table {
  margin-top: 16px; /* 表格与顶部的间距 */
  width: 15%; /* 设置表格宽度为50% */
  overflow-x: auto; /* 水平滚动 */
  margin-left: 20px; /* 向右移动100px */
}

.tabs-container {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 50px; /* 可选：为整个容器添加左内边距 */
  align-items: flex-start; /* 让内容左对齐，使得标签不会消失 */
  width: 100%; /* 确保容器宽度 */
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
  .data-table {
    margin-left: 0; /* 小屏幕下取消左外边距 */
  }
}

@media (max-width: 480px) {
  .tabs-container {
    padding-left: 10px; /* 更小屏幕下进一步减少内边距 */
  }
}
</style>

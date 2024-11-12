<template>
  <PageWrapper class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-blue-500 text-white p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <CircleIcon class="h-6 w-6" />
          <span class="text-lg font-medium">智慧租贷</span>
        </div>
        <div class="flex items-center space-x-4">
          <PlusIcon class="h-5 w-5 cursor-pointer" />
          <SearchIcon class="h-5 w-5 cursor-pointer" />
          <BellIcon class="h-5 w-5 cursor-pointer" />
          <div class="flex items-center space-x-2">
            <span>James</span>
            <img src="/placeholder.svg?height=32&width=32" class="h-8 w-8 rounded-full" />
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Left side: Functions and Stats -->
      <div class="col-span-1 md:col-span-2 space-y-6">
        <!-- Common Functions -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-medium">常用功能</h2>
            <InfoIcon class="h-5 w-5 text-gray-400" />
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              v-for="(item, index) in commonFunctions"
              :key="index"
              class="flex flex-col items-center p-4 cursor-pointer"
            >
              <div class="bg-blue-100 p-3 rounded-lg mb-2">
                <UsersIcon class="h-6 w-6 text-blue-500" />
              </div>
              <span class="text-sm">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Statistics Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Audit Management -->
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-lg font-medium mb-4">审批管理</h2>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold">1</div>
                <div class="text-sm text-gray-500">待我审批</div>
              </div>
              <div>
                <div class="text-2xl font-bold">0</div>
                <div class="text-sm text-gray-500">我发起的</div>
              </div>
              <div>
                <div class="text-2xl font-bold">0</div>
                <div class="text-sm text-gray-500">抄送我的</div>
              </div>
            </div>
          </div>

          <!-- Contract Management -->
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-lg font-medium mb-4">合约管理</h2>
            <div class="flex justify-between items-center mb-4">
              <div>
                <span class="text-3xl font-bold text-blue-500">495</span>
                <span class="text-gray-500 ml-2">(份)</span>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-2">
              <div v-for="(stat, index) in contractStats" :key="index" class="text-center">
                <div class="text-sm text-gray-500">{{ stat.label }}</div>
                <div class="text-sm">({{ stat.value }})</div>
              </div>
            </div>
          </div>

          <!-- Rental Stats -->
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-lg font-medium mb-4">租赁</h2>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(stat, index) in rentalStats" :key="index" class="text-center">
                <div class="text-2xl font-bold">{{ stat.value }}</div>
                <div class="text-sm text-gray-500">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Property Management -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-lg font-medium">房源管理</h2>
            <div class="flex items-center space-x-4">
              <span class="text-sm text-gray-500">更多 ></span>
              <PlusIcon class="h-5 w-5 text-blue-500 cursor-pointer" />
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="(property, index) in propertyStats"
              :key="index"
              class="bg-gray-50 p-4 rounded-lg"
            >
              <div class="flex justify-between items-center mb-4">
                <span class="text-sm font-medium">{{ property.type }}</span>
                <div class="flex items-center text-sm text-gray-500">
                  <span>出租率: {{ property.rate }}</span>
                  <InfoIcon class="h-4 w-4 ml-1" />
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 text-center mb-4">
                <div v-for="(stat, statIndex) in property.stats" :key="statIndex">
                  <div class="text-lg font-bold">{{ stat.value }}</div>
                  <div class="text-xs text-gray-500">{{ stat.label }}</div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 text-center">
                <div v-for="(period, periodIndex) in property.periods" :key="periodIndex">
                  <div class="text-lg font-bold">{{ period.value }}</div>
                  <div class="text-xs text-gray-500">{{ period.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side: To-Do List, Latest Messages, Circular Chart -->
      <div class="space-y-6">
        <!-- To-Do List -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h2 class="text-lg font-medium">代办事项</h2>
          <ul class="space-y-4">
            <li v-for="item in todoItems" :key="item.title" class="border-b pb-2">
              <h3 class="font-medium">{{ item.title }}</h3>
              <p class="text-sm text-gray-500">{{ item.description }}</p>
              <span class="text-xs text-gray-400">{{ item.time }}</span>
            </li>
          </ul>
        </div>

        <!-- Latest Messages -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h2 class="text-lg font-medium">最新消息</h2>
          <ul class="space-y-4">
            <li v-for="message in latestMessages" :key="message.title" class="border-b pb-2">
              <h3 class="font-medium">{{ message.title }}</h3>
              <p class="text-sm text-gray-500">{{ message.description }}</p>
              <span class="text-xs text-gray-400">{{ message.time }}</span>
            </li>
          </ul>
        </div>

        <!-- Circular Chart -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
          <h2 class="text-lg font-medium">数据可视化</h2>
          <div ref="chartRef" class="h-48 w-full"></div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { CircleIcon, PlusIcon, SearchIcon, BellIcon, InfoIcon, UsersIcon } from 'lucide-vue-next';
  import * as echarts from 'echarts';

  // Data
  const commonFunctions = ['招商管理', '资产管理', '财务管理', '审批管理'];

  const contractStats = [
    { label: '待签字', value: 0 },
    { label: '在中', value: 0 },
    { label: '即将到期', value: 0 },
    { label: '已到期', value: 0 },
  ];

  const rentalStats = [
    { label: '待入住', value: 1 },
    { label: '今日预定', value: 0 },
    { label: '本周预定', value: 0 },
    { label: '本月预定', value: 0 },
  ];

  const propertyStats = [
    {
      type: '公寓 (1236套, 1256间)',
      rate: '45.08%',
      stats: [
        { label: '空置', value: '686' },
        { label: '配置', value: '1' },
        { label: '已租', value: '1' },
      ],
      periods: [
        { label: '即将到期(30天内)', value: '686' },
        { label: '已到期', value: '1' },
      ],
    },
    {
      type: '商办 (1236套, 1256间)',
      rate: '45.08%',
      stats: [
        { label: '空置', value: '400' },
        { label: '配置', value: '1' },
        { label: '已租', value: '1' },
      ],
      periods: [
        { label: '即将到期(30天内)', value: '426' },
        { label: '已到期', value: '1' },
      ],
    },
    {
      type: '厂房 (1236套, 1256间)',
      rate: '45.08%',
      stats: [
        { label: '空置', value: '300' },
        { label: '配置', value: '1' },
        { label: '已租', value: '1' },
      ],
      periods: [
        { label: '即将到期(30天内)', value: '686' },
        { label: '已到期', value: '1' },
      ],
    },
    // 添加新的房源类型
    {
      type: '别墅 (1236套, 1256间)',
      rate: '60.00%',
      stats: [
        { label: '空置', value: '400' },
        { label: '配置', value: '2' },
        { label: '已租', value: '1' },
      ],
      periods: [
        { label: '即将到期(30天内)', value: '200' },
        { label: '已到期', value: '0' },
      ],
    },
    {
      type: '写字楼 (1236套, 1256间)',
      rate: '50.00%',
      stats: [
        { label: '空置', value: '500' },
        { label: '配置', value: '1' },
        { label: '已租', value: '2' },
      ],
      periods: [
        { label: '即将到期(30天内)', value: '300' },
        { label: '已到期', value: '0' },
      ],
    },
  ];

  const todoItems = [
    {
      title: '租约到期提醒',
      description: '房间 A-101 的租约将在 30 天后到期，请及时处理',
      time: '2小时前',
    },
    {
      title: '待审批事项',
      description: '新的租赁合同需要您的审批',
      time: '4小时前',
    },
    {
      title: '维修请求',
      description: 'B栋3楼报修空调故障，请安排维修',
      time: '1天前',
    },
  ];
  const latestMessages = [
    {
      title: '系统更新',
      description: '系统将在今晚进行更新，预计在凌晨 2 点完成。',
      time: '3小时前',
    },
    {
      title: '新功能发布',
      description: '已发布新的统计功能，快来体验！',
      time: '5小时前',
    },
    {
      title: '维护通知',
      description: '定于本周五上午10点进行例行维护。',
      time: '1天前',
    },
  ];

  // 创建响应式变量
  const chartRef = ref(null);
  const pieData = ref([
    { value: 463, name: '公寓' },
    { value: 395, name: '商办' },
    { value: 157, name: '商铺' },
    { value: 149, name: '厂房' },
    { value: 147, name: '车位' },
  ]);
  const pieName = ref([]);

  // 初始化数据
  const initData = () => {
    for (let i = 0; i < pieData.value.length; i++) {
      pieName.value[i] = pieData.value[i].name;
    }
  };

  // 初始化图表
  const initEcharts = () => {
    const option = {
      legend: {
        data: pieName.value,
        right: '5%',
        top: '35%',
        orient: 'vertical',
      },
      title: {
        text: '',
        top: '0%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          label: {
            show: true,
            formatter: '{b} : {c} ({d}%)', // b代表名称，c代表对应值，d代表百分比
          },
          radius: '75%',
          data: pieData.value,
        },
      ],
    };

    // 初始化 ECharts 实例
    if (chartRef.value) {
      const myChart = echarts.init(chartRef.value);
      myChart.setOption(option);

      // 适应窗口大小变化
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  };

  // Vue 生命周期钩子
  onMounted(() => {
    initData(); // 数据初始化
    initEcharts(); // 初始化 ECharts
  });
</script>

<style scoped>
  /* 可以根据需要自定义具体样式 */
</style>

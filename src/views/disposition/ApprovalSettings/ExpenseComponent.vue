<!--费用科目-->
<template>
  <PageWrapper>
    <nav class="flex flex-col w-full justify-between">
      <!-- 使用v-for循环渲染每个标题和对应的复选框组 -->
      <div
        v-for="(title, index) in Asstitle"
        :key="index"
        class="flex mb-4 border-b border-dashed border-gray-400 my-4"
      >
        <div class="flex justify-start w-1/4">
          <span>{{ title.title }}</span>
        </div>
        <div class="flex justify-start w-3/4 space-y-1.5 space-x-1.5 mb-5 flex-col">
          <div class="grid grid-cols-6 flex flex-wrap">
            <a-checkbox
              v-for="(option, i) in plainOptions[index]"
              :key="option.value"
              v-model="checkedOptions[index][option.value]"
              class="checkbox-item flex items-center"
              :class="{ 'first-checkbox': i === 0 }"
            >
              {{ option.label }}
            </a-checkbox>
          </div>

          <div>
            <button
              @click="showModal"
              class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg"
            >
              <span class="mr-1 text-xl">+</span>添加
            </button>
          </div>
        </div>
      </div>

      <a-modal
        v-model:visible="visible"
        title="新增字典"
        @ok="handleOk"
        @cancel="handleCancel"
        :mask="false"
        class="custom-modal"
      >
        <a-form layout="vertical">
          <a-form-item label="名称" required>
            <a-input v-model:value="dictionaryName" placeholder="输入字典名称" maxlength="10" />
          </a-form-item>
          <a-form-item label="图标">
            <a-upload>
              <a-button> <UploadOutlined /> 上传图片 </a-button>
            </a-upload>
          </a-form-item>
          <a-form-item label="描述" required>
            <a-textarea v-model:value="description" placeholder="请输入描述文字" maxlength="100" />
          </a-form-item>
        </a-form>
      </a-modal>
    </nav>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  // import { Row, Col } from 'ant-design-vue';
  const visible = ref<boolean>(false);
  const dictionaryName = ref('');
  const description = ref('');
  const showModal = () => {
    visible.value = true;
  };

  const handleOk = () => {
    console.log('Dictionary Name:', dictionaryName.value);
    console.log('Description:', description.value);
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };
  // 每组复选框的选项
  const plainOptions = ref([
    [
      { label: '预定定金', value: 'deposit' },
      { label: '定金抵扣', value: 'deposit_deduction' }
    ],
    [
      { label: '房费', value: 'room_fee' },
      { label: '房屋租金', value: 'house_rent' },
      { label: '家电租金', value: 'appliance_rent' },
      { label: '家具租金', value: 'furniture_rent' }
    ],
    [
      { label: '房屋押金', value: 'house_deposit' },
      { label: '保证', value: 'guarantee' },
      { label: '门卡押金', value: 'card_deposit' },
      { label: '钥匙押金', value: 'key_deposit' },
      { label: '家具押金', value: 'furniture_deposit' },
      { label: '水卡押金', value: 'water_card_deposit' },
      { label: '电卡押金', value: 'electricity_card_deposit' },
      { label: '水电押金', value: 'utilities_deposit' },
      { label: '燃气押金', value: 'gas_deposit' },
      { label: '其他押金', value: 'other_deposit' },
    ],
    [
      { label: '水费', value: 'water_fee' },
      { label: '电费', value: 'electricity_fee' },
      { label: '燃气费', value: 'gas_fee' },
      { label: '煤气费', value: 'coal_gas_fee' },
      { label: '供暖费', value: 'heating_fee' },
      { label: '冷水费', value: 'cold_water_fee' },
      { label: '热水费', value: 'hot_water_fee' },
      { label: '宽带费', value: 'broadband_fee' },
      { label: '电视费', value: 'tv_fee' },
      { label: '空调费', value: 'air_conditioning_fee' },
      { label: '中水费', value: 'reclaimed_water_fee' },
      { label: '污水费', value: 'sewage_fee' },
      { label: '能源费', value: 'energy_fee' },
    ],
    [
      { label: '服务费', value: 'service_fee' },
      { label: '加盟费', value: 'franchise_fee' },
      { label: '保洁费', value: 'cleaning_fee' },
      { label: '委管费', value: 'agency_fee' },
      { label: '物业费', value: 'property_fee' },
      { label: '管理费', value: 'management_fee' },
      { label: '卫生费', value: 'sanitation_fee' },
      { label: '保险费', value: 'insurance_fee' },
      { label: '换房费', value: 'house_swapping_fee' },
      { label: '排污费', value: 'pollution_fee' },
      { label: '运输费', value: 'transportation_fee' },
      { label: '电梯费', value: 'elevator_fee' },
      { label: '佣金', value: 'commission' },
      { label: '中介费', value: 'agency_fee' },
    ],
    [
      { label: '家电维修', value: 'appliance_repair' },
      { label: '房屋维修', value: 'house_repair' },
      { label: '公区维修', value: 'common_area_repair' },
      { label: '装修费', value: 'renovation_fee' },
      { label: '维修维修基金', value: 'repair_fund' },
      { label: '材料费', value: 'material_fee' },
      { label: '安装费', value: 'installation_fee' },
      { label: '人工费', value: 'labor_fee' },
      { label: '维护', value: 'maintenance' },
    ],
    [
      { label: '渠道分成', value: 'channel_split' },
      { label: '利息', value: 'interest' },
      { label: '税金', value: 'tax' },
    ],
    [
      { label: '违约金', value: 'breach_penalty' },
      { label: '赔偿金', value: 'compensation' },
      { label: '滞纳金', value: 'late_fee' },
      { label: '金融扣除', value: 'financial_deduction' },
    ],
    [
      { label: '工本费', value: 'material_cost' },
      { label: '车位费', value: 'parking_fee' },
      { label: '其他', value: 'other' },
      { label: '公区分摊', value: 'public_area_sharing' },
    ],
  ]);
  // // 初始化为一个数组，以存储每组复选框的选中值
  // const checkedList = ref<string[][]>(Array(9).fill([])); // 根据需要的组数进行调整
  // 用一个对象存储每个选项的选中状态
  const checkedOptions = ref(plainOptions.value.map(() => ({})));
  const Asstitle = ref([
    { title: '家电' },
    { title: '租金' },
    { title: '押金' },
    { title: '能耗' },
    { title: '服务' },
    { title: '装修/维修' },
    { title: '手续' },
    { title: '违约赔款' },
    { title: '其他费用' },
  ]);


</script>

<style scoped>
  .custom-modal .ant-modal {
    box-shadow: none !important;
  }
  .checkbox-item {
    width: 150px; /* 您希望的宽度 */
  }
  .first-checkbox {
    margin-left: 8px;
  }
</style>

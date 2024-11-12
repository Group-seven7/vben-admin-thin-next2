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
      { label: '空调', value: 'air_conditioner' },
      { label: '冰箱', value: 'refrigerator' },
      { label: '洗衣机', value: 'washing_machine' },
      { label: '微波炉', value: 'microwave' },
      { label: '饮水机', value: 'water_dispenser' },
      { label: '电视', value: 'tv' },
      { label: '电磁炉', value: 'induction_cooker' },
      { label: '油烟机', value: 'range_hood' },
      { label: '热水器', value: 'water_heater' },
      { label: '暖气', value: 'heating' },
      { label: '燃气灶', value: 'gas_stove' },
      { label: '空调遥控器', value: 'air_conditioner_remote' },
    ],
    [
      { label: '座椅', value: 'chair' },
      { label: '床', value: 'bed' },
      { label: '书桌', value: 'desk' },
      { label: '沙发', value: 'sofa' },
      { label: '衣柜', value: 'wardrobe' },
      { label: '床头柜', value: 'bedside_table' },
      { label: '餐桌', value: 'dining_table' },
      { label: '柜台', value: 'counter' },
      { label: '鞋/衣架', value: 'shoe_clothing_rack' },
      { label: '洽谈桌', value: 'meeting_table' },
      { label: '茶几', value: 'tea_table' },
      { label: '床垫', value: 'mattress' },
      { label: '电视柜', value: 'tv_cabinet' },
      { label: '餐椅', value: 'dining_chair' },
    ],
    [
      { label: '灯', value: 'light' },
      { label: '窗帘', value: 'curtain' },
      { label: '字画', value: 'painting' },
    ],
    [
      { label: '办公桌', value: 'office_desk' },
      { label: '办公椅', value: 'office_chair' },
      { label: '会议室', value: 'conference_room' },
    ],
    [
      { label: '智能门锁', value: 'smart_lock' },
      { label: 'WiFi', value: 'wifi' },
    ],
  ]);
  // 用一个对象存储每个选项的选中状态
  const checkedOptions = ref(plainOptions.value.map(() => ({})));
  const Asstitle = ref([
    { title: '家电' },
    { title: '家居' },
    { title: '装饰' },
    { title: '办公用品' },
    { title: '其他物品' },
  ]);

</script>

<style scoped>
  .custom-modal .ant-modal {
    box-shadow: none !important;
  }
  .checkbox-item {
    width: 150px; /* 调整为所需的宽度 */
  }
  .first-checkbox {
    margin-left: 8px;
  }
</style>

<template>
  <a-button type="primary" @click="showModal">显示步骤框</a-button>
  <a-modal
    v-model:visible="isVisible"
    title="项目信息配置"
    :footer="[]"
    @cancel="handleCancel"
    :width="1100"
  >
    <a-steps :current="currentStep" class="custom-steps">
      <a-step v-for="step in steps" :key="step.title" :title="step.title" />
    </a-steps>
    <div v-if="currentStep === 0">
      <building></building>
      <!-- 项目信息的相关表单或内容 -->
      <div class="flex">
        <a-button type="primary" @click="nextStep" class="ml-auto">保存并去配置分期信息</a-button>
      </div>
    </div>
    <div v-if="currentStep === 1">
      <descrlbe></descrlbe>

      <!-- 楼栋配置的相关表单或内容 -->
      <div class="flex">
        <div class="ml-auto">
          <span class="text-blue-500">保存并去配置房间信息</span>
          <a-button type="primary" @click="nextStep">保存并去配置分期信息</a-button>
        </div>
      </div>
    </div>
    <div v-if="currentStep === 2">
      <room></room>
      <!-- 房间配置的相关表单或内容 -->
      <a-button type="primary" @click="nextStep">下一步</a-button>
    </div>
    <div v-if="currentStep === 3">
      <information></information>
      <!-- 推广描述的相关表单或内容 -->
      <a-button type="primary" @click="finish">完成</a-button>
    </div>
  </a-modal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import building from './building.vue'; // 这是项目信息组件
  import information from './information.vue'; // 这是配置楼栋组件
  import room from './room.vue'; // 这是配置房间组件
  import descrlbe from './describe.vue'; // 这是推广描述组件

  const isVisible = ref(false);
  const currentStep = ref(0);
  const steps = ref([
    { title: '项目信息' },
    { title: '配置楼栋' },
    { title: '配置房间' },
    { title: '推广描述' },
  ]);

  const showModal = () => {
    isVisible.value = true;
  };

  const handleCancel = () => {
    isVisible.value = false;
    currentStep.value = 0; // Reset step when closing the modal
  };

  const nextStep = () => {
    if (currentStep.value < steps.value.length - 1) {
      currentStep.value++;
    } else {
      finish();
    }
  };

  const finish = () => {
    isVisible.value = false;
    currentStep.value = 0; // Reset step when finishing
  };
</script>

<style scoped>
  .custom-steps .ant-steps-item-title {
    font-size: 16px; /* 步骤标题字体大小 */
    color: #333; /* 步骤标题字体颜色 */
  }

  .custom-steps .ant-steps-item-tail {
    background-color: #e8e8e8; /* 步骤条线的颜色 */
  }

  .custom-steps .ant-steps-item-process .ant-steps-item-title {
    color: #0d6efd; /* 当前步骤标题的颜色 */
  }

  .custom-steps .ant-steps-item-process .ant-steps-item-tail {
    background-color: #0d6efd; /* 当前步骤条线的颜色 */
  }

  .custom-steps .ant-steps-item-finish .ant-steps-item-title {
    color: #52c41a; /* 完成步骤标题的颜色 */
  }

  .custom-steps .ant-steps-item-finish .ant-steps-item-tail {
    background-color: #52c41a; /* 完成步骤条线的颜色 */
  }
</style>

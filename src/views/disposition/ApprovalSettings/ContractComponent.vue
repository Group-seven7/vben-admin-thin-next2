<!--合约-->
<template>
  <PageWrapper>
    <!--    -->
    <nav class="mb-6">
      <Row :gutter="10" class="mb-4 border-b border-dashed border-gray-400 mb-6">
        <Col span="6"> 租客解约原因 </Col>
        <Col span="18">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a-checkbox v-model:checked="isChecked" class="ml-5">工作地点变更</a-checkbox>
            <a-checkbox v-model:checked="isCheckedA">换城市</a-checkbox>
            <a-checkbox v-model:checked="isCheckedB">换工作</a-checkbox>
            <a-checkbox v-model:checked="isCheckedC">服务不满意</a-checkbox>
            <a-checkbox v-model:checked="isCheckedD">换房子</a-checkbox>
            <a-checkbox v-model:checked="isCheckedE">其他</a-checkbox>
            <button
              @click="showModal"
              class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500"
            >
              <span class="mr-1 text-xl">+</span>添加
            </button>
          </div>
        </Col>
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
              <a-textarea
                v-model:value="description"
                placeholder="请输入描述文字"
                maxlength="100"
              />
            </a-form-item>
          </a-form>
        </a-modal>
      </Row>
    </nav>
    <!--    -->
    <nav class="flex justify-between mb-4 border-b border-dashed border-gray-400 my-4 mb-5">
      <div class="w-1/4">租客合同条约</div>
      <div class="w-3/4">
        <button
          @click="showModal"
          class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500"
        >
          <span class="mr-1 text-xl">+</span>添加
        </button>
      </div>
    </nav>
    <!--    -->
    <nav class="flex justify-between">
      <div class="w-1/4">预定类型</div>
      <div class="w-3/4 justify-between">
        <div class="flex">
          <a-checkbox v-model:checked="isCheckedF">工作地点变更</a-checkbox>
          <a-checkbox v-model:checked="isCheckedG">工作地点变更</a-checkbox>
          <button
            @click="showModal"
            class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500"
          >
            <span class="mr-1 text-xl">+</span>添加
          </button>
        </div>
      </div>
    </nav>
  </PageWrapper>
</template>
<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col } from 'ant-design-vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  const isChecked = ref<boolean>(false);
  const isCheckedA = ref<boolean>(false);
  const isCheckedB = ref<boolean>(false);
  const isCheckedC = ref<boolean>(false);
  const isCheckedD = ref<boolean>(false);
  const isCheckedE = ref<boolean>(false);
  const isCheckedF = ref<boolean>(false);
  const isCheckedG = ref<boolean>(false);
  const visible = ref<boolean>(false);
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
</script>
<style scoped lang="less"></style>

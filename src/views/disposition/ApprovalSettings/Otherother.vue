<!--其他-->
<template>
  <PageWrapper>
    <nav class="flex">
      <div class="flex justify-start w-1/4">员工类型</div>
      <div class="flex w-3/4">
        <div class="grid grid-cols-4 gap-4">
          <a-checkbox v-model:checked="isChecked">员工</a-checkbox>
          <a-checkbox v-model:checked="isCheckedA">兼职人员</a-checkbox>
          <a-checkbox v-model:checked="isCheckedB">供应商</a-checkbox>
          <button
            @click="showModal"
            class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500"
          >
            <span class="mr-1 text-xl">+</span>添加
          </button>
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
  const isChecked = ref<boolean>(false);
  const isCheckedA = ref<boolean>(false);
  const isCheckedB = ref<boolean>(false);
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

<!--租后 其他 业绩管理-->
<template>
  <PageWrapper>
    <nav class="flex justify-around">
      <div class="flex justify-start">租赁提出标准</div>
      <div>
        <div class="grid grid-cols-4 gap-4">
          <a-checkbox v-model:checked="isChecked" style="margin-left: 7px">自主招商</a-checkbox>
          <a-checkbox v-model:checked="isCheckedA">全民营销</a-checkbox>
          <a-checkbox v-model:checked="isCheckedB">产业合作网络推荐</a-checkbox>
          <a-checkbox v-model:checked="isCheckedC">产业合作机构推荐</a-checkbox>
          <a-checkbox v-model:checked="isCheckedD">产业合作个人推荐</a-checkbox>
          <a-checkbox v-model:checked="isCheckedE">产业合作企业推荐</a-checkbox>

          <button
            @click="showModal"
            class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500"
          >
            <span class="mr-1 text-xl">+</span>添加
          </button>
        </div>
      </div>
    </nav>
    <nav class="flex justify-around mt-10">
      <div class="flex justify-start">分佣职责</div>
      <div>
        <div class="grid grid-cols-4 gap-4 mr-45">
          <a-checkbox v-model:checked="isChecked_A" style="margin-left: 7px">招商专员</a-checkbox>
          <a-checkbox v-model:checked="isChecked_B">招商经理</a-checkbox>
          <a-checkbox v-model:checked="isChecked_C">全员推销员</a-checkbox>
          <a-checkbox v-model:checked="isChecked_D">签约人</a-checkbox>

          <button
            @click="showModal"
            class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500"
          >
            <span class="mr-1 text-xl">+</span>添加
          </button>
        </div>
      </div>
    </nav>
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
  </PageWrapper>
</template>
<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { UploadOutlined } from '@ant-design/icons-vue';

  import { ref } from 'vue';
  const isChecked = ref<boolean>(false);
  const isCheckedA = ref<boolean>(false);
  const isCheckedB = ref<boolean>(false);
  const isCheckedC = ref<boolean>(false);
  const isCheckedD = ref<boolean>(false);
  const isChecked_A = ref<boolean>(false);
  const isChecked_B = ref<boolean>(false);
  const isChecked_C = ref<boolean>(false);
  const isChecked_D = ref<boolean>(false);
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

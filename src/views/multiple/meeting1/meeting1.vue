<template>
  <PageWrapper class="min-h-screen bg-gray-50">
    <div class="flex justify-center items-center p-4">
      <div class="w-full max-w-md bg-white rounded shadow-lg p-4">
        <h1 class="text-xl font-semibold mb-4">添加角色</h1>
        <form class="space-y-4" @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="roleName" class="block text-gray-700">角色名称</label>
            <input
              type="text"
              id="roleName"
              v-model="roleName"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label for="department" class="block text-gray-700">角色所属部门</label>
            <select
              id="department"
              v-model="department"
              class="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">请选择部门</option>
              <!-- 这里可以添加具体的部门选项 -->
              <option value="1">部门1</option>
              <option value="2">部门2</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700">角色描述</label>
            <textarea
              id="description"
              v-model="description"
              class="w-full p-2 border border-gray-300 rounded"
              rows="3"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              @click="resetForm"
              class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
              >取消</button
            >
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">确定</button>
          </div>
        </form>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
  import { ref } from 'vue';

  const roleName = ref('');
  const department = ref('');
  const description = ref('');

  const submitForm = () => {
    console.log({ roleName, department, description });
    // 这里可以添加表单提交的逻辑
  };

  const resetForm = () => {
    roleName.value = '';
    department.value = '';
    description.value = '';
  };
</script>

<style scoped>
  /* 可以根据需要自定义具体样式 */
</style>

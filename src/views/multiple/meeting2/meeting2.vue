<template>
  <PageWrapper class="min-h-screen bg-gray-50">
    <div class="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
      <h1 class="text-xl font-semibold mb-4">添加员工</h1>
      <form class="space-y-4" @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="employeeId" class="block text-gray-700">员工编号</label>
          <input
            type="text"
            id="employeeId"
            v-model="employeeId"
            class="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div class="grid grid-cols-6 gap-4 mb-4">
          <div class="col-span-6 sm:col-span-3">
            <label for="employeeName" class="block text-gray-700">员工姓名</label>
            <input
              type="text"
              id="employeeName"
              v-model="employeeName"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="employeePhone" class="block text-gray-700">员工电话（登录手机号）</label>
            <input
              type="tel"
              id="employeePhone"
              v-model="employeePhone"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>
        <div class="grid grid-cols-6 gap-4 mb-4">
          <div class="col-span-6 sm:col-span-3">
            <label for="mainRole" class="block text-gray-700">主角色</label>
            <select
              id="mainRole"
              v-model="mainRole"
              class="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">请选择</option>
              <option value="departmentLeader">本部门领导</option>
            </select>
            <input
              id="mainRoleCheckbox"
              v-model="mainRoleCheckbox"
              type="checkbox"
              class="form-checkbox"
            />
            <label for="mainRoleCheckbox" class="ml-2">本部门领导</label>
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="subRole" class="block text-gray-700">副角色</label>
            <select
              id="subRole"
              v-model="subRole"
              class="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">请选择</option>
              <option value="departmentLeader">本部门领导</option>
            </select>
            <input
              id="subRoleCheckbox"
              v-model="subRoleCheckbox"
              type="checkbox"
              class="form-checkbox"
            />
            <label for="subRoleCheckbox" class="ml-2">本部门领导</label>
          </div>
        </div>
        <div class="grid grid-cols-6 gap-4 mb-4">
          <div class="col-span-6 sm:col-span-3">
            <label for="idNumber" class="block text-gray-700">员工身份证号</label>
            <input
              type="text"
              id="idNumber"
              v-model="idNumber"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="gender" class="block text-gray-700">性别</label>
            <select
              id="gender"
              v-model="gender"
              class="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-6 gap-4 mb-4">
          <div class="col-span-6 sm:col-span-3">
            <label for="email" class="block text-gray-700">邮箱</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="entryDate" class="block text-gray-700">入职日期</label>
            <input
              type="date"
              id="entryDate"
              v-model="entryDate"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
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
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const employeeId = ref('');
  const employeeName = ref('');
  const employeePhone = ref('');
  const mainRole = ref('');
  const subRole = ref('');
  const idNumber = ref('');
  const gender = ref('');
  const email = ref('');
  const entryDate = ref('');

  const mainRoleCheckbox = ref(false);
  const subRoleCheckbox = ref(false);

  const submitForm = () => {
    console.log({
      employeeId,
      employeeName,
      employeePhone,
      mainRole,
      subRole,
      idNumber,
      gender,
      email,
      entryDate,
      mainRoleCheckbox: mainRoleCheckbox.value,
      subRoleCheckbox: subRoleCheckbox.value,
    });
    // 这里可以添加表单提交的逻辑
  };

  const resetForm = () => {
    employeeId.value = '';
    employeeName.value = '';
    employeePhone.value = '';
    mainRole.value = '';
    subRole.value = '';
    idNumber.value = '';
    gender.value = '';
    email.value = '';
    entryDate.value = '';
    mainRoleCheckbox.value = false;
    subRoleCheckbox.value = false;
  };
</script>

<style scoped>
  /* 可以根据需要自定义具体样式 */
</style>

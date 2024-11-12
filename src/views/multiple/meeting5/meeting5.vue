<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
      <h3 class="text-lg font-medium text-center">转为公客</h3>
      <p class="text-gray-700 text-center"
        >确定要将潜在租客线索[测试客户505/13112345678]转为公客吗?</p
      >
      <div class="mt-4 w-5/6">
        <label for="reason" class="block text-gray-700 text-sm font-bold mb-2">请输入原因:</label>
        <textarea
          id="reason"
          v-model="reason"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="0/200"
        ></textarea>
      </div>
      <div class="mt-6 flex w-full justify-center">
        <button @click="cancel" class="hover:bg-red-700 font-bold py-2 px-4 rounded mr-2 border-2">
          取消
        </button>
        <button
          @click="confirm"
          class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded border-2"
        >
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const reason = ref(''); // 用于双向绑定输入框的值

  function cancel() {
    // 取消操作的逻辑
    console.log('取消操作');
  }

  function confirm() {
    // 确认操作的逻辑
    console.log('确认操作，原因：', reason.value);
  }
</script>

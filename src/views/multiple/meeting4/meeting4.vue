<template>
  <div class="bg-white shadow-md rounded-lg p-4 max-w-screen-md mx-auto">
    <!-- 招商详情和关闭按钮 -->
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-3xl font-bold">招商详情</h1>
      <button class="text-2xl hover:text-red-500 transition duration-300">X</button>
    </div>

    <!-- 意向项目 -->
    <div class="mb-4">
      <h2 class="text-xl font-semibold mb-2">意向项目</h2>
      <ul class="flex items-center space-x-2">
        <li class="text-lg border-2">测试项目1</li>
        <li class="text-lg border-2">测试项目2</li>
        <li class="text-lg border-2">资产录入：428</li>
      </ul>
    </div>

    <!-- 基本信息 -->
    <div class="mb-4">
      <ul class="flex items-center space-x-2">
        <li class="text-lg px-2 py-1">联名客户</li>
        <li class="text-lg px-17 py-1">联系人</li>
        <li class="text-lg px-17 py-1">跟进</li>
        <li class="text-lg border-b-4 border-blue-200 px-17 py-1">操作记录</li>
      </ul>
    </div>

    <!-- 操作记录轴 -->
    <div>
      <a-steps progress-dot :current="6" direction="vertical">
        <a-step title="admin    2024.5.4 09:59:50" description="客户状态由“问询”转为“来访”" />
        <a-step title="admin    2024.6.7 10:50:32" description="客户状态由“问询”转为“来访”" />
        <a-step title="Waiting  2024.6.7 10:50:32" description="客户状态由“问询”转为“来访”" />
        <a-step title="Waiting  2024.6.7 10:50:32" description="测试图片有没有回复" />
        <a-step title="Waiting  2024.6.7 10:50:32" description="This is a description." />
        <a-step title="Waiting  2024.6.7 10:50:32" description="This is a description." />
      </a-steps>
    </div>
  </div>
</template>

<script setup>
  // 如果需要的话，可以在这里添加组件逻辑
  import { Steps } from 'ant-design-vue';
</script>

<style>
  /* 在这里添加Tailwind CSS的样式 */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

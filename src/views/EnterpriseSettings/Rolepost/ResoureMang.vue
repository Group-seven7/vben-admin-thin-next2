<!--支援权限-->
<template>
  <div>
    <!-- 总控制按钮 -->
    <a-checkbox v-model:checked="checkAllMain" @change="onCheckAllMainChange">
      总控制按钮
    </a-checkbox>
  </div>
  <div class="p-4">
    <!-- 工作台 -->
    <nav class="mb-4">
      <div class="border-b border-gray-300">
        <a-checkbox
          v-model:checked="checkAll"
          :indeterminate="indeterminate"
          @change="onCheckAllChange"
        >
          <span class="font-bold text-black">工作台</span>
        </a-checkbox>
      </div>
      <a-checkbox-group v-model:value="checkedList" :options="plainOptions" class="ml-6" />
    </nav>

    <!-- 招商租赁 -->
    <nav class="mb-4">
      <div class="border-b border-red-500">
        <a-checkbox
          v-model:checked="checkallStore"
          :indeterminate="indeterminate"
          @change="oncheckStore"
        >
          <span class="font-bold text-red-500">招商管理</span>
        </a-checkbox>
      </div>
      <div class="flex items-center mb-4">
        <div class="w-1/5">
          <a-checkbox v-model:checked="checkPrivateGuest" @change="onCheckPrivateGuestChange">
            <span>租房-私客</span>
          </a-checkbox>
        </div>
        <div class="w-4/5">
          <a-checkbox-group v-model:value="checkInvestment" :options="Privateguests" />
        </div>
      </div>
    </nav>

    <!-- 资产管理 -->
    <nav class="mb-4">
      <div class="border-b border-gray-300">
        <a-checkbox
          v-model:checked="checkAllAsset"
          :indeterminate="indeterminateAsset"
          @change="onCheckAllAssetChange"
        >
          <span class="font-bold text-red-500">资产管理</span>
        </a-checkbox>
      </div>
      <div class="ml-6">
        <div>
          <a-checkbox v-model:checked="checkAssetManage" @change="onCheckAssetManageChange">
            资产管理
          </a-checkbox>
          <a-checkbox-group v-model:value="checkAssetOptions" :options="assetOptions" />
        </div>
        <div>
          <a-checkbox>空房快查</a-checkbox>
          <a-checkbox-group v-model:value="emptyRoomOptions" :options="['查看']" />
        </div>
        <div>
          <a-checkbox>调价管理</a-checkbox>
          <a-checkbox-group
            v-model:value="adjustPriceOptions"
            :options="['查看', '添加', '删除', '作废']"
          />
        </div>
      </div>
    </nav>

    <!-- 财务管理 -->
    <nav class="mb-4">
      <div class="border-b border-gray-300">
        <a-checkbox
          v-model:checked="checkAllFinance"
          :indeterminate="indeterminateFinance"
          @change="onCheckAllFinanceChange"
        >
          <span class="font-bold text-blue-500">财务管理</span>
        </a-checkbox>
      </div>
      <div class="ml-6">
        <div>
          <a-checkbox v-model:checked="checkAccountManage" @change="onCheckAccountManageChange">
            账单管理
          </a-checkbox>
          <a-checkbox-group v-model:value="checkAccountOptions" :options="accountOptions" />
        </div>
        <div>
          <a-checkbox>账单流水</a-checkbox>
          <a-checkbox-group v-model:value="billFlowOptions" :options="['查看', '作废']" />
        </div>
        <div>
          <a-checkbox>未扣款</a-checkbox>
          <a-checkbox-group
            v-model:value="unDeductedOptions"
            :options="['查看', '添加未扣款', '关联流水', '审核通过', '审核驳回']"
          />
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
  import { ref } from 'vue';

  // 总控制
  const checkAllMain = ref(false);

  // 工作台
  const plainOptions = ['工作台首页', '我的待办', '合同预警', '审批管理'];
  const checkedList = ref([]);
  const checkAll = ref(false);
  const indeterminate = ref(false);

  // 招商管理
  const Privateguests = ['查看', '添加', '删除', '编辑', '导出'];
  const checkInvestment = ref([]);
  const checkallStore = ref(false);
  const checkPrivateGuest = ref(false);

  // 资产管理
  const assetOptions = ['查看', '导出', '导入', '编辑', '同步数据'];
  const checkAssetOptions = ref([]);
  const checkAllAsset = ref(false);
  const indeterminateAsset = ref(false);
  const emptyRoomOptions = ref([]);
  const adjustPriceOptions = ref([]);

  // 财务管理
  const accountOptions = [
    '查看来源账单',
    '查看房源账单',
    '查看租客账单',
    '查看业主账单',
    '添加账单',
    '编辑账单',
    '删除',
    '导出',
    '导入',
    '账单复原',
    '编辑标签',
    '关联业主',
    '报销同步',
    '付款/付款申请',
    '收款',
    '催收',
    '拆分账单',
    '申请开票',
  ];
  const checkAccountOptions = ref([]);
  const checkAllFinance = ref(false);
  const indeterminateFinance = ref(false);
  const billFlowOptions = ref([]);
  const unDeductedOptions = ref([]);

  // 总控制事件
  const onCheckAllMainChange = (e) => {
    const checked = e.target.checked;
    checkAll.value = checked;
    checkallStore.value = checked;
    checkAllAsset.value = checked;
    checkAllFinance.value = checked;
  };

  // 工作台控制事件
  const onCheckAllChange = (e) => {
    checkAll.value = e.target.checked;
    checkedList.value = checkAll.value ? plainOptions : [];
    indeterminate.value = false;
  };

  // 招商管理控制事件
  const oncheckStore = (e) => {
    checkallStore.value = e.target.checked;
    checkInvestment.value = checkallStore.value ? Privateguests : [];
  };

  // 资产管理控制事件
  const onCheckAllAssetChange = (e) => {
    checkAllAsset.value = e.target.checked;
    checkAssetOptions.value = checkAllAsset.value ? assetOptions : [];
    indeterminateAsset.value = false;
  };

  // 财务管理控制事件
  const onCheckAllFinanceChange = (e) => {
    checkAllFinance.value = e.target.checked;
    checkAccountOptions.value = checkAllFinance.value ? accountOptions : [];
    indeterminateFinance.value = false;
  };

  // 财务管理中的账单管理
  const onCheckAccountManageChange = (e) => {
    checkAccountManage.value = e.target.checked;
    checkAccountOptions.value = checkAccountManage.value ? accountOptions : [];
  };
</script>

<style scoped>
  .p-4 {
    padding: 1rem;
  }
  .mb-4 {
    margin-bottom: 1rem;
  }
  .ml-6 {
    margin-left: 1.5rem;
  }
  .border-b {
    border-bottom-width: 1px;
  }
  .border-gray-300 {
    border-color: #d1d5db;
  }
  .border-red-500 {
    border-color: #ef4444;
  }
  .border-blue-500 {
    border-color: #3b82f6;
  }
  .font-bold {
    font-weight: bold;
  }
  .text-black {
    color: #000;
  }
  .text-red-500 {
    color: #ef4444;
  }
  .text-blue-500 {
    color: #3b82f6;
  }
</style>

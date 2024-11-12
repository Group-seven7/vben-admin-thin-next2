<template>
  <PageWrapper class="min-h-screen bg-gray-50">
    <div class="max-w-3xl mx-auto p-4 bg-white rounded shadow-lg">
      <div class="flex justify-end">
        <button class="text-gray-500 hover:text-gray-700">X</button>
      </div>
      <h1 class="text-xl font-semibold mb-4">退租并结账</h1>
      <div class="mb-4">
        <label for="contractInfo" class="block text-gray-700">合同信息</label>
        <div id="contractInfo" class="bg-gray-100 p-2 rounded">
          房源地址：test01/1231栋1单元-test105室<br />
          合同周期：2024.04.01 ~ 2025.03.31<br />
          承租人：张 - 13333331234<br />
          租金：1000元/月<br />
          押金：1000元
        </div>
      </div>
      <div class="mb-4">
        <label for="returnReason" class="block text-gray-700">退租信息</label>
        <select
          id="returnReason"
          v-model="returnReason"
          class="w-full p-2 border border-gray-300 rounded"
        >
          <option value="normal">正常退租（租期已满，正常解约）</option>
          <option value="breach">违约退租(租期未满，中途退房)</option>
        </select>
        <input
          type="text"
          v-model="reason"
          class="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="解约原因"
        />
        <input
          type="date"
          v-model="leaveDate"
          class="w-full p-2 border border-gray-300 rounded mt-2"
          placeholder="实际离房日期"
        />
      </div>
      <div class="mb-4">
        <label for="returnForm" class="block text-gray-700">退房交验单</label>
        <textarea
          id="returnForm"
          v-model="returnForm"
          class="w-full p-2 border border-gray-300 rounded"
          rows="3"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="settlement" class="block text-gray-700">退租费用清算</label>
        <div id="settlement" class="bg-gray-100 p-2 rounded mt-2">
          <table class="w-full">
            <thead>
              <tr>
                <th class="text-left p-2">收支类型</th>
                <th class="text-left p-2">费用类型</th>
                <th class="text-left p-2">金额(元)</th>
                <th class="text-left p-2">减免金额</th>
                <th class="text-left p-2">费用周期</th>
                <th class="text-left p-2">费用备注</th>
                <th class="text-left p-2">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>收</td>
                <td>租金/房屋租金</td>
                <td
                  ><input
                    type="text"
                    v-model="rentAmount"
                    class="w-20 p-2 border border-gray-300 rounded"
                /></td>
                <td
                  ><input
                    type="text"
                    v-model="rentDiscount"
                    class="w-20 p-2 border border-gray-300 rounded"
                /></td>
                <td>2024.04.01 ~ 2024.04.01</td>
                <td>2024.04.01退</td>
                <td><button class="text-gray-500 hover:text-gray-700">添加费用</button></td>
              </tr>
              <tr>
                <td>支</td>
                <td>违约赔偿/违约金</td>
                <td
                  ><input
                    type="text"
                    v-model="penaltyAmount"
                    class="w-20 p-2 border border-gray-300 rounded"
                /></td>
                <td
                  ><input
                    type="text"
                    v-model="penaltyDiscount"
                    class="w-20 p-2 border border-gray-300 rounded"
                    disabled
                /></td>
                <td>2024.04.01 ~ 2024.04.01</td>
                <td>2024.04.01退</td>
                <td><button class="text-gray-500 hover:text-gray-700">添加费用</button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="text-right mt-2">
          费用合计：{{ totalAmount }}元（应向租客收款{{ totalAmount }}元）
        </div>
      </div>
      <div class="mb-4">
        <label for="expectedDate" class="block text-gray-700">预计收/付款时间</label>
        <input
          type="date"
          v-model="expectedDate"
          class="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div class="mb-4">
        <label for="returnRemark" class="block text-gray-700">退租备注</label>
        <textarea
          id="returnRemark"
          v-model="returnRemark"
          class="w-full p-2 border border-gray-300 rounded"
          rows="3"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="receipt" class="block text-gray-700">退租凭证</label>
        <input type="file" id="receipt" class="p-2 border border-gray-300 rounded" />
      </div>
      <div class="mb-4">
        <label for="accountInfo" class="block text-gray-700">退租租客收款账号</label>
        <div id="accountInfo" class="bg-gray-100 p-2 rounded">
          收款人姓名：<input
            type="text"
            v-model="accountName"
            class="w-full p-2 border border-gray-300 rounded"
          />
          收款人电话：<input
            type="text"
            v-model="accountPhone"
            class="w-full p-2 border border-gray-300 rounded"
          />
          退款账号：<input
            type="text"
            v-model="accountNumber"
            class="w-full p-2 border border-gray-300 rounded"
          />
          银行名称：<input
            type="text"
            v-model="bankName"
            class="w-full p-2 border border-gray-300 rounded"
          />
          支行名称：<input
            type="text"
            v-model="branchName"
            class="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button
          type="button"
          @click="resetForm"
          class="bg-gray-200 text-gray-800 px-4 py-2 rounded mr-2"
          >取消
        </button>
        <button type="button" @click="handleSubmit" class="bg-blue-500 text-white px-4 py-2 rounded"
          >确定
        </button>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
  import { ref } from 'vue';

  const returnReason = ref('');
  const reason = ref('');
  const leaveDate = ref('');
  const returnForm = ref('');
  const rentAmount = ref('0.00');
  const rentDiscount = ref('0.00');
  const penaltyAmount = ref('1000');
  const penaltyDiscount = ref('0.00');
  const expectedDate = ref('');
  const returnRemark = ref('');
  const accountName = ref('张');
  const accountPhone = ref('13333331234');
  const accountNumber = ref('');
  const bankName = ref('');
  const branchName = ref('');

  const totalAmount = ref(1032.97);

  const resetForm = () => {
    // Reset all form fields here
  };

  const handleSubmit = () => {
    console.log('Form submitted with data:', {
      returnReason: returnReason.value,
      reason: reason.value,
      leaveDate: leaveDate.value,
      returnForm: returnForm.value,
      rentAmount: rentAmount.value,
      rentDiscount: rentDiscount.value,
      penaltyAmount: penaltyAmount.value,
      penaltyDiscount: penaltyDiscount.value,
      expectedDate: expectedDate.value,
      returnRemark: returnRemark.value,
      accountName: accountName.value,
      accountPhone: accountPhone.value,
      accountNumber: accountNumber.value,
      bankName: bankName.value,
      branchName: branchName.value,
      totalAmount: totalAmount.value,
    });
    // Add form submission logic here
  };
</script>

<style scoped>
  /* Add custom styles here */
</style>

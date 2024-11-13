<!--合约管理-->
<template>
  <PageWrapper class="overflow-y-auto h-75vh border border-gray-300">
  <header class="flex items-center px-4 py-2 border-b">
    <!-- 左侧选择框 -->
    <div class="flex justify-start mr-4">
      <Select
        ref="select"
        v-model:value="value1"
        style="width: 200px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option value="E+SPACE">门店：E+SPACE</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
      </Select>
    </div>

    <!-- 居中的选项卡 -->
    <div class="flex-grow text-center">
      <Tabs type="card" v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="决策配置" />
        <a-tab-pane key="2" tab="默认字段配置" />
      </Tabs>
    </div>
  </header>

  <div v-if="activeKey === '1'" class="border p-4 rounded-md">
    <div
      v-for="(config, index) in conSucces"
      :key="index"
      class="mb-5 border-b border-gray-300 dashed"
    >
      <h3 class="text-lg font-semibold mb-2 ml-2">{{ config.title }}</h3>
      <div
        v-for="method in config.calculationMethod"
        :key="method.name"
        class="mb-4 bg-gray-200 ml-6"
      >
        <p class="text-sm text-gray-600">{{ method.name }}</p>
        <div v-for="(example, exampleIndex) in method.examples" :key="exampleIndex" class="example">
          {{ example }}
        </div>
      </div>
      <!--      选择框-->
      <div class="flex items-center mb-4 ml-3">
        <label>
          <input
            type="radio"
            :value="config.calculationMethod[0].name"
            v-model="config.selectedMethod"
          />
          {{ config.calculationMethod[0].name }}
        </label>
        <label class="ml-4">
          <input
            type="radio"
            :value="config.calculationMethod[1].name"
            v-model="config.selectedMethod"
          />
          {{ config.calculationMethod[1].name }}
        </label>
      </div>
      <button
        @click="saveConfig(index)"
        class="bg-blue-500 text-white px-4 py-1 rounded-md ml-3 mb-3"
        >保存</button
      >
      <div v-if="config.isSaved" class="mt-2 text-green-600">
        <p>已保存设置: {{ config.selectedMethod }}</p>
      </div>
    </div>
    <div class="border p-4 rounded-md">
      <div class="bg-white p-4 mb-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2">租客合同「即将搬出」提醒设置</h2>
        <p class="text-sm text-gray-600 mb-4"
          >设置提醒时间后，合同还剩*天到期，显示在「即将搬出」提醒里</p
        >
        <div class="flex items-center mb-4">
          <input type="number" v-model="tenantRemindDays" class="border rounded p-2 mr-2" />
          <span class="text-gray-600">天显示在合同「即将搬出」提醒里</span>
        </div>
        <button @click="saveTenantRemind" class="bg-blue-500 text-white px-4 py-2 rounded"
          >保存</button
        >
      </div>

      <div class="bg-red-100 p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-2">业主合同「即将到期」提醒设置</h2>
        <p class="text-sm text-gray-600 mb-4"
          >设置提醒时间后，合同还剩*天到期，显示在「即将到期」提醒里</p
        >
        <div class="flex items-center mb-4">
          <input type="number" v-model="landlordRemindDays" class="border rounded p-2 mr-2" />
          <span class="text-gray-600">天显示在合同「即将到期」提醒里</span>
        </div>
        <button @click="saveLandlordRemind" class="bg-blue-500 text-white px-4 py-2 rounded"
          >保存</button
        >
      </div>
    </div>
    <div class="border p-4 rounded-md">
      <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2"
          >新建租客合同，合同截止日期是否可以超过业主合同截止日期</h2
        >
        <p class="text-sm text-gray-600 mb-4">
          开启后，新建租客合同时，合同截止日期不可选择超过业主合同截止日期的时间
        </p>
        <div class="flex items-center">
          <label class="mr-4">
            <input type="radio" value="allow" v-model="contractOption" />
            允许
          </label>
          <label>
            <input type="radio" value="notAllow" v-model="contractOption" />
            不允许
          </label>
        </div>
      </div>
      <button @click="saveOption" class="bg-blue-500 text-white px-4 py-2 rounded mb-3"
        >保存</button
      >
    </div>
    <div class="border p-4 rounded-md">
      <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">新建租客合同，合同截止日期不可在 ※ 月</h2>
        <p class="text-sm text-gray-600 mb-4">
          设置月份后，新建租客合同截止日期在设置的月份内时，合同周期默认往后延长1个月；关闭则不限制合同截止日期在哪个月份
        </p>
        <div class="flex items-center mb-4">
          <label class="mr-4">
            <input type="radio" value="开启" v-model="contractOptions" />
            开启
          </label>
          <div v-if="contractOptions === '开启'">
            <span>不可在：</span>
            <select v-model="selectedMonth" class="border rounded">
              <option value="" disabled>请选择月份</option>
              <option value="1">1月</option>
              <option value="2">2月</option>
              <option value="3">3月</option>
              <option value="12">12月</option>
            </select>
            <span>月</span>
          </div>
          <label>
            <input type="radio" value="关闭" v-model="contractOptions" class="ml-3" />
            关闭
          </label>
        </div>
      </div>
      <button @click="saveOption" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <div class="mb-4 border p-4 rounded-md">
      <h2 class="text-lg font-semibold mb-2">签订租客合同时，是否允许修改账单</h2>
      <p class="text-sm text-gray-600 mb-4">
        设置为允许后，签订租客合同时，可修改系统自动生成的账单<br />
        设置为不允许后，签订租客合同时，不可修改系统自动生成的账单
      </p>
      <div class="flex items-center mb-4">
        <label class="mr-4">
          <input type="radio" value="allow" v-model="modifyOption" />
          允许
        </label>
        <label>
          <input type="radio" value="notAllow" v-model="modifyOption" />
          不允许
        </label>
        <select
          v-if="modifyOption === 'allow'"
          v-model="selectedOption"
          class="border rounded ml-4"
        >
          <option value="" disabled>请选择</option>
          <option value="option1">可勾选收费费用</option>
          <option value="option2">不可勾选收费费用</option>
        </select>
      </div>
      <button @click="saveSettings" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <div class="mb-4 border p-4 rounded-md">
      <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">退租时，是否允许修改退租费用</h2>
        <p class="text-sm text-gray-600 mb-4">
          设置为允许后，租客合同操作退租时，可修改系统自动生成的退租费用<br />
          设置为不允许后，租客合同操作退租时，不可修改系统自动生成的退租费用
        </p>
        <div class="flex items-center mb-4">
          <label class="mr-4">
            <input type="radio" value="allow" v-model="modifyOptions" />
            允许
          </label>
          <label>
            <input type="radio" value="notAllow" v-model="modifyOptions" />
            不允许
          </label>
        </div>
        <div v-if="modifyOption === 'allow'" class="mb-4">
          <label class="block mb-2">是否可添加费用：</label>
          <select v-model="addFeeOption" class="border rounded p-2">
            <option value="allow">可添加/支费用</option>
            <option value="notAllow">不可添加费用</option>
          </select>
        </div>
        <div v-if="modifyOptions === 'allow'" class="mb-4">
          <div class="mr-4 flex item-center">
            <label class="block mb-2">是否可添加费用：</label>
            <select v-model="deleteFeeOption" class="border rounded">
              <option value="allow">可删除费用</option>
              <option value="onlySystem">只针对系统自动生成的费用，手动添加的费用不受影响</option>
            </select>
          </div>
          <div class="flex item-center">
            <label class="block mb-2">是否可删除费用：</label>
            <select v-model="deleteFeeOptions" class="border rounded">
              <option value="allow">可删除费用</option>
              <option value="onlySystem">只针对系统自动生成的费用，手动添加的费用不受影响</option>
            </select>
          </div>
        </div>
      </div>
      <button @click="saveSettings" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <div>
      <div v-for="(setting, index) in settings" :key="index" class="border p-4 rounded-md">
        <h2 class="text-lg font-semibold mb-2">{{ setting.title }}</h2>
        <p class="text-sm text-gray-600 mb-4">{{ setting.description }}</p>
        <div class="flex items-center mb-4">
          <label class="mr-4">
            <input type="radio" :value="setting.values[0].value" v-model="setting.selected" />
            {{ setting.values[0].label }}
          </label>
          <label>
            <input type="radio" :value="setting.values[1].value" v-model="setting.selected" />
            {{ setting.values[1].label }}
          </label>
        </div>
        <button @click="saveSetting(setting)" class="bg-blue-500 text-white px-4 py-2 rounded mb-3"
          >保存</button
        >
      </div>
    </div>
    <div class="mb-4 border p-4 rounded-md">
      <h2 class="text-lg font-semibold mb-2">租客签订电子合同，是否签字后才进入审批中？</h2>
      <p class="text-sm text-gray-600 mb-4">
        ①
        审批通过后双方签字：合同审批通过后，向租客发送签约短信由租客签字，租客签完字后由企业盖章/签字<br />
        ② 签字后提交审批：双方或租客签完字后再提交审批<br />
        a: 双方签字后提交审批：租客先签字，后由企业签字/盖章，再提交审批<br />
        b:
        租客签字后提交审批（不建议）：租客签字后提交审批，审批通过后由企业手动签字，此时不支持企业自动盖章，仅支持企业手动盖章/签字
      </p>
      <div class="flex items-center mb-4">
        <label class="mr-4">
          <input type="radio" value="审批通过后双方签字" v-model="signatureOption" />
          审批通过后双方签字
        </label>
        <label>
          <input type="radio" value="签字后提交审批" v-model="signatureOption" />
          签字后提交审批
        </label>
        <select
          v-if="signatureOption === '签字后提交审批'"
          v-model="subsequentAction"
          class="border rounded"
        >
          <option value="双方签字后提交审批">双方签字后提交审批</option>
          <option value="租客签字后提交审批（不建议）">租客签字后提交审批（不建议）</option>
        </select>
      </div>
      <button @click="saveSettings" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <div v-for="config in configItems" :key="config.title" class="mb-4 border p-4 rounded-md">
      <h2 class="text-lg font-semibold mb-2">{{ config.title }}</h2>
      <p class="text-sm text-gray-600 mb-4">{{ config.description }}</p>
      <div class="flex items-center mb-4">
        <label v-for="option in config.options" class="mr-4">
          <input type="radio" :value="option.value" v-model="config.selected" />
          {{ option.label }}
        </label>
      </div>
      <button @click="saveConfig(config)" class="bg-blue-500 text-white px-4 py-2 rounded mb-3"
        >保存</button
      >
    </div>
    <div class="mb-4 border p-4 rounded-md">
      <h2 class="text-lg font-semibold mb-2">审批过程中的合同，是否显示其账单？</h2>
      <p class="text-sm text-gray-600 mb-4">
        ①
        设置为显示：处于审批流中（含：审批中、审批驳回、已撤销）的合同账单显示在“账单管理”列表中<br />
        ②
        设置为不显示：处于审批流中（含：审批中、审批驳回、已撤销）的合同账单不显示在“账单管理”列表中
      </p>
      <div class="flex items-center mb-4">
        <label class="mr-4">
          <input type="radio" value="显示" v-model="displayOption" />
          显示
        </label>
        <label>
          <input type="radio" value="不显示" v-model="displayOption" />
          不显示
        </label>
        <select v-if="displayOption === '显示'" v-model="selectedValue" class="border rounded p-2">
          <option value="" disabled>请选择</option>
          <option value="允许收/付款">允许收/付款</option>
          <option value="不允许收/付款">不允许收/付款</option>
        </select>
      </div>

      <button @click="saveSettings" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <div class="mb-4 border p-4 rounded-md">
      <h2 class="text-lg font-semibold mb-2">合同审批被驳回时是否同时将已产生的流水作废？</h2>
      <p class="text-sm text-gray-600 mb-4">
        ①
        设置为是：被驳回的合同账单已产生的流水将默认撤销，并将账单信息还原（已审批通过的流水也将撤销并作废）<br />
        ② 设置为否：审批中的合同被驳回时，该合同内的账单已产生的流水将不做任何处理
      </p>
      <div class="flex items-center mb-4">
        <label class="mr-4">
          <input type="radio" value="是" v-model="revokeOption" />
          是
        </label>
        <label>
          <input type="radio" value="否" v-model="revokeOption" />
          否
        </label>
      </div>
      <button @click="saveSettings" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <div class="mb-4">
      <h2 class="text-lg font-semibold mb-2">租客支付定金前是否需要签署预定协议</h2>
      <p class="text-sm text-gray-600 mb-4">
        ① 默认为不限：租客可先支付定金，后续签署预定协议<br />
        ② 设置为“支付前签署协议”：租客在支付定金前需签署协议<br />
        ③ 设置为“支付后签署协议”：租客在支付定金后，才允许签署预定协议
      </p>
      <div class="flex items-center mb-4">
        <label class="mr-4">
          <input type="radio" value="不限" v-model="agreementOption" />
          不限
        </label>
        <label class="mr-4">
          <input type="radio" value="支付前签署协议" v-model="agreementOption" />
          支付前签署协议
        </label>
        <label>
          <input type="radio" value="支付后签署协议" v-model="agreementOption" />
          支付后签署协议
        </label>
      </div>
      <button @click="saveSettings" class="bg-blue-500 text-white px-4 py-2 rounded">保存</button>
    </div>
    <!--    未完待续-->
  </div>
  <div v-else-if="activeKey === '2'">
    <Tabs type="card" v-model:activeKey="activeKeys">
      <a-tab-pane key="1" tab="租客签约" />
      <a-tab-pane key="2" tab="租客退组" />
      <a-tab-pane key="3" tab="业主签约" />
      <a-tab-pane key="4" tab="预定管理" />
    </Tabs>
    <div v-if="activeKeys === '1'">
      <span class="bg-gray-200 flex items-center h-12 justify-center"
        >管家操作退出默认字段配置</span
      >
      <h1 class="text-lg font-semibold mb-2">退房原则</h1>
      <div class="grid grid-cols-5 gap-4 flex w-full mt-4">
        <div v-for="(field, index) in fields" :key="index" class="border border-gray-300 flex">
          <!-- Change w-1/4 to w-1/5 -->
          <div>
          <label :for="field.name" class="font-bold"
            >{{ field.label }} <span v-if="field.required" class="text-red-500">*</span></label
          >
          <div>
            <input
              v-if="field.type === 'input'"
              :type="field.inputType"
              :placeholder="field.placeholder"
              :disabled="field.disabled"
            />
            <select
              v-else-if="field.type === 'select'"
              :disabled="field.disabled"
              class="space-y-2"
            >
              <option
                v-for="(option, idx) in field.options"
                :key="idx"
                :value="option.value"
                class="space-y-2"
                >{{ option.label }}</option
              >
            </select>
            <!--            <span v-if="field.helperText" class="text-gray-500">{{ field.helperText }}</span>-->
          </div>
          </div>
          <div>
            <label class=" ml-8"><input type="radio" v-model="selectedOption" :value="selectedOption" />必填</label>
          </div>
        </div>
      </div>
      <div class="border border-red-500 p-2 w-80 relative mt-4">
        <label class="text-gray-700 font-medium">不退费用项 <span class="text-orange-500 text-sm">(选择后，退租时以下费用项将不展示)</span></label>
        <div class="flex items-center justify-between border border-gray-300 p-2 cursor-pointer mt-1" @click="toggleDropdown">
          <span>请选择</span>
          <span class="text-gray-500">&#9660;</span>
        </div>
        <div v-if="isDropdownVisible" class="border border-gray-300 bg-white p-4 absolute mt-1 w-72 z-10 shadow-lg">
          <ul class="max-h-40 overflow-y-auto space-y-2">
            <li v-for="(item, index) in feeOptions" :key="index" class="flex items-center">
              <input type="checkbox" v-model="selectedFees" :value="item" class="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label class="text-gray-700">{{ item }}</label>
            </li>
          </ul>
          <div class="flex justify-between mt-4">
            <button @click="clearSelection" class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">清空</button>
            <button @click="confirmSelection" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">确认</button>
          </div>
        </div>
      </div>
      <div class="border p-4 w-80">
        <label class="text-gray-700 font-medium">退租确认 <span class="text-orange-500 text-sm">(勾选后，管家操作退租后给租客发送确认单)</span></label>
        <div class="flex items-center mt-2">
          <input type="checkbox" v-model="sendConfirmation" class="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded" />
          <label class="text-gray-700">发送退租确认单</label>
          <select v-if="sendConfirmation" v-model="selectedTemplate" class="ml-2 border border-gray-300 rounded px-2 py-1 text-gray-700">
            <option value="" disabled>选择电子模版</option>
            <option value="template1">模版一</option>
            <option value="template2">模版二</option>
          </select>
        </div>
      </div>
      <div class="flex items-center">
        <span class="flex items-center">⚠️ 保存成功后，该门店下所有房源在管家操作退租时自动按照配置好的字段展示</span>
        <button class="bg-gray-500 text-white px-4 py-2 rounded mt-4">恢复出厂配置</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4 ml-4">保存</button>
      </div>
    </div>
  </div>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
   import { PageWrapper } from '/@/components/Page';
  import { Select, Tabs } from 'ant-design-vue';
  const select = ref(null);
  const value1 = ref('E+SPACE');
  const activeKey = ref('1');
  const activeKeys = ref('1');
  const tenantRemindDays = ref(30);
  const landlordRemindDays = ref(30);
  const contractOption = ref('allow'); // 默认值为'允许'
  const contractOptions = ref('关闭'); // 默认值为'关闭'
  const selectedMonth = ref(null); // 默认不选择任何月份
  const modifyOption = ref('notAllow'); // 默认值为'不允许'
  const selectedOption = ref(''); // 默认不选择任何选项
  const modifyOptions = ref('notAllow'); // 默认值为'不允许'
  const addFeeOption = ref('notAllow'); // 默认值为'不可添加费用'
  const deleteFeeOption = ref('onlySystem'); // 默认值为'只针对系统自动生成的费用，手动添加的费用不受影响'
  const deleteFeeOptions = ref('onlySystem');
  const signatureOption = ref('审批通过后双方签字');
  const displayOption = ref('显示'); // 默认值为'显示'
  const selectedValue = ref(''); // 默认不选择任何选项
  const subsequentAction = ref('');
  const revokeOption = ref('是');
  const agreementOption = ref('不限');
  const selectedContract = ref('必填');
  const conSucces = ref([
    {
      title: '租客合同零散租金算法',
      calculationMethod: [
        {
          name: '按照自然月计算',
          examples: [
            '1月13号～1月28号，按照1月份实际天数31天计算：（月租金/31）* 零散天数=（1000/31）* 16=516.13',
            '2月10号～2月18号，按照2月份实际天数28天计算：（月租金/28）* 零散天数=（1000/28）* 9=321.43',
          ],
        },
        {
          name: '按照每月固定30日计算',
          examples: [
            '1月13号～1月28号，所有月份都按照30天计算：（月租金/30）* 零散天数=（1000/30）* 16=533.33',
            '2月10号～2月18号，所有月份都按照30天计算：（月租金/30）* 零散天数=（1000/30）* 9=300.00',
          ],
        },
      ],
      selectedMethod: '按照自然月计算',
      isSaved: false,
    },
    {
      title: '业主合同零散租金算法',
      calculationMethod: [
        {
          name: '按照自然月计算',
          examples: [
            '1月13号～1月28号，按照1月份实际天数31天计算：（月租金/31）* 零散天数=（1000/31）* 16=516.13',
            '2月10号～2月18号，按照2月份实际天数28天计算：（月租金/28）* 零散天数=（1000/28）* 9=321.43',
          ],
        },
        {
          name: '按照每月固定30日计算',
          examples: [
            '1月13号～1月28号，所有月份都按照30天计算：（月租金/30）* 零散天数=（1000/30）* 16=533.33',
            '2月10号～2月18号，所有月份都按照30天计算：（月租金/30）* 零散天数=（1000/30）* 9=300.00',
          ],
        },
      ],
      selectedMethod: '按照自然月计算',
      isSaved: false,
    },
  ]);
  const settings = ref([
    {
      title: '签订业主合同时，是否允许确认已付账单',
      description: '设置为允许后，签订业主合同时，可勾选已付账单；系统将自动处理账单生成流水',
      selected: '允许',
      values: [
        { label: '允许', value: '允许' },
        { label: '不允许', value: '不允许' },
      ],
    },
    {
      title: '新建租客合同，是否必须关联系统内的房源',
      description:
        '① 可不关联：录入租客合同时，可先不关联房源，合同录入完成后再关联在房源上\n② 必须关联：录入租客合同时，必须关联已录入系统内的房源',
      selected: '可不关联',
      values: [
        { label: '可不关联', value: '可不关联' },
        { label: '必须关联', value: '必须关联' },
      ],
    },
    {
      title: '新建业主合同，是否必须关联系统内的房源',
      description:
        '① 可不关联：录入业主合同时，可先不关联房源，合同录入完成后再关联在房源上\n② 必须关联：录入业主合同时，必须关联已录入系统内的房源',
      selected: '可不关联',
      values: [
        { label: '可不关联', value: '可不关联' },
        { label: '必须关联', value: '必须关联' },
      ],
    },
    {
      title: '业主合同退租，该房源还存在租客合同时，是否允许退租',
      description: '允许后，业主合同退租时，租客合同将不做任何处理',
      selected: '允许',
      values: [
        { label: '允许', value: '允许' },
        { label: '不允许', value: '不允许' },
      ],
    },
    {
      title: '租客签订电子合同，是否签字后才进入审批中？',
      description:
        '① 审批通过后双方签字：合同审批通过后，向租客发送签约短信由租客签字，租客签完字后由企业盖章/签字\n' +
        '\n' +
        '② 签字后提交审批：双方或租客签完字后再提交审批\n' +
        '\n' +
        'a: 双方签字后提交审批：租客先签字，后由企业签字/盖章，再提交审批\n' +
        '\n' +
        'b: 租客签字后提交审批（不建议）：租客签字后提交审批，审批通过后由企业手动签字，此时不支持企业自动盖章，仅支持企业手动盖章/签字',
      selected: '审批通过后再签字',
      values: [
        { label: '审批通过后再签字', value: '审批通过后再签字' },
        { label: '签字后提交审批', value: '签字后提交审批' },
      ],
    },
  ]);
  const configItems = ref([
    {
      title: '业主签订电子合同，是否双方签完字才进入审批中？',
      description:
        '① 设置为审批通过业主才可签字：未签字前提交审批，审批通过后业主才可签字\n② 设置为业主签字后提交审批：业主签字完成后，才提交审批',
      selected: '审批通过后业主才可签字',
      options: [
        { label: '审批通过后业主才可签字', value: '审批通过后业主才可签字' },
        { label: '业主签字后提交审批', value: '业主签字后提交审批' },
      ],
    },
    {
      title: '审批中的合同是否允许修改个人信息？',
      description: '允许后，提交到审批中心正在审批的合同，可以修改租客/业主个人信息',
      selected: '不允许',
      options: [
        { label: '允许', value: '允许' },
        { label: '不允许', value: '不允许' },
      ],
    },
    {
      title: '审批通过的合同是否允许作废？',
      description: '作废后，审批通过的合同可以作废；不允许则审批通过的合同不可见【作废】按钮',
      selected: '允许',
      options: [
        { label: '允许', value: '允许' },
        { label: '不允许', value: '不允许' },
      ],
    },
  ]);
  function saveConfig(index) {
    conSucces.value[index].isSaved = true;
    // 在这里添加保存逻辑
  }
  const fields = ref([
    {
      label: '解约原因',
      name: 'cancelReason',
      type: 'input',
      inputType: 'text',
      placeholder: '不支持设置默认值',
      required: true,
      helperText: '不支持设置默认值',
    },
    {
      label: '实际清房日期',
      name: 'actualClearDate',
      type: 'input',
      inputType: 'date',
      placeholder: '不支持设置默认值',
      required: true,
      helperText: '不支持设置默认值',
    },
    {
      label: '预计收/付款时间',
      name: 'estimatePayTime',
      type: 'input',
      inputType: 'date',
      placeholder: '不支持设置默认值',
      required: true,
      helperText: '不支持设置默认值',
    },
    {
      label: '退租备注',
      name: 'remark',
      type: 'input',
      inputType: 'text',
      placeholder: '不支持设置默认值',
      required: true,
      helperText: '不支持设置默认值',
    },
    {
      label: '退租凭证',
      name: 'voucher',
      type: 'input',
      inputType: 'text',
      placeholder: '不支持设置默认值',
      required: false,
      helperText: '不支持设置默认值',
    },
    {
      label: '退租客收款人电话',
      name: 'tenantPhone',
      type: 'input',
      inputType: 'text',
      placeholder: '不支持设置默认值',
      required: true,
      helperText: '不支持设置默认值',
    },
    {
      label: '承租人收/付款账号类型',
      name: 'accountType',
      type: 'select',
      options: [{ label: '银联', value: 'unionpay' }],
      required: false,
      helperText: '不可修改',
    },
    {
      label: '退租客收款账号信息',
      name: 'accountInfo',
      type: 'input',
      inputType: 'text',
      placeholder: '不支持设置默认值',
      required: true,
      helperText: '不支持设置默认值',
      disabled: true,
    },
  ]);
  const feeOptions = ref<string[]>([
    '定金', '租金', '押金', '能耗', '服务', '装修/维修',
    '手续', '违约赔偿', '其他费用', '全部', '预定定金', '定金抵扣'
  ]);

  const selectedFees = ref<string[]>([]);
  const isDropdownVisible = ref<boolean>(false);

  function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
  }

  function clearSelection() {
    selectedFees.value = [];
  }
  const sendConfirmation = ref<boolean>(false);
  const selectedTemplate = ref<string | null>(null);
</script>

<style scoped>
  .example {
    margin-bottom: 10px;
  }
</style>

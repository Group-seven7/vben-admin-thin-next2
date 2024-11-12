<!--资产管理-->
<template>
  <PageWrapper>
    <header class="flex items-center px-4 py-2 border-b">
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

      <div class="flex-grow text-center">
        <Tabs type="card" v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="决策配置" />
          <a-tab-pane key="2" tab="默认字段配置" />
        </Tabs>
      </div>
    </header>

    <div class="p-4">
      <div v-if="activeKey === '1'" class="border p-4 rounded-md">
        <div>
          <!--  常规可渲染的数据        -->
          <div
            v-for="(config, index) in configs"
            :key="index"
            class="mb-5 border-b-2 border-gray-300"
          >
            <h3 class="text-lg font-semibold mb-2">{{ config.title }}</h3>
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">{{ config.description }}</p>
            <div class="flex items-center mb-4">
              <label>
                <input
                  type="radio"
                  :name="'message' + index"
                  value="允许"
                  v-model="config.message"
                />
                允许
              </label>
              <label class="ml-4">
                <input
                  type="radio"
                  :name="'message' + index"
                  value="不允许"
                  v-model="config.message"
                />
                不允许
              </label>
            </div>
            <button
              @click="saveConfig(index)"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
            <div v-if="config.isSaved" class="mt-2 text-green-600">
              <p>已保存设置: {{ config.message }}</p>
            </div>
          </div>
          <div class="mb-5 border-b-2 border-gray-300">
            <h3 class="text-lg font-semibold mb-2">进入空房快查的房源</h3>
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">
              业主合同退租后，房源自动置为关闭状态
            </p>
            <div class="flex items-center mb-4">
              <Checkbox v-model:checked="checked">即将到期</Checkbox>
              <span class="flex item-center mr-3">
                <Span>(租约</Span>
                <input type="text" placeholder="30" class="w-10" />
                <span>天内到期)</span>
              </span>
              <Checkbox v-model:checked="checked">已到期</Checkbox>
              <Checkbox v-model:checked="checked">申退</Checkbox>
              <Checkbox v-model:checked="checked">转租</Checkbox>
            </div>
            <button
              @click="isVisible = true"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
          </div>
          <div class="mb-5 border-b-2 border-gray-300">
            <h3 class="text-lg font-semibold mb-2">合租房源：同套房内,是否限制室友只能是同性别?</h3>
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">
              ①
              设置为限制后，合租房源内当其中某一间房有人入住后，其他房间也只能入住相同性别的住户（即：一套房内，只能住同性别的）
              ② 设置为不限制后，合租房源内不限制室友的性别（即：一套房内，住户性别不限）
            </p>
            <div class="flex items-center mb-4">
              <label><input type="radio" name="limit" value="限制" v-model="limit" />限制</label>
              <div v-show="limit === '限制'" class="flex items-center ml-4">
                <span>整套房内住客都退房后</span>
                <a-select v-model:value="reminder" placeholder="请选择分钟数" class="w-20">
                  <a-select-option value="1">重置</a-select-option>
                  <a-select-option value="2">不重置</a-select-option>
                </a-select>
                <span class="ml-2">为‘不限男女’</span>
              </div>
              <label class="ml-4"
                ><input type="radio" name="limit" value="不限制" v-model="limit" />不限制</label
              >
            </div>
            <button
              @click="isVisible = true"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
          </div>
          <div class="mb-5 border-b-2 border-gray-300">
            <h3 class="text-lg font-semibold mb-2">房源配置是否与物资管理强关联</h3>
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">
              开启强关联后,房源物品只能从仓库调取
            </p>
            <div class="flex items-center mb-4">
              <label
                ><input type="radio" name="relevancy" value="关联" v-model="relevancy" />关联</label
              >
              <label class="ml-4"
                ><input
                  type="radio"
                  name="relevancy"
                  value="不关联"
                  v-model="relevancy"
                />不关联</label
              >
            </div>
            <button
              @click="isVisible = true"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
          </div>
          <div class="mb-5 border-b-2 border-gray-300">
            <h3 class="text-lg font-semibold mb-2">调整房间出租价，是否通知当前入住人</h3>
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">
              ①
              设置通知后，申请批量调价后，即时给当前入住人发送短信通知。（有审批流程：在审批通过后，即时通知）
              ② 设置不通知后，申请批量调价后，系统不会发送短信通知给当前入住人
            </p>
            <div class="flex items-center mb-4">
              <label><input type="radio" name="notice" value="通知" v-model="notice" />通知</label>
              <label class="ml-4"
                ><input type="radio" name="notice" value="不通知" v-model="notice" />不通知</label
              >
            </div>
            <button
              @click="isVisible = true"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
          </div>
          <div class="mb-5 border-b-2 border-gray-300">
            <h3 class="text-lg font-semibold mb-2"
              >合租房源：房间被预定成功或入住成功后，是否给其他房间的室友发送短信通知</h3
            >
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">
              ①
              设置为发送通知，并选择为预定成功后发送通知，则在房源被预定成功后，系统将自动给其他房间的室友发送短信通知；取消预定后每次给其他房间的室友发送短信通知
              ②
              设置为发送通知，并选择为入住成功后发送通知，则在入住成功后，系统将自动给其他房间的室友发送短信通知
              ③ 设置不通知后，在房间有租客入住后，系统不会发送短信通知给其他房间室友
            </p>
            <div class="flex items-center mb-4">
              <label
                ><input
                  type="radio"
                  name="messagevalue"
                  value="限制"
                  v-model="messagevalue"
                />通知</label
              >
              <div v-show="messagevalue === '限制'" class="flex items-center ml-4">
                <a-select v-model:value="reminder" placeholder="" class="w-20">
                  <a-select-option value="1">入住成功后发送</a-select-option>
                  <a-select-option value="2">预定成后发送</a-select-option>
                </a-select>
              </div>
              <label class="ml-4"
                ><input
                  type="radio"
                  name="messagevalue"
                  value="不限制"
                  v-model="messagevalue"
                />不通知</label
              >
            </div>
            <button
              @click="isVisible = true"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
          </div>
          <div class="mb-5 border-b-2 border-gray-300">
            <h3 class="text-lg font-semibold mb-2"
              >巡房完成后，是否自动给此房间在住住户发送巡检结果</h3
            >
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">
              ① 设置自动发送后，房间巡检完成后，系统将自动把巡检结果通知到用户 ②
              设置不发送后，房间巡检完成后，将不会自动通知在住住户
            </p>
            <div class="flex items-center mb-4">
              <label><input type="radio" name="sent" value="发送" v-model="sent" />发送</label>
              <label class="ml-4"
                ><input type="radio" name="sent" value="不发送" v-model="sent" />不发送</label
              >
            </div>
            <button
              @click="isVisible = true"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
          </div>
          <!--  常规可渲染的数据        -->
          <div
            v-for="(config, index) in conSucces"
            :key="index"
            class="mb-5 border-b-2 border-gray-300"
          >
            <h3 class="text-lg font-semibold mb-2">{{ config.title }}</h3>
            <p class="text-sm text-gray-600 mb-4 bg-gray-300">{{ config.description }}</p>
            <div class="flex items-center mb-4">
              <label>
                <input
                  type="radio"
                  :name="'messages' + index"
                  value="自动生成"
                  v-model="config.messages"
                />
                自动生成
              </label>
              <label class="ml-4">
                <input
                  type="radio"
                  :name="'messages' + index"
                  value="不生成"
                  v-model="config.messages"
                />
                不允许
              </label>
            </div>
            <button
              @click="saveConfig(index)"
              class="bg-blue-500 text-white px-4 py-1 rounded-md mb-5"
              >保存</button
            >
            <div v-if="config.isSaved" class="mt-2 text-green-600">
              <p>已保存设置: {{ config.messages }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="activeKey === '2'" class="border p-4 rounded-md">
        <!-- 默认字段配置的内容（暂时留空） -->
        <header class="bg-gray-300 h-13 w-full flex items-center justify-center">
          <h1>录入项目默认字段配置</h1>
        </header>
        <!--        项目信息-->
        <div>
          <h1 class="text-lg font-semibold mt-4">项目信息</h1>
          <main class="grid grid-cols-5 gap-4 flex w-full">
            <div
              v-for="(item, index) in projectData"
              :key="index"
              class="flex rounded-lg overflow-hidden bg-white"
            >
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">{{ item.label }}</span>
                <hr class="mt-1 mb-2" />
                <!-- 判断是否是第七个数据，如果是则渲染为下拉框，否则显示文本 -->
                <div v-if="index === 7">
                  <select
                    class="text-sm text-gray-400"
                    v-for="(item, index) in projectData"
                    :key="index"
                  >
                    <option value="选项1">{{ item.defaultValue }}</option>
                    <option value="选项2">法人</option>
                    <option value="选项3">主要决策人</option>
                  </select>
                </div>
                <span class="text-sm text-gray-400">{{ item.defaultValue }}</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div>
          </main>
          <div class="grid grid-cols-5 gap-4 flex w-full">
            <div
              class="flex rounded-lg overflow-hidden bg-white mt-4"
              v-for="(item, index) in items"
              :key="index"
            >
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">{{ item.label }}</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-5 gap-4 flex w-full">
            <div
              class="flex rounded-lg overflow-hidden bg-white mt-4"
              v-for="(item, index) in dataitems"
              :key="index"
            >
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">{{ item.label }}</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div>
          </div>
        </div>
        <!--        配置楼栋-->
        <div>
          <h1 class="text-lg font-semibold mt-4">配置楼栋</h1>
          <div class="flex rounded-lg overflow-hidden bg-white mt-4">
            <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
              <span class="text-sm font-semibold">项目分期</span>
              <hr class="mt-1 mb-2" />
              <span class="text-sm text-gray-400">不支持默认设置</span>
            </div>
            <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
              <input type="radio" />
              <label class="text-white peer-hover:opacity-100">必填</label>
            </div>
          </div>
          <main class="grid grid-cols-5 gap-4 flex w-full mt-4">
            <div
              class="flex rounded-lg overflow-hidden bg-white"
              v-for="(item, index) in handate"
              :key="index"
            >
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">{{ item.label }}</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div></main
          >
        </div>
        <!--  配置房间      -->
        <div>
          <h1 class="text-lg font-semibold mt-4">配置房间</h1>
          <main class="grid grid-cols-5 gap-4 flex w-full mt-4">
            <div
              class="flex rounded-lg overflow-hidden bg-white"
              v-for="(item, index) in projectDate2"
              :key="index"
            >
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">{{ item.label }}</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div></main
          >
        </div>
        <!--  推广描述      -->
        <div>
          <h1 class="text-lg font-semibold mt-4">推广描述</h1>
          <main class="grid grid-cols-5 gap-4 flex w-full mt-4">
            <div
              class="flex rounded-lg overflow-hidden bg-white"
              v-for="(item, index) in projectDate3"
              :key="index"
            >
              <div class="bg-gray-200 w-40 h-15 rounded-l-lg px-2 py-1">
                <span class="text-sm font-semibold">{{ item.label }}</span>
                <hr class="mt-1 mb-2" />
                <span class="text-sm text-gray-400">不支持默认设置</span>
              </div>
              <div class="bg-gray-500 flex justify-around items-center w-15 rounded-r-lg">
                <input type="radio" />
                <label class="text-white peer-hover:opacity-100">必填</label>
              </div>
            </div></main
          >
        </div>
        <div class="flex items-center bg-white p-6 rounded-lg shadow-lg justify-between">
            <span class="text-sm text-orange-600 mr-4"
            >⚠️ 请注意，您在此之前未进行任何设置，系统将使用默认参数。</span
            >
          <div class="flex gap-4">
            <button
              class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              @click="showModalDing"
            >修改设置</button
            >
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >确定</button
            >
          </div>
        </div>
      </div>
      <Modal
        v-model:visible="isModalVisible"
        title="确定要恢复默认配置吗？"
        @ok="handleOks"
        @cancel="handleCancels"
      >
        <p>恢复默认配置后，此模块的默认字段配置信息将恢复成系统原有的配置</p>
      </Modal>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/src/components/Page';
  import { ref } from 'vue';
  import {Select, Tabs, Checkbox, Modal} from 'ant-design-vue';

  interface Config {
    title: string;
    description: string;
    message: string;
    isSaved: boolean;
  }

  const activeKey = ref('1');
  const value1 = ref('E+SPACE'); // 用于 Select 组件的值
  const checked = ref(false);
  const limit = ref('不限制');
  const relevancy = ref('关联');
  const notice = ref('通知');
  const reminder = ref('1');
  const messagevalue = ref('限制');
  const sent = ref('发送');
  const configs = ref<Config[]>([
    {
      title: '相同地址的房源是否允许重复录入',
      description:
        '① 设置为允许后，相同的房源地址可重复录入\n② 设置为不允许后，小区名、楼栋号、单元、门牌号一致的房源不可重复录入',
      message: '允许', // 默认设置为 '通知'
      isSaved: false,
    },
    {
      title: '房源自动关闭',
      description: '业主合同退租后，房源自动置为关闭状态',
      message: '不允许', // 默认设置为 '不通知'
      isSaved: false,
    },
  ]);
  const conSucces = ref([
    {
      title: '合租房源：租客入住后，是否对房屋公区自动生成保洁工单',
      description:
        '选择自动生成后，当房源有住户入住后，系统将自动根据设置的间隔时长生成相应的保洁工单。住户全部退租后，自动取消相应的保洁工单',
      messages: '自动生成',
      isSaved: false,
    },
    {
      title: '退租后，是否自动生成保洁工单',
      description: '选择自动生成后，当有租客退租后，自动生成相应的退租保洁工单',
      messages: '不生成',
      isSaved: false,
    },
  ]);
  const projectData = [
    {
      label: '项目名称',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目编号',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目推广名称',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '权益比例',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目地址',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目所属城市公司',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目所属法人公司',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目状态',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目描述',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '项目总图',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '用地面积',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '总建筑面积',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '计容建筑面积',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '容积率',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '建筑密度',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '绿化率',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '可售面积',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '可租面积',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '车位配比',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '车位数量',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '地上车位数量',
      required: true,
      defaultValue: '不支持设置默认值',
    },
    {
      label: '地下车位数量',
      required: true,
      defaultValue: '不支持设置默认值',
    },
  ];

  const items = [
    {
      label: '项目分期',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '项目开工时间',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '项目竣工时间',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '项目交付时间',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
  ];
  const dataitems = [
    {
      label: '所属门店（部门）',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '负责人',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
  ];
  const handate = [
    {
      label: '归属区域',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '楼栋信息',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '楼层',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
    {
      label: '产品类型',
      isRequired: true,
      isEditable: false,
      isDefaultValueSettable: false,
    },
  ];
  const projectDate2 = [
    {
      label: '房型',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '出租价',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '产品类型',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '用途',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '朝向',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '最多入住',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '首次可租时间',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '规划建筑面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '规划套内面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '预测建筑面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '预测套内面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '实测建筑面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '实测套内面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '可租建筑面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '可租套内面积',
      isRequired: true,
      isDefaultValueSettable: false,
    },
  ];
  const projectDate3 = [
    {
      label: '门店电话',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '用水',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '用电',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '供暖信息',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '燃气',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: 'VR看房地址',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '项目介绍',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '周边介绍',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '项目标签',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '备注',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '入住须知',
      isRequired: true,
      isDefaultValueSettable: false,
    },
    {
      label: '项目图片',
      isRequired: true,
      isDefaultValueSettable: false,
    },
  ];
  const saveConfig = (index: number) => {
    configs.value[index].isSaved = true; // 设置为已保存
  };
  const showModalDing = () => {
    isModalVisible.value = true;
  };

  const handleOks = () => {
    isModalVisible.value = false;
    isAlertVisible.value = true;
    setTimeout(() => {
      isAlertVisible.value = false; // 几秒后自动隐藏提示
    }, 3000); // 3000毫秒后隐藏提示
  };

  const handleCancels = () => {
    isModalVisible.value = false;
  };
</script>

<style scoped lang="less"></style>

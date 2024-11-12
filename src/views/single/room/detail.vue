<template>
  <PageWrapper>
    <div>
      <div class="flex m-5">
        <div class="flex items-center border-r border-dashed border-gray-300 pr-3">
          <div
            class="flex text-red-500 justify-center items-center w-8 h-8 bg-red-200 rounded-full"
          >
            <Icon icon="material-symbols-light:box-outline-rounded" />
          </div>
          <div class="ml-2">
            <!-- 添加 margin-left 以间隔图标和文本 -->
            <div class="flex items-center">
              <div class="text-gray-500 text-xs">当前状态</div>
              <!-- 使用 gray 和小字体 -->
              <div class="text-blue-500 ml-1">
                <!-- 添加 margin-left 使得两个元素之间有间距 -->
                <Icon icon="simple-line-icons:refresh" />
                <span>同步</span>
              </div>
            </div>
            <div class="text-blue-500">
              <span class="text-black">空置</span>
              <Icon icon="solar:pen-2-outline" />
            </div>
          </div>
        </div>
        <div class="flex items-center ml-3">
          <div
            class="flex text-green-500 justify-center items-center w-8 h-8 bg-green-200 rounded-full"
          >
            <Icon icon="ph:squares-four-fill" />
          </div>
          <div class="ml-2">
            <!-- 添加 margin-left 以间隔图标和文本 -->
            <div class="flex items-center">
              <div class="text-gray-500 text-xs">所属房型</div>
            </div>
            <div class="text-blue-500">
              <span class="text-black">房型ML</span>
            </div>
          </div>
        </div>
        <div class="flex items-center ml-10">
          <div
            class="flex text-orange-500 justify-center items-center w-8 h-8 bg-orange-200 rounded-full"
          >
            <Icon icon="mdi:house-flash-outline" />
          </div>
          <div class="ml-2">
            <!-- 添加 margin-left 以间隔图标和文本 -->
            <div class="flex items-center">
              <div class="text-gray-500 text-xs">标准价格</div>
            </div>
            <div class="text-blue-500">
              <span class="text-black">1000元/月</span>
              <Icon icon="solar:pen-2-outline" />
            </div>
          </div>
        </div>
        <div class="flex items-center ml-10">
          <div
            class="flex text-red-500 justify-center items-center w-8 h-8 bg-red-200 rounded-full"
          >
            <Icon icon="mage:alarm-clock" />
          </div>
          <div class="ml-2">
            <!-- 添加 margin-left 以间隔图标和文本 -->
            <div class="flex items-center">
              <div class="text-gray-500 text-xs">看房时间</div>
            </div>
            <div class="text-blue-500">
              <span class="text-black">随时看房</span>
            </div>
          </div>
        </div>
        <div class="flex items-center ml-10">
          <div
            class="flex text-blue-500 justify-center items-center w-8 h-8 bg-blue-200 rounded-full"
          >
            <Icon icon="mdi:account" />
          </div>
          <div class="ml-2">
            <!-- 添加 margin-left 以间隔图标和文本 -->
            <div class="flex items-center">
              <div class="text-gray-500 text-xs">负责人</div>
            </div>
            <div class="text-blue-500">
              <span class="text-black">刘清晨-123456789</span>
              <Icon icon="solar:pen-2-outline" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-5 bg-gray-200">
        <div class="m-2 flex">
          <div class="flex bg-gray-300 p-2 rounded-full mr-8">
            <input type="checkbox" />
            <div> 申退 </div>
          </div>
          <div class="flex bg-gray-300 p-2 rounded-full mr-8">
            <input type="checkbox" />
            <div> 转租 </div>
          </div>
          <div class="flex bg-gray-300 p-2 rounded-full">
            <input type="checkbox" />
            <div> 换房 </div>
          </div>
        </div>
      </div>
      <div class="m-5">
        <div class="tabs-container">
          <a-tabs class="tabs" v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="基本信息"><BasicInformation></BasicInformation></a-tab-pane>
            <a-tab-pane key="2" tab="房源记录">
              <Listinghistory></Listinghistory>
            </a-tab-pane>
            <a-tab-pane key="3" tab="合约管理">
              <Contractmanagement></Contractmanagement>
            </a-tab-pane>
            <a-tab-pane key="4" tab="财务账单"><Financialbills></Financialbills></a-tab-pane>
            <a-tab-pane key="5" tab="租后服务"><Postrentalservice></Postrentalservice></a-tab-pane>
          </a-tabs>
          <div v-if="activeKey !== '4' && activeKey !== '5'" class="flex">
            <div class="text-blue-500 ml-3">
              <Icon icon="map:travel-agency" />
              <span>签约</span>
            </div>
            <div class="text-blue-500 ml-3">
              <Icon icon="mdi:invoice-text-scheduled-outline" />
              <span>预定</span>
            </div>
            <div class="text-blue-500 ml-3">
              <Icon icon="fluent-mdl2:add-to-shopping-list" />
              <span>添加账单</span>
            </div>
            <div class="text-blue-500 ml-3">
              <Icon icon="ph:squares-four-fill" />
              <span>更多</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import Icon from '/@/components/Icon/src/Icon.vue';
  import { ref } from 'vue';
  import BasicInformation from './BasicInformation.vue'; //基本信息组件
  import Listinghistory from './Listinghistory.vue'; //房源记录组件
  import Contractmanagement from './Contractmanagement.vue'; //合约管理组件
  import Financialbills from './Financialbills.vue'; //财务账单组件
  import Postrentalservice from './Postrentalservice.vue'; //租后服务组件
  const activeKey = ref('1');
</script>
<style scoped>
  .tabs-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .tabs {
    flex: 1;
  }
</style>

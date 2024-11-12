<template>
  <PageWrapper>
    <Row :gutter="[10, 10]" align="top">
      <!-- 添加间距 -->
      <!-- 左边 -->
      <Col :lg="{ span: 18 }" :xl="{ span: 18 }" :xxl="{ span: 18 }">
        <Row :gutter="[10, 10]" class="flex">
          <Col :lg="{ span: 12 }" :md="{ span: 12 }" class="flex-item">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="常用功能">
              <div class="flex">
                <div class="flex flex-wrap">
                  <div v-for="(value, key) in data.commonFunctions" :key="key" class="mb-5 ml-3">
                    <Icon icon="proicons:person-multiple" />
                    <div class="text-center">{{ key }}</div>
                  </div>
                </div>
                <div>
                  <Icon icon="hugeicons:setup-01" class="ml-20" />
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }" class="flex-item">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="审批管理">
              <div class="flex flex-wrap">
                <div v-for="(value, key) in data.auditManagement" :key="key" class="w-[8vw] h-15">
                  <div class="text-center">{{ value }}</div>
                  <div class="text-center">{{ key }}</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }" class="flex-item">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="合约管理">
              <div class="flex mt-12">
                <div class="ml-8 mr-5 justify-center items-center text-center flex">租客合同</div>
                <div>
                  <span class="mr-2 text-2xl text-blue-500">459</span>
                  <span>(份)</span>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div v-for="(value, key) in data.contract" :key="key" class="ml-8 mt-10 mb-5 flex">
                  <div class="text-center">{{ key }}</div>
                  <span class="text-center ml-1">({{ value }})</span>
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 12 }" :md="{ span: 12 }" class="flex-item">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="租前">
              <div class="flex flex-wrap">
                <div v-for="(value, key) in data.preRenta" :key="key" class="ml-20 mr-15 mt-10">
                  <div class="text-center">{{ value }}</div>
                  <div class="text-center">{{ key }}</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col :lg="{ span: 24 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small" title="房源管理">
              <footrest></footrest>
            </Card>
          </Col>
        </Row>
      </Col>
      <!-- 右边 -->
      <Col
        class="text-center"
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :lg="{ span: 6 }"
        :xl="{ span: 6 }"
        :xxl="{ span: 6 }"
      >
        <Row :gutter="[10, 10]">
          <Col :md="{ span: 8 }" :lg="{ span: 24 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small">
              <div class="w-full h-1/2 bg-white mb-2 rounded-lg">
                <div class="flex justify-between w-full p-4">
                  <span>最新公告</span>
                  <span class="text-blue-500 cursor-pointer">更多> | +</span>
                </div>
                <div>
                  <Empty></Empty>
                </div>
              </div>
            </Card>
          </Col>
          <Col :md="{ span: 8 }" :lg="{ span: 24 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small">
              <div class="w-full h-1/2 bg-white mb-2 rounded-lg">
                <div class="flex justify-between w-full p-4">
                  <span>最新公告</span>
                  <span class="text-blue-500 cursor-pointer">更多> | +</span>
                </div>
                <div>
                  <Empty></Empty>
                </div>
              </div>
            </Card>
          </Col>
          <Col :md="{ span: 8 }" :lg="{ span: 24 }">
            <Card :headStyle="{ borderBottom: 'unset' }" size="small">
              <div class="bg-white rounded-lg">
                <div class="flex justify-between w-full p-4">
                  <span>资产出租率</span>
                </div>
                <PieChart></PieChart>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { Row, Col, Card } from 'ant-design-vue';
  import { ref } from 'vue';
  import { getWorkbenchData } from '/@/api/workbenck';
  import Icon from '/@/components/Icon/src/Icon.vue';
  import footrest from './footrest.vue';
  import { Empty } from 'ant-design-vue';
  import PieChart from './PieChart.vue';

  // 定义响应式数据
  const data = ref({});
  console.log(data);

  // 调用 API 并更新数据
  getWorkbenchData()
    .then((res) => {
      data.value = res;
    })
    .catch((err) => {
      console.error(err);
      if (err.code === 'ECONNABORTED') {
        alert('请求超时，请稍后再试');
      } else {
        alert('发生错误：' + err.message);
      }
    });
</script>

<style>
  .flex {
    display: flex; /* 使用 Flexbox 布局 */
  }
</style>

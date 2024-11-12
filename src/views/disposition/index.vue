<template>
  <PageWrapper>
    <div class="bg-white rounded-lg">
      <Row :gutter="10">
        <Col :span="5">
          <Icon
            icon="fluent:phone-page-header-24-filled"
            width="1.2em"
            height="1.2em"
            style="color: blue"
          />
          <span class="ml-2">配置中心</span>
        </Col>
        <Col :span="19">
          <!--        字典配置 - DictionaryConfig-->
          <!--        运营配置 - OperationConfig-->
          <!--        产品配置 - ProductConfig-->
          <!--        收款账号设置 - PaymentAccountSettings-->
          <!--        审批设置 - ApprovalSettings-->
          <!--        个性化设置 - PersonalizationSettings-->
          <Tabs v-model:activeKey="activeKey" class="w-full" @change="onTabChange">
            <a-tab-pane key="1" tab="字典配置" />
            <!--            force-render 属性可以确保该标签页的内容在切换标签时始终被渲染-->
            <a-tab-pane key="2" tab="运营配置" force-render />
            <a-tab-pane key="3" tab="产品配置" />
            <a-tab-pane key="4" tab="收款账号设置" />
            <a-tab-pane key="5" tab="审批设置" />
            <a-tab-pane key="6" tab="个性化设置" />
          </Tabs>
        </Col>
      </Row>
      <component :is="currentComponent" :selected-keys="state.selectedKeys" />
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import {
    DictionaryConfig,
    OperationConfig,
    ProductConfig,
    PaymentAccountSettings,
    ApprovalSettings,
    PersonalizationSettings,
  } from './tab';
  import { ref, reactive } from 'vue';
  import { Icon } from '/src/components/Icon';
  import { Tabs, Row, Col } from 'ant-design-vue';
  const activeKey = ref('1');
  const currentComponent = ref(DictionaryConfig);
  // 新增状态对象用于 Menu
  const state = reactive({
    selectedKeys: ['1'],
  });
  // 标签切换
  const onTabChange = (key: string) => {
    activeKey.value = key;
    console.log(`Tab changed to: ${key}`); // 输出当前 key

    switch (key) {
      case '1':
        currentComponent.value = DictionaryConfig;
        break;
      case '2':
        currentComponent.value = OperationConfig;
        break;
      case '3':
        currentComponent.value = ProductConfig;
        break;
      case '4':
        currentComponent.value = PaymentAccountSettings;
        break;
      case '5':
        currentComponent.value = ApprovalSettings;
        break;
      case '6':
        currentComponent.value = PersonalizationSettings;
        break;
      default:
        currentComponent.value = DictionaryConfig;
    }

    console.log(`Current component:`, currentComponent.value); // 输出当前组件
  };
</script>
<style scoped>
  /* 如果需要，可以在样式中添加更多自定义样式 */
</style>

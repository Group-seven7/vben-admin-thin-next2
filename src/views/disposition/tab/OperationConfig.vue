<!--        运营配置 - OperationConfig-->
<template>
  <PageWrapper>
    <div class="bg-white rounded-lg">
      <Row>
        <Col span="3">
          <div class="h-800px">
            <Menu
              :selected-keys="state.selectedKeys"
              :inline-collapsed="state.collapsed"
              @select="onSelect"
            >
              <Menu.Item key="1">招商管理</Menu.Item>
              <Menu.Item key="2">资产管理</Menu.Item>
              <Menu.Item key="3">合约管理</Menu.Item>
              <Menu.Item key="4">财务管理</Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col span="21">
          <component :is="currentComponent" />
        </Col>
      </Row>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/src/components/Page';
  import { Row, Col, Menu } from 'ant-design-vue';
  import { reactive, computed } from 'vue';

  // 导入你的内容组件
  import InvestmentManagementComponent from '/@/views/disposition/OperationConfig/InvestmentManagementComponent.vue';
  import AssetManagementComponent from '/@/views/disposition/OperationConfig/AssetManagementComponent.vue';
  import ContractManagementComponent from '/@/views/disposition/OperationConfig/ContractManagementComponent.vue';
  import FinancialManagementComponent from '/@/views/disposition/OperationConfig/FinancialManagementComponent.vue';

  const state = reactive({
    collapsed: false,
    selectedKeys: ['1'], // 初始选中第一个菜单项
  });

  // 根据选中的菜单项动态计算当前组件
  const currentComponent = computed(() => {
    const key = state.selectedKeys[0]; // 获取当前选中的菜单项的键
    switch (key) {
      case '1':
        return InvestmentManagementComponent; // 招商管理
      case '2':
        return AssetManagementComponent; // 资产管理
      case '3':
        return ContractManagementComponent; // 合约管理
      case '4':
        return FinancialManagementComponent; // 财务管理
      default:
        return InvestmentManagementComponent; // 默认显示招商管理组件
    }
  });

  // 更新选中的菜单项
  const onSelect = (info) => {
    state.selectedKeys = [info.key]; // 更新选中的菜单项
  };
</script>

<style scoped>
  /* 添加自定义样式（如果有的话） */
</style>

<!--        字典配置 - DictionaryConfig-->
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
              <Menu.Item key="1">资产</Menu.Item>
              <Menu.Item key="2">物品配置</Menu.Item>
              <Menu.Item key="3">合约</Menu.Item>
              <Menu.Item key="4">费用科目</Menu.Item>
              <Menu.Item key="5">收付款途径</Menu.Item>
              <Menu.Item key="6">招商客户</Menu.Item>
              <Menu.Item key="7">租后</Menu.Item>
              <Menu.Item key="8">其他</Menu.Item>
              <Menu.Item key="9">招商-客户来源</Menu.Item>
              <Menu.Item key="10">招商-认知渠道</Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col span="21">
          <!--                    <div v-if="state.selectedKeys[0] === '1'">-->
          <!--                      <div>这是资产的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '2'">-->
          <!--                      <div>这是物品配置的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '3'">-->
          <!--                      <div>这是合约的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '4'">-->
          <!--                      <div>这是费用科目的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '5'">-->
          <!--                      <div>这是收付款途径的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '6'">-->
          <!--                      <div>这是招商客户的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '7'">-->
          <!--                      <div>这是租后的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '8'">-->
          <!--                      <div>这是其他的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '9'">-->
          <!--                      <div>这是招商-客户来源的内容</div>-->
          <!--                    </div>-->
          <!--                    <div v-if="state.selectedKeys[0] === '10'">-->
          <!--                      <div>这是招商-认知渠道的内容</div>-->
          <!--                    </div>-->
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
  import AssetComponent from '../ApprovalSettings/AssetComponent.vue';
  import ItemConfigComponent from '../ApprovalSettings/ItemConfigComponent.vue';
  import ContractComponent from '../ApprovalSettings/ContractComponent.vue';
  import ExpenseComponent from '../ApprovalSettings/ExpenseComponent.vue';
  import PaymentMethodComponent from '../ApprovalSettings/PaymentMethodComponent.vue';
  import ClientComponent from '../ApprovalSettings/ClientComponent.vue';
  import OthersComponent from '../ApprovalSettings/OthersComponent.vue';
  import CustomerSourceComponent from '../ApprovalSettings/CustomerSourceComponent.vue';
  import CognitiveChannelComponent from '../ApprovalSettings/CognitiveChannelComponent.vue';
  import Otherother from '../ApprovalSettings/Otherother.vue';
  const state = reactive({
    collapsed: false,
    selectedKeys: [''], // 初始选中第一个菜单项
  });

  // 根据选中的菜单项动态计算当前组件
  // 根据选中的菜单项的键值返回相应的组件
  const currentComponent = computed(() => {
    const key = state.selectedKeys[0]; // 获取当前选中的菜单项的键
    switch (key) {
      case '1':
        // 选中“资产”菜单项，返回 AssetComponent
        return AssetComponent;

      case '2':
        // 选中“物品配置”菜单项，返回 ItemConfigComponent
        return ItemConfigComponent;

      case '3':
        // 选中“合约”菜单项，返回 ContractComponent
        return ContractComponent;

      case '4':
        // 选中“费用科目”菜单项，返回 ExpenseComponent
        return ExpenseComponent;

      case '5':
        // 选中“收付款途径”菜单项，返回 PaymentMethodComponent
        return PaymentMethodComponent;

      case '6':
        // 选中“招商客户”菜单项，返回 ClientComponent
        return ClientComponent;
      case '7':
        // 选中“业绩管理 or 租金”菜单项，返回 OthersComponent
        return OthersComponent;
      case '8':
        // 选中“其他”菜单项，返回 Othersother
        return Otherother;
      case '9':
        // 选中“招商-客户来源”菜单项，返回 CustomerSourceComponent
        return CustomerSourceComponent;

      case '10':
        // 选中“招商-认知渠道”菜单项，返回 CognitiveChannelComponent
        return CognitiveChannelComponent;

      default:
        // 如果没有匹配的键，默认返回 AssetComponent
        return AssetComponent; // 默认显示第一个组件
    }
  });
  const onSelect = (info) => {
    state.selectedKeys = [info.key]; // 更新选中的菜单项
  };
</script>

<style scoped>
  /* 添加自定义样式（如果有的话） */
</style>

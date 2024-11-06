<template>
  <PageWrapper>
    <div class="bg-white rounded-lg">
      <div class="flex">
        <div class="m-3">
          <a-cascader :options="options" placeholder="全部" />
        </div>
        <div class="ml-auto m-3">
          <div class="flex">
            <enter></enter>
            <div class="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
              <Icon icon="lineicons:menu-cheesburger" class="w-5 h-5" style="color: #3b82f6" />
            </div>
          </div>
          <div class="flex mt-3">
            <div>
              <a-space direction="vertical">
                <a-input placeholder="项目名称/房间号/租客..." />
              </a-space>
            </div>
            <div>
              <Icon icon="charm:menu-kebab" style="color: #3b82f6" />
            </div>
          </div>
        </div>
      </div>
      <div class="m-2">
        <div class="flex items-center">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="全部(1200套，1350间)"><card /></a-tab-pane>
            <a-tab-pane key="2" tab="空置(0)">Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="已租(0)">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="4" tab="配置(0)">Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="5" tab="关闭(0)" force-render>Content of Tab Pane 3</a-tab-pane>
            <a-tab-pane key="6" tab="出租率45.24%">Content of Tab Pane 3</a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import type { CascaderProps } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import card from './card.vue';
  import Icon from '/@/components/Icon/src/Icon.vue';
  import enter from './enter/enter.vue';

  const activeKey = ref('1');
  const options: CascaderProps['options'] = [
    // 自定义选项
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];
</script>

<style scoped></style>

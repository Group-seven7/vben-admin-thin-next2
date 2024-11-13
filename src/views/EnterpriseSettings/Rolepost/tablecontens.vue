<!--角色权限模块-->
<template>
  <PageWrapper>
    <h1>角色权限</h1>
    <Row :gutter="10">
      <Col :lg="{ span: 5 }" class="h-screen overflow-y-auto">
        <div class="h-full rounded-lg bg-white tree-container">
          <Card title="角色岗位" class="rounded-md">
            <template #extra>
              <Tooltip placement="bottomRight" :arrow="mergedArrow">
                <template #title>
                  <span>创建新项目</span>
                </template>
                <Icon
                  icon="material-symbols-light:add"
                  width="1.2em"
                  height="1.2em"
                  style="color: blue"
                />
              </Tooltip>
            </template>
            <div class="flex justify-between">
              <div>
                <Icon
                  icon="icon-park-outline:people"
                  width="1.2em"
                  height="1.2em"
                  style="color: black"
                />
                <span> 产品经理 </span>
              </div>
              <div>
                <Dropdown>
                  <a class="ant-dropdown-link" @click.prevent>
                    <MoreOutlined />
                  </a>
                  <template #overlay>
                    <Menu>
                      <Menu.Item
                        key="edit"
                        @mouseenter="hoverEdit = true"
                        @mouseleave="hoverEdit = false"
                      >
                        <span>{{ hoverEdit ? '正在编辑...' : '编辑' }}</span>
                      </Menu.Item>
                      <Menu.Item
                        key="delete"
                        @mouseenter="hoverDelete = true"
                        @mouseleave="hoverDelete = false"
                      >
                        <span>{{ hoverDelete ? '正在删除...' : '删除' }}</span>
                      </Menu.Item>
                    </Menu>
                  </template>
                </Dropdown>
              </div>
            </div>
          </Card>
        </div>
      </Col>

      <Col :lg="{ span: 19 }" class="w-[500px] h-[60vw] overflow-y-auto">
        <div class=" h-full rounded-lg">
          <Card>
            <div class="flex justify-between items-center mt-2">
              <Tabs v-model:activeKey="activeKey" @change="onTabChange">
                <a-tab-pane key="1" tab="成员管理" />
                <a-tab-pane key="2" tab="支援权限" />
                <a-tab-pane key="3" tab="数据权限" />
              </Tabs>
              <div class="flex items-center w-[400px]">
                <Input
                  v-model:value="valueInput"
                  @press-enter="search"
                  placeholder="客户姓名/客户电话"
                />
              </div>
            </div>
            <component :is="currentComponent" :data-source="filteredDataSource" />
          </Card>
        </div>
      </Col>
    </Row>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { PageWrapper } from '/src/components/Page';
  import { Col, Row, Card, Tabs, Dropdown, Menu, Input } from 'ant-design-vue';
  import { Icon } from '/src/components/Icon';
  import { MoreOutlined } from '@ant-design/icons-vue';
  import ResoureMang from '/@/views/EnterpriseSettings/Rolepost/ResoureMang.vue';
  import DataPermissions from './DataPermissions.vue';
  import MemberManagement from '/@/views/EnterpriseSettings/Rolepost/MemberManagement.vue';
  import { getEnterprise } from '/@/api/Enterprise';

  const dataSource = ref({ enterprises: [] });
  const filteredDataSource = ref([]);
  const activeKey = ref('1');
  const valueInput = ref('');
  const hoverEdit = ref(false);
  const hoverDelete = ref(false);
  const currentComponent = ref(MemberManagement); // 默认组件

  // 加载数据
  onMounted(async () => {
    try {
      const response = await getEnterprise();
      dataSource.value = response || {};
      filteredDataSource.value = dataSource.value.enterprises;
    } catch (error) {
      console.error('获取企业数据失败:', error);
    }
  });

  // 搜索功能
  const search = () => {
    const keyword = valueInput.value.trim().toLowerCase();
    if (keyword) {
      filteredDataSource.value = dataSource.value.enterprises.filter(
        (item) => item.name.toLowerCase().includes(keyword) || item.phone.includes(keyword),
      );
    } else {
      filteredDataSource.value = dataSource.value.enterprises;
    }
  };

  // 标签切换
  const onTabChange = (key) => {
    switch (key) {
      case '1':
        currentComponent.value = MemberManagement;
        break;
      case '2':
        currentComponent.value = ResoureMang;
        break;
      case '3':
        currentComponent.value = DataPermissions;
        break;
      default:
        currentComponent.value = null;
    }
  };
</script>

<style scoped lang="less">
  .tree-container {
    position: relative;
    z-index: 1;
  }
</style>

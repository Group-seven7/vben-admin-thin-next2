<template>
  <PageWrapper>
    <h1>部门员工</h1>
    <Row :gutter="10">
      <Col :lg="{ span: 5 }" class="min-h-[80vh]">
        <div class="h-full rounded-lg bg-white tree-container">
          <Card title="组织架构" class="rounded-md">
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
                  @click="showModal"
                />
              </Tooltip>
            </template>
            <div class="flex flex-wrap justify-between">
              <Tree
                :treeData="organizationTreeData"
                :expandedKeys="defaultExpandedKeys"
                :selectedKeys="selectedKeys"
                @select="onNodeSelect"
                blockNode
                selectable
                :treeNodeProps="{ class: 'tree-node-wrapper' }"
              >
                <template #title="{ title, key , record }">
                  <span @click="showModal" style="cursor: pointer;">{{ title }}</span>
                  <Tooltip placement="bottom" :title="renderTooltipContent(record)" trigger="click">
                    <MoreOutlined
                      v-if="key === '1-1'"
                      style="margin-left: 8px; cursor: pointer"
                    />
                  </Tooltip>
                </template>
              </Tree>
            </div>
            <!-- 部门模态框 -->
            <Modal v-model:visible="open" title="编辑部门" @ok="handleOk" class="bg-red-300 z-999">
              <div class="p-6">
                <label class="block text-gray-700 font-bold mb-2" for="departmentName">部门名称*</label>
                <div class="mb-4">
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="departmentName"
                    type="text"
                    v-model="newDepartmentName"
                    placeholder="输入部门名称"
                  />
                </div>
                <div class="flex items-center">
                  <input class="mr-3" id="storeCheckbox" type="checkbox" v-model="newStore" />
                  <label class="text-gray-700" for="storeCheckbox">门店</label>
                </div>
                <div class="mb-6">
                  <label class="block text-gray-700 font-bold mb-2" for="parentDepartment">所属部门*</label>
                  <select
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="parentDepartment"
                    v-model="newParentDepartment"
                  >
                    <option value="">选择所属部门</option>
                    <option v-for="dep in departments" :key="dep.id" :value="dep.id">{{ dep.name }}</option>
                  </select>
                </div>
              </div>
            </Modal>

            <!-- 确认删除模态框 -->
            <Modal v-model:visible="openDeleteModal" title="确认删除" @ok="confirmDelete" @cancel="cancelDelete">
              <p>您确定要删除这条记录吗？</p>
            </Modal>
          </Card>
        </div>
      </Col>
      <Col :lg="{ span: 19 }" style="height: 80vh">
        <div class="bg-red-100 h-full rounded-lg">
          <Card>
            <template #title>成员管理</template>
            <template #extra>
              <Button type="primary" @click="addEmployee">添加员工</Button>
            </template>
            <div class="bg-gray-300 h-[33px] text-sm rounded-lg">{{ selectedDepartment }}</div>

            <div class="flex justify-between items-center mt-2">
              <Tabs v-model:activeKey="activeKey" @change="onTabChange">
                <a-tab-pane key="1" tab="正常" />
                <a-tab-pane key="2" tab="已禁用" />
              </Tabs>
              <div class="flex items-center w-[400px]">
                <a-input
                  v-model:value="valueInput"
                  @press-enter="search"
                  placeholder="客户姓名/客户电话"
                />
                <Icon icon="bx:download" size="20" @click="clickBtn" class="ml-2 cursor-pointer" />
              </div>
            </div>

            <Table
              :columns="columnsData"
              :dataSource="filteredDataSource"
              row-key="id"
              :pagination="{ pageSize: 3 }"
            >
              <template #action="{ record }">
                <Tooltip placement="bottom" :title="renderTooltipContent(record)" trigger="click">
                  <MoreOutlined />
                </Tooltip>
              </template>
            </Table>
          </Card>
        </div>
      </Col>
    </Row>
  </PageWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted, h } from 'vue';
import { PageWrapper } from '/src/components/Page';
import { Col, Row, Card, Button, Table, Tabs, Tree, Tooltip, Modal } from 'ant-design-vue';
import { Icon } from '/src/components/Icon';
import { MoreOutlined } from '@ant-design/icons-vue';
import { getEnterprise } from '/src/api/Enterprise';

interface TreeNode {
  key: string;
  title: string;
  children?: TreeNode[];
}

const dataSource = ref({ enterprises: [] });
const filteredDataSource = ref([]);
const organizationTreeData = ref<TreeNode[]>([]);
const open = ref(false);
const openDeleteModal = ref(false); // 删除确认模态框状态
const recordToDelete = ref(null); // 存储待删除的记录
const newDepartmentName = ref('');
const newStore = ref(false);
const newParentDepartment = ref('');
const departments = ref([
  { id: '1', name: '部门一' },
  { id: '2', name: '部门二' },
]);
const selectedKeys = ref(['1-1']);
const selectedDepartment = ref('E+SPACE');
const activeKey = ref('1');
const valueInput = ref('');

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  open.value = false;
};

// 删除员工
const deleteEmployee = (record) => {
  // 打开确认删除模态框
  recordToDelete.value = record; // 将待删除的记录存到状态中
  openDeleteModal.value = true;
};

const confirmDelete = () => {
  if (recordToDelete.value) {
    // 过滤掉删除的员工
    filteredDataSource.value = filteredDataSource.value.filter((item) => item.id !== recordToDelete.value.id);

    // 重新为剩余员工的 ID 赋值
    filteredDataSource.value = filteredDataSource.value.map((item, index) => {
      item.id = index + 1; // 重新赋值 ID，从 1 开始
      return item;
    });

    // 关闭确认模态框
    openDeleteModal.value = false;
    recordToDelete.value = null; // 清空待删除的记录
  }
};

const cancelDelete = () => {
  openDeleteModal.value = false; // 关闭确认模态框
  recordToDelete.value = null; // 清空待删除的记录
};

const renderTooltipContent = (record) => {
  const items = ['编辑', '转移数据', '禁用', '删除'];
  return h(
    'div',
    { class: 'tooltip-content p-1 bg-white-100 shadow' },
    items.map((item) => {
      return h(
        'div',
        {
          class: 'text-sm hover:bg-red-200 rounded cursor-pointer',
          onClick: () => {
            if (item === '删除') {
              deleteEmployee(record); // 调用删除函数
            } else {
              // 处理其他操作（如编辑、转移数据、禁用）
              console.log(item, record);
            }
          },
        },
        item,
      );
    }),
  );
};

// 加载数据
onMounted(async () => {
  try {
    const response = await getEnterprise();
    dataSource.value = response || {};
    filteredDataSource.value = dataSource.value.enterprises;
    organizationTreeData.value = [
      {
        title: 'E+SPACE',
        key: '1',
        children: [
          {
            title: '科技园',
            key: '1-1',
            children: [
              { title: '(门店)软件新城公寓(4人)', key: '1-1-1' },
              { title: '运营部(软新)', key: '1-1-2' },
              { title: '综合部(软新)', key: '1-1-3' },
              { title: '财务部(软新)', key: '1-1-4' },
            ],
          },
          { title: '招商策划', key: '1-2' },
          { title: '运营管理', key: '1-3' },
        ],
      },
      {
        title: '未分配员工',
        key: '2',
        children: [
          { title: '项目 1', key: '2-1' },
          { title: '项目 2', key: '2-2' },
          { title: '项目 3', key: '2-3' },
        ],
      },
      {
        title: '申请加入员工',
        key: '3',
        children: [
          { title: '项目 1', key: '3-1' },
          { title: '项目 2', key: '3-2' },
          { title: '项目 3', key: '3-3' },
        ],
      },
    ];
  } catch (error) {
    console.error('获取企业数据失败:', error);
  }
});

// 树节点选择事件处理
const onNodeSelect = (selectedKeysValue) => {
  selectedKeys.value = selectedKeysValue;
  const selectedNode = organizationTreeData.value.find(node => node.key === selectedKeysValue[0]);
  if (selectedNode) {
    selectedDepartment.value = selectedNode.title;
  }
};

// 搜索功能
const search = () => {
  const keyword = valueInput.value.trim().toLowerCase();
  if (keyword) {
    filteredDataSource.value = dataSource.value.enterprises.filter(item =>
      item.name.toLowerCase().includes(keyword) || item.phone.includes(keyword)
    );
  } else {
    filteredDataSource.value = dataSource.value.enterprises;
  }
};

// 其他方法...
const clickBtn = () => {
  console.log('下载按钮被点击');
};

// 表格列配置
const columnsData = [
  { title: '序号', dataIndex: 'id', key: 'id', align: 'center' },
  { title: '状态', dataIndex: 'status', key: 'status', align: 'center' },
  { title: '员工编号', dataIndex: 'number', key: 'number', align: 'center' },
  { title: '员工姓名', dataIndex: 'name', key: 'name', align: 'center' },
  { title: '员工电话(登入账号)', dataIndex: 'phone', key: 'phone', align: 'center' },
  { title: '工龄', dataIndex: 'worktime', key: 'worktime', align: 'center' },
  { title: '邮箱', dataIndex: 'email', align: 'center' },
  { title: '部门', dataIndex: 'department', key: 'department', align: 'center' },
  { title: '部门角色', dataIndex: 'work', key: 'work', align: 'center' },
  { title: '操作', dataIndex: 'action', slots: { customRender: 'action' }, align: 'center' },
];
</script>

<style scoped lang="less"></style>

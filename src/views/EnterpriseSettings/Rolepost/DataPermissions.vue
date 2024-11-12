<!--数据权限设置-->
<template>
  <div class="h-[65vh] overflow-y-auto">
    <PageWrapper>
      <nav>
        <div v-for="(item, index) in datasource" :key="index" class="border-b border-gray-300 py-2">
          <!-- 渲染标题 -->
          <div class="font-bold mb-5">
            <span class="text-red-500">{{ item.title }}</span>
          </div>

          <!-- 渲染子标题 -->
          <div class="my-2 mb-5">
            <div
              v-for="(childItem, childIndex) in getChildren(item)"
              :key="childIndex"
              class="flex gap-2 mb-2 mt-10 border-b border-dashed border-gray-300"
            >
              <div class="text-red-500 w-1/5">{{ childItem }}</div>

              <!-- 在子标题旁边添加 actors-container -->
              <div class="w-4/5 flex flex-col">
                <div class="flex flex-wrap gap-2 justify-between item-start">
                  <div>
                    <a-checkbox v-model:checked="checkedList">{{ item.actors }}</a-checkbox>
                  </div>
                  <div>
                    <div>
                      <a-checkbox v-model:checked="checkedList">{{ item.actors_2 }}</a-checkbox>
                      <a-checkbox v-model:checked="checkedList">
                        <span class="text-sm text-gray-400 bg-gray-300">{{ item.actors_3 }}</span>
                      </a-checkbox>
                    </div>
                    <div class="space-y-2">
                      <button
                        @click="showModal"
                        class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg mb-5"
                      >
                        <span class="mr-1 text-xl">+</span>添加
                      </button>
                      <Modal
                        v-model:visible="visible"
                        title="指定部门"
                        @ok="handleOk"
                        :mask="false"
                      >
                        <input type="text " placeholder="请输入部门名称" />
                      </Modal>
                    </div>
                  </div>
                  <div>
                    <a-checkbox v-model:checked="checkedList">{{ item.actors_4 }}</a-checkbox>
                  </div>
                  <div>
                    <a-checkbox v-model:checked="checkedList">{{ item.actors_5 }}</a-checkbox>
                  </div>
                </div>

                <!-- 下拉框位于复选框下面 -->
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- 业绩管理部分 -->
      <nav>
        <div>
          <h1 class="text-2xl font-bold mb-4">巡房管理</h1>
          <Card>
            <template #title>业绩管理</template>
            <div>
              <div class="flex items-center justify-between">
                <div class="w-1/5">业绩台账</div>
                <div class="flex space-x-2 w-4/5 justify-between">
                  <a-checkbox v-model:checked="checkedList">全部</a-checkbox>
                  <a-checkbox v-model:checked="checkedList">本店</a-checkbox>
                  <a-checkbox v-model:checked="checkedList">本部</a-checkbox>
                  <a-checkbox v-model:checked="checkedList">本人相关</a-checkbox>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </nav>

      <!-- 消息公告部分 -->
      <nav class="mt-8 mb-5">
        <div class="border-b border-gray-300 mb-4">
          <span class="item-container">消息公告</span>
        </div>
        <div class="flex justify-between">
          <div class="w-1/5"><span class="font-bold">公告</span></div>
          <div class="flex justify-around w-4/5">
            <a-checkbox v-model:checked="checkedList">全部</a-checkbox>
            <div>
              <a-checkbox v-model:checked="checkedList">本店</a-checkbox>
              <a-checkbox v-model:checked="checkedList" class="text-gray-500 bg-gray-100"
                >可查看子部数据</a-checkbox
              >
              <div class="mt-2">
                <button
                  @click="showModal"
                  class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg mb-5"
                >
                  <span class="mr-1 text-xl">+</span>添加
                </button>
                <Modal v-model:visible="visible" title="指定部门" @ok="handleOk" :mask="false">
                  <input type="text " placeholder="请输入部门名称" />
                </Modal>
              </div>
            </div>
            <a-checkbox v-model:checked="checkedList">本部</a-checkbox>
            <a-checkbox v-model:checked="checkedList">本人相关</a-checkbox>
          </div>
        </div>
      </nav>
    </PageWrapper>
  </div>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { ref } from 'vue';
  import { Card, Modal, Button } from 'ant-design-vue';
  import { getEnterprise } from '/@/api/Enterprise';

  const datasource = ref<any[]>([]); // 数据源
  const checkedList = ref<string[]>([]); // 初始化为空数组
  const value = ref(null); // 下拉框的值
  const visible = ref<boolean>(false);

  const showModal = () => {
    visible.value = true;
  };

  const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
  };
  getEnterprise()
    .then((res) => {
      console.log(res);
      datasource.value = res.featureList || []; // 确保 featureList 为数组
      console.log('datasource.value', datasource.value);
    })
    .catch((err) => {
      console.error('获取数据失败：', err);
    });

  // 下拉框选项
  const options = [
    { value: 'jack', label: 'Jack' },
    { value: 'lucy', label: 'Lucy' },
    { value: 'disabled', label: 'Disabled', disabled: true },
    { value: 'Yiminghe', label: 'yiminghe' },
  ];

  // 方法：获取所有子标题
  const getChildren = (item: any) => {
    if (!item) return []; // 如果 item 为 undefined，则返回空数组
    return [item.title_child, item.title_child_2, item.title_child_3, item.title_child_4].filter(
      Boolean,
    ); // 过滤掉 undefined 或空值
  };

  // 下拉框变化处理
  const handleChange = (value: any) => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  };
</script>
<style scoped>
  /* 按钮样式 */
  .dashed-button {
    display: inline-block;
    padding: 5px 10px;
    border: 1px dashed #d9d9d9; /* 虚线边框 */
    border-radius: 4px; /* 圆角边框 */
    background-color: #0a87f8; /* 背景颜色 */
    color: #0a87f8; /* 文字颜色 */
    font-size: 14px; /* 字体大小 */
    cursor: pointer; /* 鼠标悬停时显示指针 */
    text-align: center; /* 文字居中 */
    text-decoration: none; /* 去除下划线 */
  }

  /* 按钮悬停时的样式 */
  .dashed-button:hover {
    background-color: #e6e6e6; /* 悬停时的背景颜色 */
    color: #0a87f8; /* 悬停时的文字颜色 */
  }
</style>

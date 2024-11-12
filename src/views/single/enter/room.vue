<template>
  <PageWrapper>
    <div>
      <div>
        <div>项目信息</div>
        <div class="rounded-lg bg-gray-200">
          <div class="flex">
            <div class="m-3">项目名称：</div>
            <div class="m-3">翻斗花园</div>
            <div class="m-3">项目分期：</div>
            <div class="m-3">1.1期</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-5">
        <!-- 左边 -->
        <div class="rounded-lg bg-gray-200 mr-0 md:mr-7 mb-5 md:mb-0">
          <div class="m-5 flex items-center">
            <div>房型列表</div>
            <Icon icon="iconamoon:question-mark-circle-light" style="color: #ffa500" />
          </div>
          <div>
            <div
              class="border border-gray bg-white m-5 w-full md:w-35 h-20 rounded-lg flex items-center"
            >
              <div class="ml-2">房型ML</div>
            </div>
            <div
              class="border-dashed border-2 border-gray-400 bg-white m-5 w-full md:w-35 h-20 rounded-lg flex items-center justify-center"
            >
              <Icon icon="ri:add-line" />
            </div>
          </div>
        </div>

        <!-- 右边 -->
        <div class="rounded-lg bg-gray-200 w-full md:w-auto">
          <div class="m-5">
            <div class="flex flex-col md:flex-row items-start">
              <div class="mr-3">楼栋信息</div>
              <a-select value="address1" class="mb-2 md:mb-0 w-full md:w-auto">
                <a-select-option value="address1">1栋1单元</a-select-option>
                <a-select-option value="address2">1栋2单元</a-select-option>
              </a-select>
              <div class="ml-auto text-sm">
                <span>共 1 层，共 5 间</span>
                <span>| 禁用 0 间</span>
                <span>| 启用 0 间</span>
                <span>| 剩余 5 间未分配</span>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-lg m-5 pb-5">
            <div class="flex border-b border-gray-300 pb-1 m-5">
              <div>1F</div>
              <div class="ml-auto">
                <input type="checkbox" />
                <span>全选</span>
              </div>
            </div>
            <div class="m-5 flex flex-wrap">
              <div class="mr-3 mb-3 w-26 h-20 border border-gray-500 rounded-lg p-2">101</div>
              <div class="mr-3 mb-3 w-26 h-20 border border-gray-500 rounded-lg p-2">102</div>
              <div class="mr-3 mb-3 w-26 h-20 border border-gray-500 rounded-lg p-2">103</div>
              <div class="mr-3 mb-3 w-26 h-20 border border-gray-500 rounded-lg p-2">104</div>
              <div class="mr-3 mb-3 w-26 h-20 border border-gray-500 rounded-lg p-2">105</div>
              <div
                class="border-dashed border-gray-500 mr-3 mb-3 w-26 h-20 rounded-lg flex items-center justify-center"
              >
                <Icon icon="ri:add-line" />
              </div>
            </div>
          </div>
          <div class="m-5">
            <div class="text-lg font-semibold mb-2">对[]房间进行统一配置</div>
            <div class="flex flex-wrap">
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
              <div
                class="flex border border-gray-300 rounded-lg mr-5 mb-3 flex-1 min-w-[200px] h-12"
              >
                <div
                  class="rounded-l-lg rounded-bl-lg bg-gray-300 flex items-center justify-center h-full"
                >
                  <div class="ml-2 mr-2">出租价</div>
                </div>
                <div class="flex-1">
                  <select
                    class="w-full h-full border-none focus:outline-none rounded-r-lg rounded-br-lg"
                  >
                    <!-- 设置宽度和高度 -->
                    <option value="option1">选项 1</option>
                    <option value="option2">选项 2</option>
                    <option value="option3">选项 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="m-5 flex flex-wrap">
            <div class="flex border border-black rounded-lg w-full sm:w-auto flex-1 mb-4">
              <div
                class="writing-mode-vertical text-gray-800 rounded-l-lg rounded-bl-lg bg-gray-300 p-2 border-black"
                >规划</div
              >
              <div class="">
                <div class="flex items-center border-l border-black">
                  <span>建筑面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
                <div class="flex items-center border-t border-l border-black">
                  <span>套内面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
              </div>
            </div>

            <div
              class="flex border border-black rounded-lg w-full sm:w-auto flex-1 mb-4 ml-0 sm:ml-4"
            >
              <div
                class="writing-mode-vertical rounded-l-lg rounded-bl-lg text-gray-800 bg-gray-300 p-2 border-black"
                >预测</div
              >
              <div class="">
                <div class="flex items-center border-l border-black">
                  <span>建筑面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
                <div class="flex items-center border-t border-l border-black">
                  <span>套内面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
              </div>
            </div>

            <div
              class="flex border border-black rounded-lg w-full sm:w-auto flex-1 mb-4 ml-0 sm:ml-4"
            >
              <div
                class="writing-mode-vertical rounded-l-lg rounded-bl-lg text-gray-800 bg-gray-300 p-2 border-black"
                >实测</div
              >
              <div class="">
                <div class="flex items-center border-l border-black">
                  <span>建筑面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
                <div class="flex items-center border-t border-l border-black">
                  <span>套内面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
              </div>
            </div>

            <div
              class="flex border border-black rounded-lg w-full sm:w-auto flex-1 mb-4 ml-0 sm:ml-4"
            >
              <div
                class="writing-mode-vertical rounded-l-lg rounded-bl-lg text-gray-800 bg-gray-300 p-2 border-black"
                >可租</div
              >
              <div class="">
                <div class="flex items-center border-l border-black">
                  <span>建筑面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
                <div class="flex items-center border-t border-l border-black">
                  <span>套内面积</span>
                  <input class="w-20 focus:outline-none" />
                  <span>㎡</span>
                </div>
              </div>
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
</script>

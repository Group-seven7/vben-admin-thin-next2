<template>
  <PageWrapper>
    <div>
      <div class="mt-5">
        <div>项目分期信息</div>
        <a-space direction="vertical" class="mr-15 mt-5">
          <span><span class="x">*</span>项目分期</span>
          <a-select placeholder="请选择项目分期">
            <a-select-option value="address1">武汉市</a-select-option>
            <a-select-option value="address2">合肥市</a-select-option>
            <a-select-option value="address3">上海市</a-select-option>
          </a-select>
        </a-space>
      </div>
      <div class="mt-5">
        <div>楼栋信息</div>
        <div class="mt-5">
          <div>
            <div>
              <a-space direction="vertical" class="mr-15 mt-5">
                <span><span class="x">*</span>归属区域</span>
                <input
                  type="text"
                  class="border-b-2 border-gray-300 pb-1 focus:outline-none w-120px"
                  placeholder="输入楼栋归属区"
                />
              </a-space>
              <a-space direction="vertical" class="mr-15 mt-5">
                <span>楼栋信息</span>
                <div class="border-gray-300 border-b-2">
                  <input
                    type="text"
                    class="border-gray-300 pb-1 focus:outline-none w-50px"
                    placeholder="请输入"
                  />
                  <span><span class="x">*</span>号/栋</span>
                  <input
                    type="text"
                    class="pb-1 focus:outline-none w-50px"
                    placeholder="请输入"
                  /><span>单元</span>
                </div>
              </a-space>
              <a-space direction="vertical" class="mr-15 mt-5">
                <span><span class="x">*</span>楼层</span>
                <div class="border-gray-300 border-b-2">
                  <span>共</span>
                  <input
                    type="text"
                    class="border-gray-300 pb-1 focus:outline-none w-50px"
                    placeholder="请输入"
                  />
                  <span>层，每层</span>
                  <input
                    type="text"
                    class="pb-1 focus:outline-none w-50px"
                    placeholder="请输入"
                  /><span>间</span>
                </div>
              </a-space>
              <a-space direction="vertical" class="mr-15 mt-5">
                <span>产品类型</span>
                <select
                  id="options"
                  name="options"
                  class="w-120px border-b-2 text-base border-gray-300 focus:outline-none sm:text-sm"
                >
                  <option value="">办公楼</option>
                  <option value="option1">选项 1</option>
                  <option value="option2">选项 2</option>
                  <option value="option3">选项 3</option>
                </select>
              </a-space>
            </div>
            <div class="mt-5">
              <a-space class="mr-15 mt-5">
                <input type="checkbox" />
                <span>房间号去“4”</span>
              </a-space>
              <a-space class="mr-15 mt-5">
                <input type="checkbox" />
                <span>增加房间号前缀</span>
              </a-space>
              <a-space class="mr-15 mt-5">
                <input
                  type="text"
                  class="border-b-2 border-gray-300 pb-1 focus:outline-none w-120px"
                  placeholder="输入楼栋归属区"
                /><span><span class="x">*</span>房间号前缀</span>
              </a-space>
              <a-space direction="vertical" class="mr-15 mt-5">
                <span>房间数量</span>
                <div class="border-gray-300 border-b-2">
                  <input type="text" class="pb-1 focus:outline-none w-50px" placeholder="" /><span
                    >间</span
                  >
                </div>
              </a-space>
            </div>
            <div class="mt-5 flex">
              <div class="flex border-1 border-black rounded-lg">
                <div
                  class="writing-mode-vertical text-gray-800 rounded-l-lg rounded-bl-lg bg-gray-300 p-2 border-black"
                  >规划</div
                >
                <div class="">
                  <div class="flex items-center border-l-1 border-black">
                    <span>建筑面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                  <div class="flex items-center border-t-1 border-l-1 border-black">
                    <span>套内面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                </div>
              </div>
              <div class="flex border-1 border-black rounded-lg w-210px ml-15">
                <div
                  class="writing-mode-vertical rounded-l-lg rounded-bl-lg text-gray-800 bg-gray-300 p-2 border-black"
                  >预测</div
                >
                <div class="">
                  <div class="flex items-center border-l-1 border-black">
                    <span>建筑面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                  <div class="flex items-center border-t-1 border-l-1 border-black">
                    <span>套内面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                </div>
              </div>
              <div class="flex border-1 border-black rounded-lg w-210px ml-15">
                <div
                  class="writing-mode-vertical rounded-l-lg rounded-bl-lg text-gray-800 bg-gray-300 p-2 border-black"
                  >实测</div
                >
                <div class="">
                  <div class="flex items-center border-l-1 border-black">
                    <span>建筑面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                  <div class="flex items-center border-t-1 border-l-1 border-black">
                    <span>套内面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                </div>
              </div>
              <div class="flex border-1 border-black rounded-lg w-210px ml-15">
                <div
                  class="writing-mode-vertical rounded-l-lg rounded-bl-lg text-gray-800 bg-gray-300 p-2 border-black"
                  >可租</div
                >
                <div class="">
                  <div class="flex items-center border-l-1 border-black">
                    <span>建筑面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
                  <div class="flex items-center border-t-1 border-l-1 border-black">
                    <span>套内面积</span>
                    <input class="w-20 focus:outline-none" /><span>㎡</span>
                  </div>
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
</script>
<style scoped>
  .writing-mode-vertical {
    writing-mode: vertical-rl; /* 将文本设置为竖直排列 */
  }
</style>

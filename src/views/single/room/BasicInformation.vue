<template>
  <PageWrapper>
    <div>
      <div class="border-b border-dashed border-gray-400 pb-2">
        <div class="flex items-center">
          <div class="text-xl mr-3">租金信息</div>
          <div class="text-blue-500 flex items-center cursor-pointer">
            <Icon icon="solar:pen-2-outline" />
            <span class="ml-1">编辑</span>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div class="p-2">
            <div>标准价格</div>
            <div>1000元/月</div>
          </div>
          <div class="p-2">
            <div>底边价格</div>
            <div>3000元/月</div>
          </div>
          <div class="p-2">
            <div>佣金</div>
            <div>-</div>
          </div>
        </div>
        <div class="p-2">
          <div>其他费用</div>
          <div>-</div>
        </div>
        <div class="p-2">
          <div>更多租金方案</div>
          <div>-</div>
        </div>
      </div>
      <div class="border-b border-dashed border-gray-400 pb-2 mt-5">
        <div class="flex items-center">
          <div class="text-xl mr-3">租金信息</div>
          <div class="text-blue-500 flex items-center cursor-pointer">
            <Icon icon="solar:pen-2-outline" />
            <span class="ml-1">编辑</span>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div class="p-2">
            <div>房间号</div>
            <div>101-A</div>
          </div>
          <div class="p-2">
            <div>产品类型</div>
            <div>公寓</div>
          </div>
          <div class="p-2">
            <div>用途</div>
            <div>-</div>
          </div>
          <div class="p-2">
            <div>朝向</div>
            <div>东</div>
          </div>
          <div class="p-2">
            <div>预估面积</div>
            <div>建筑面积：35㎡</div>
            <div>套内面积：30㎡</div>
          </div>
          <div class="p-2">
            <div>实测面积</div>
            <div>建筑面积：35㎡</div>
            <div>套内面积：30㎡</div>
          </div>
          <div class="p-2">
            <div>可租面积</div>
            <div>建筑面积：35㎡</div>
            <div>套内面积：30㎡</div>
          </div>
          <div class="p-2">
            <div>规划面积</div>
            <div>建筑面积：35㎡</div>
            <div>套内面积：30㎡</div>
          </div>
          <div class="p-2">
            <div>看房时间</div>
            <div>随时看房</div>
          </div>
          <div class="p-2">
            <div>入住性别要求</div>
            <div>不限</div>
          </div>
          <div class="p-2">
            <div>最多入住人数</div>
            <div>3人</div>
          </div>
          <div class="p-2">
            <div>首次可租日期</div>
            <div>-</div>
          </div>
          <div class="p-2">
            <div>下次可租日期</div>
            <div>2023.02.06</div>
          </div>
          <div class="p-2">
            <div>锁房期限</div>
            <div>-</div>
          </div>
          <div class="p-2">
            <div>锁房备注</div>
            <div>-</div>
          </div>
        </div>
        <div>
          <img
            width="1094"
            height="593"
            src="https://img02.mockplus.cn/image/2023-02-10/534aa650-a937-11ed-8c01-1d6ecd8b35b5.png"
            class="img-mode-fit"
          />
        </div>
        <div class="m-5">
          <div class="flex">
            <div>房间配置</div>
            <div class="text-blue-500 flex items-center cursor-pointer">
              <Icon icon="solar:eye-linear" class="ml-2" />
              <span class="ml-2">查看物资明细</span>
            </div>
          </div>
          <div>-</div>
        </div>
        <div class="m-5">
          <div>接待要求</div>
          <div>-</div>
        </div>
        <div class="m-5">
          <div class="flex">
            <div>房间备注</div>
            <span class="ml-2 text-orange-500">(仅内部可见)</span>
          </div>
          <div>-</div>
        </div>
      </div>
      <div class="border-b border-dashed border-gray-400 pb-2 mt-5">
        <div>
          <img
            width="1296"
            height="952"
            src="https://img02.mockplus.cn/image/2023-03-02/df77ccd0-b8c2-11ed-9ac3-6f90aabbc87d.png"
            class="img-mode-fit"
          />
        </div>
        <div class="mt-3">
          <div>入住须知</div>
          <div>-</div>
        </div>
        <div class="mt-3">
          <div>项目图片</div>
          <div>-</div>
        </div>
      </div>
      <div class="border-b border-dashed border-gray-400 pb-2 mt-5">
        <div>
          <div class="flex items-center">
            <div class="text-xl mr-3">负责人</div>
            <div class="text-blue-500 flex items-center cursor-pointer">
              <Icon icon="solar:pen-2-outline" />
              <span class="ml-1">编辑</span>
            </div>
          </div>
          <div class="flex mt-3 mb-3">
            <div class="mr-5">
              <div>所属门店（部门）</div>
              <div>公寓测试门店</div>
            </div>
            <div>
              <div>维护人</div>
              <div>刘清晨-13111111111</div>
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

<style scoped></style>

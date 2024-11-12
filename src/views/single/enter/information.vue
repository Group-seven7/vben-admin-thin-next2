<template>
  <PageWrapper>
    <div>
      <div class="m-5">
        <div>项目信息</div>
        <div>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span><span class="x">*</span>门店电话</span>
            <a-input placeholder="请输入门店电话" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span><span class="x">*</span>用水</span>
            <a-select value="status1" style="width: 150px">
              <a-select-option value="status1">民水</a-select-option>
              <a-select-option value="status2">商业用水</a-select-option>
            </a-select>
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span><span class="x">*</span>用电</span>
            <a-select value="status1" style="width: 150px">
              <a-select-option value="status1">民电</a-select-option>
              <a-select-option value="status2">商业用电</a-select-option>
            </a-select>
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span><span class="x">*</span>供暖信息</span>
            <a-select value="address1" style="width: 150px">
              <a-select-option value="address1">未知</a-select-option>
              <a-select-option value="address2">集中供暖</a-select-option>
              <a-select-option value="address3">自供暖</a-select-option>
            </a-select>
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>燃气</span>
            <a-select value="status1" style="width: 150px">
              <a-select-option value="status1">有</a-select-option>
              <a-select-option value="status2">无</a-select-option>
            </a-select>
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>门店核验码</span>
            <a-input placeholder="请输入门店核验码" />
          </a-space>
        </div>
      </div>
      <div>
        <div>
          项目配置
          <a-checkbox
            v-model:checked="state.checkAll"
            :indeterminate="state.indeterminate"
            @change="onCheckAllChange"
          >
            全选
          </a-checkbox>
        </div>
        <a-checkbox-group v-model:value="state.checkedList" :options="plainOptions" />
        <div class="mt-5 mb-3">vr看房地址</div>
        <a-textarea show-count :maxlength="100" placeholder="请输入VR看房链接地址" class="w-200" />
        <div class="mt-5 mb-3">项目介绍</div>
        <a-textarea show-count :maxlength="100" placeholder="请输入项目介绍" />
        <div class="mt-5 mb-3">周边介绍</div>
        <a-textarea show-count :maxlength="100" placeholder="请输入项目介绍" />
        <div class="mt-5 mb-3">项目标签(仅内部可见)</div>
        <div class="flex">
          <a-tag color="blue" closable>宽敞</a-tag>
          <a-tag color="blue" closable>舒适</a-tag>
        </div>

        <div class="mt-5 mb-3">备注(仅内部可见)</div>
        <a-textarea show-count :maxlength="100" placeholder="请输入备注信息" />
        <div class="mt-5 mb-3">入住须知</div>
        <a-textarea show-count :maxlength="100" placeholder="请输入入住须知" />
        <div class="mt-5 mb-3">项目图片</div>
        <div>
          <img
            width="867"
            height="172"
            src="https://img02.mockplus.cn/image/2023-02-07/96ce4f10-a6c3-11ed-87cb-731a2bc9cd7f.png"
            class="img-mode-fit"
          />
        </div>
        <div class="text-sm text-gray-500 mt-5">
          <div>温馨提示：</div>
          <div>* 支持图片格式（jpg、png、jpeg），最多上传24张，每张最大10M；</div>
          <div>* 支持视频格式（mp4、avi、mov），最多上传1个视频，不可大于50M；</div>
          <div>* 拖动图片可以进行排序显示；</div>
          <div>* 默认上传的第一张图为首图，悬浮图片上显示设为封面按钮；</div>
          <div>*上传图片后，图片下面显示图片标签类型；悬浮图片时右上角出现删除图标；</div>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { reactive, watch } from 'vue';
  const plainOptions = [
    '洗衣房',
    '饮水机',
    '厨房',
    '停车位',
    '咖啡厅',
    '电视',
    '冰箱',
    '微波炉',
    '洗衣机',
    '空调',
    '烤箱',
    '24小时保安',
    '常规保洁',
    '健身房',
    '前台',
    '代收快递',
    '游泳池',
    '公共WiFi',
    '超市',
    '电梯',
  ];
  const state = reactive({
    indeterminate: true,
    checkAll: false,
    checkedList: ['Apple', 'Orange'],
  });

  const onCheckAllChange = (e: any) => {
    Object.assign(state, {
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
    });
  };
  watch(
    () => state.checkedList,
    (val) => {
      state.indeterminate = !!val.length && val.length < plainOptions.length;
      state.checkAll = val.length === plainOptions.length;
    },
  );
</script>

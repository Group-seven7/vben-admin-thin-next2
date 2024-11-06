<template>
  <PageWrapper>
    <div>
      <div>
        <a-space direction="vertical">
          <span><span class="x">*</span>项目名称</span>
          <a-input v-model:value="value" placeholder="请输入项目名称" />
        </a-space>
      </div>
      <div class="mt-5">
        <div>项目基本信息</div>
        <div>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目编号</span>
            <a-input v-model:value="value" placeholder="请输入项目编号" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目推广名称</span>
            <a-input v-model:value="value" placeholder="请输入项目推广名称" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>权益比例</span>
            <a-input v-model:value="value" placeholder="请输入权益比例" suffix="%" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span><span class="x">*</span>项目地址</span>
            <a-select placeholder="请选择项目地址">
              <a-select-option value="address1">武汉市</a-select-option>
              <a-select-option value="address2">合肥市</a-select-option>
              <a-select-option value="address3">上海市</a-select-option>
            </a-select>
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目所属城市公司</span>
            <a-input v-model:value="value" placeholder="请输入项目所属城市公司" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目所属法人公司</span>
            <a-input v-model:value="value" placeholder="请输入项目所属法人公司" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目状态</span>
            <a-select placeholder="请选择项目状态">
              <a-select-option value="status1">在售</a-select-option>
              <a-select-option value="status2">再租</a-select-option>
              <a-select-option value="status3">投资</a-select-option>
            </a-select>
          </a-space>
        </div>
      </div>
      <div class="mt-6">
        <div>项目规划</div>
        <a-textarea
          show-count
          :maxlength="2000"
          placeholder="项目规划、引入行业、运营目标..."
          class="w-150"
        />
      </div>
      <div class="mt-5">
        <div>项目总图</div>
        <div>
          <up></up>
        </div>
      </div>
      <div class="mt-5">
        <div>项目规划指标</div>
        <div>
          <a-space direction="vertical" class="mr-15 mt-5" v-for="(value, key) in data.planning">
            <span>{{ value.title }}</span>
            <a-input placeholder="请输入权益比例" suffix="%" />
          </a-space>
        </div>
      </div>
      <div class="mt-5">
        <div class="mt-5">项目分期信息</div>
        <div class="a">
          <a-space direction="vertical" class="mr-15 mt-5 ml-7">
            <span><span class="x">*</span>项目分期</span>
            <a-input v-model:value="value" placeholder="请输入项目编号" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目编号</span>
            <a-input v-model:value="value" placeholder="请输入项目编号" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目编号</span>
            <a-input v-model:value="value" placeholder="请输入项目编号" />
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>项目编号</span>
            <a-input v-model:value="value" placeholder="请输入项目编号" />
          </a-space>
        </div>
      </div>
      <div class="mt-5">
        <div>负责人信息</div>
        <div>
          <a-space direction="vertical" class="mr-15 mt-5">
            <div><span>所属门店(部门)</span><span class="x">*</span></div>

            <a-select placeholder="公寓测试门店">
              <a-select-option value="status1">在售</a-select-option>
              <a-select-option value="status2">再租</a-select-option>
              <a-select-option value="status3">投资</a-select-option>
            </a-select>
          </a-space>
          <a-space direction="vertical" class="mr-15 mt-5">
            <span>负责人</span>
            <a-select placeholder="王子郭">
              <a-select-option value="status1">在售</a-select-option>
              <a-select-option value="status2">再租</a-select-option>
              <a-select-option value="status3">投资</a-select-option>
            </a-select>
          </a-space>
        </div>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { PageWrapper } from '/@/components/Page';
  import { watch, ref } from 'vue';
  import { getEnterData } from '/@/api/enter';
  import up from './up.vue';

  const value = ref<string>('');
  const value1 = ref<string>('');
  watch(value, () => {
    console.log(value.value);
  });
  watch(value1, () => {
    console.log(value1.value);
  });
  const data = ref({});
  console.log(data);

  // 调用 API 并更新数据
  getEnterData()
    .then((res) => {
      data.value = res;
    })
    .catch((err) => {
      console.error(err);
      if (err.code === 'ECONNABORTED') {
        alert('请求超时，请稍后再试');
      } else {
        alert('发生错误：' + err.message);
      }
    });
</script>

<style>
  .x {
    color: red;
  }
  .a {
    border: 1px solid #ccc; /* 灰色边框 */
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5); /* 灰色阴影 */
    height: 150px;
  }
</style>

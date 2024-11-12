<!--招商-客户来源-->
<template>
  <PageWrapper>
    <nav class="flex flex-col w-full justify-between">
      <!-- 使用v-for循环渲染每个标题和对应的复选框组 -->
      <div
        v-for="(title, index) in Asstitle"
        :key="index"
        class="flex mb-4 border-b border-dashed border-gray-400 my-4"
      >
        <div class="flex justify-start w-1/4">
          <span>{{ title.title }}</span>
        </div>
        <div class="flex justify-start w-3/4 space-y-1.5 space-x-1.5 mb-5 flex-col">
          <div class="grid grid-cols-6 flex flex-wrap">
            <a-checkbox
              v-for="(option, i) in plainOptions[index]"
              :key="option.value"
              v-model="checkedOptions[index][option.value]"
              class="checkbox-item flex items-center"
              :class="{ 'first-checkbox': i === 0 }"
            >
              {{ option.label }}
            </a-checkbox>
          </div>

          <div>
            <button
              @click="showModal"
              class="flex items-center justify-center w-15 h-6 border-2 border-dashed border-blue-500 text-blue-500 rounded-lg"
            >
              <span class="mr-1 text-xl">+</span>添加
            </button>
          </div>
        </div>
      </div>

      <a-modal
        v-model:visible="visible"
        title="新增字典"
        @ok="handleOk"
        @cancel="handleCancel"
        :mask="false"
        class="custom-modal"
      >
        <a-form layout="vertical">
          <a-form-item label="名称" required>
            <a-input v-model:value="dictionaryName" placeholder="输入字典名称" maxlength="10" />
          </a-form-item>
          <a-form-item label="图标">
            <a-upload>
              <a-button> <UploadOutlined /> 上传图片 </a-button>
            </a-upload>
          </a-form-item>
          <a-form-item label="描述" required>
            <a-textarea v-model:value="description" placeholder="请输入描述文字" maxlength="100" />
          </a-form-item>
        </a-form>
      </a-modal>
    </nav>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  // import { Row, Col } from 'ant-design-vue';
  const visible = ref<boolean>(false);
  const dictionaryName = ref('');
  const description = ref('');
  const showModal = () => {
    visible.value = true;
  };

  const handleOk = () => {
    console.log('Dictionary Name:', dictionaryName.value);
    console.log('Description:', description.value);
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  // 每组复选框的选项
  const plainOptions = ref([
    [
      { label: '行业协会', value: 'industry_association' },
      { label: '商户', value: 'merchant' },
      { label: '中介机构', value: 'intermediary_agency' },
      { label: '展览协会', value: 'exhibition_association' },
      { label: '其他机构', value: 'other_institution' },
    ],
    [
      { label: '围挡', value: 'barrier' },
      { label: '车身广告', value: 'vehicle_advertisement' },
      { label: '户外机构', value: 'outdoor_institution' },
      { label: '纸质宣传', value: 'paper_promotion' },
      { label: '电梯广告', value: 'elevator_advertisement' },
      { label: '其他广告', value: 'other_ad' },
    ],
    [
      { label: '百度', value: 'baidu' },
      { label: '公司官网', value: 'company_website' },
      { label: '其他网络', value: 'other_network' },
      { label: '58同城平台推荐', value: '58_recommendation' },
      { label: '58同城个人发帖', value: '58_personal_post' },
      { label: '58同城经纪人', value: '58_agent' },
    ],
    [
      { label: '政府推荐', value: 'government_recommendation' },
      { label: '老业主推荐', value: 'previous_owner_recommendation' },
      { label: '朋友推荐', value: 'friend_recommendation' },
      { label: '公司推荐', value: 'company_recommendation' },
      { label: '同业推荐', value: 'peer_recommendation' },
    ],
    [
      { label: 'Call博客', value: 'call_blog' },
      { label: '陌拜', value: 'cold_visit' },
      { label: '参加活动', value: 'event_participation' },
    ],
    [{ label: '路过', value: 'pass_by' }],
    [
      { label: '中工招商网', value: 'zhonggong_network' },
      { label: '今日头条', value: 'today_headlines' },
      { label: '园链', value: 'garden_chain' },
      { label: '抖音', value: 'douyin' },
      { label: '探迹', value: 'tanzhi' },
      { label: '朋友圈广告', value: 'friend_circle_ad' },
      { label: '言通', value: 'yantong' },
      { label: '励销云', value: 'lixiaoyun' },
      { label: '启客多', value: 'qikeduo' },
    ],
  ]);
  // 初始化为一个数组，以存储每组复选框的选中值
  // 用一个对象存储每个选项的选中状态
  const checkedOptions = ref(plainOptions.value.map(() => ({}))); // 根据需要的组数进行调整
  const Asstitle = ref([
    { title: '机构推荐' },
    { title: '广告宣传' },
    { title: '网络来电' },
    { title: '他人推荐' },
    { title: '自主拓客' },
    { title: '自然来访' },
    { title: '新媒体推广' },
  ]);
</script>

<style scoped>
  .custom-modal .ant-modal {
    box-shadow: none !important;
  }
  .checkbox-item {
    width: 150px; /* 您希望的宽度 */
  }
  .first-checkbox {
    margin-left: 7px; /* 你可以根据需要调整这个值 */
  }
</style>

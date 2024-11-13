<!--招商客户-->
<template>
  <PageWrapper class="overflow-y-auto h-75vh border border-gray-300">
    <nav class="flex flex-col w-full justify-between">
      <div
        v-for="(title, index) in Asstitle"
        :key="index"
        class="flex mb-4 border-b border-dashed border-gray-400 my-4"
      >
        <div class="flex justify-start w-1/4">
          <span>{{ title.title }}</span>
        </div>
        <div class="flex justify-start w-3/4 space-y-1.5 space-x-1.5 mb-5 flex-col">
          <div class="grid grid-cols-6 gap-2">
            <a-checkbox
              v-for="(option, i) in plainOptions[index]"
              :key="option.value"
              :checked="checkedStatus[index]?.[i] || false"
              @change="onCheckboxChange(index, i)"
              class="checkbox-item"
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

  const visible = ref(false);
  const dictionaryName = ref('');
  const description = ref('');
  const showModal = () => {
    visible.value = true;
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const Asstitle = ref([
    { title: '客户来源' },
    { title: '爱好' },
    { title: '教育背景' },
    { title: '跟进方式' },
    { title: '标签' },
    { title: '行业分类' },
    { title: '抗性or关注' },
    { title: '购买原因' },
    { title: '获知渠道大类' },
    { title: '获知渠道小类' },
    { title: '企业性质' },
    { title: '购买用途' },
    { title: '意向区位' },
    { title: '信息获知渠道' },
    { title: '现办公地址' },
    { title: '现办公地' },
    { title: '目前企业遇到的危险' },
    { title: '加入的组织' },
    { title: '产品或服务主要区域' },
    { title: '联系人类型  ' },
  ]);

  // 每组复选框的选项
  const plainOptions = ref([
    [
      { label: '中介', value: 'intermediary' },
      { label: '来访', value: 'walk_in' },
      { label: '网络获取', value: 'online_source' },
      { label: '委托', value: 'entrustment' },
      { label: '客户介绍', value: 'customer_referral' },
      { label: '来电', value: 'incoming_call' },
      { label: '广告', value: 'advertisement' },
      { label: '老客户', value: 'existing_customer' },
    ],
    [
      { label: '旅游', value: 'travel' },
      { label: '打游戏', value: 'gaming' },
      { label: '运动', value: 'sports' },
      { label: '骑行', value: 'cycling' },
      { label: '音乐', value: 'music' },
      { label: '舞蹈', value: 'dance' },
      { label: '棋类', value: 'board_games' },
      { label: '影视', value: 'movies' },
      { label: '阅读', value: 'reading' },
      { label: '电竞', value: 'esports' },
      { label: '社交', value: 'socializing' },
      { label: '其他', value: 'others' },
    ],
    [
      { label: '小学及以下', value: 'elementary_or_below' },
      { label: '初中', value: 'middle_school' },
      { label: '高中/中专/技校', value: 'high_school_or_vocational' },
      { label: '大专', value: 'associate_degree' },
      { label: '本科', value: 'bachelor_degree' },
      { label: '硕士研究生', value: 'master_degree' },
      { label: '博士研究生', value: 'doctorate' },
    ],
    [
      { label: '主动拜访', value: 'active_visit' },
      { label: '来电', value: 'incoming_call' },
      { label: '去电', value: 'outgoing_call' },
      { label: '来访', value: 'in_person_visit' },
      { label: '微信', value: 'wechat' },
      { label: '短信', value: 'sms' },
      { label: '企业微信', value: 'enterprise_wechat' },
    ],
    [{ label: '', value: '' }],
    [
      { label: '光电子信息', value: 'optoelectronics' },
      { label: '激光', value: 'laser' },
      { label: '人工智能', value: 'artificial_intelligence' },
      { label: '生物医药', value: 'biomedicine' },
      { label: '医疗器械', value: 'medical_devices' },
      { label: '大健康', value: 'healthcare' },
      { label: '智能制造', value: 'smart_manufacturing' },
      { label: '节能环保', value: 'energy_efficiency' },
    ],
    [
      { label: '地段', value: 'location' },
      { label: '距离', value: 'distance' },
      { label: '对区域落户政策', value: 'settlement_policy' },
      { label: '价格', value: 'price' },
      { label: '配套', value: 'supporting_facilities' },
      { label: '户型', value: 'layout' },
      { label: '交通', value: 'transportation' },
    ],
    [
      { label: '目标区域综合成本低', value: 'low_total_cost' },
      { label: '改善', value: 'improvement' },
      { label: '目标有企业特定需求资源', value: 'specific_enterprise_resources' },
      { label: '分子机构', value: 'molecular_agencies' },
      { label: '目标区域上下游合作', value: 'upstream_downstream_cooperation' },
      { label: '业务拓展', value: 'business_expansion' },
      { label: '产能提升', value: 'capacity_improvement' },
      { label: '业务转型', value: 'business_transformation' },
    ],
    [{ label: '', value: '' }],
    [{ label: '', value: '' }],
    [{ label: '', value: '' }],
    [
      { label: '生产', value: 'production' },
      { label: '研发', value: 'research_and_development' },
      { label: '办公', value: 'office' },
      { label: '中试', value: 'pilot_test' },
      { label: '总部基地', value: 'headquarters' },
      { label: '仓储', value: 'warehousing' },
      { label: '投资', value: 'investment' },
    ],
    [{ label: '', value: '' }],
    [{ label: '', value: '' }],
    [
      { label: '生产', value: 'production' },
      { label: '研发', value: 'research_and_development' },
      { label: '办公', value: 'office' },
      { label: '仓储', value: 'warehousing' },
    ],
    [{ label: '', value: '' }],
    [
      { label: '政策支持不足', value: 'insufficient_policy_support' },
      { label: '技术发展问题', value: 'technology_development_issue' },
      { label: '企业管理问题', value: 'enterprise_management_issue' },
      { label: '企业人才缺失', value: 'talent_shortage' },
      { label: '税费承担过重', value: 'heavy_tax_burden' },
      { label: '发展资金缺乏', value: 'lack_of_funding' },
      { label: '缺乏拳头产品', value: 'lack_of_flagship_products' },
      { label: '信息来源不畅', value: 'poor_information_sources' },
      { label: '市场入门门槛高', value: 'high_market_entry_threshold' },
      { label: '知识产权保护法', value: 'intellectual_property_protection' },
    ],
    [{ label: '', value: '' }],
    [
      { label: '本地', value: 'local' },
      { label: '华中', value: 'central_china' },
      { label: '华东', value: 'eastern_china' },
      { label: '华南', value: 'southern_china' },
      { label: '华北', value: 'northern_china' },
      { label: '全国', value: 'national' },
      { label: '国外', value: 'overseas' },
    ],
    [
      { label: '法人', value: 'legal_person' },
      { label: '主要策划人', value: 'chief_planner' },
    ],
  ]);

  const checkedStatus = ref<boolean[][]>(
    Array.from({ length: plainOptions.value.length }, () => Array.from({ length: 6 }, () => false)),
  );

  const onCheckboxChange = (groupIndex: number, optionIndex: number) => {
    checkedStatus.value[groupIndex][optionIndex] = !checkedStatus.value[groupIndex][optionIndex];
  };
</script>

<style scoped>
  .custom-modal .ant-modal {
    box-shadow: none !important;
  }
  .checkbox-item {
    width: 150px;
  }
  .first-checkbox {
    margin-left: 10px;
  }
</style>

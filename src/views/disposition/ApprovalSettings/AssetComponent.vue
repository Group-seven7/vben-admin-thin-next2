<!--资产-->
<template>
  <PageWrapper>
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
          <div>
            <div class="grid grid-cols-6 gap-2">
              <a-checkbox
                v-for="(option, i) in plainOptions[index]"
                :key="option.value"
                v-model="checkedOptions[option.value]"
                :label="option.label"
                class="checkbox-item"
                :class="{ 'first-checkbox': i === 0 }"
              >
                {{ option.label }}
              </a-checkbox>
            </div>
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

  // 使用对象存储每个选项的选中状态
  const checkedOptions = ref<{ [key: string]: boolean }>({});

  // 标题数据
  const Asstitle = ref([
    { title: '房源管理' },
    { title: '项目配置' },
    { title: '房间类型' },
    { title: '设备品牌' },
    { title: '接待要求' },
    { title: '寻找房间标准' },
  ]);

  // 每组复选框的选项
  const plainOptions = ref([
    [
      { label: '阳台', value: 'balcony' },
      { label: '独卫', value: 'ensuite' },
      { label: '近地铁', value: 'near_subway' },
      { label: '朝南', value: 'south_facing' },
      { label: '智能门锁', value: 'smart_lock' },
      { label: '飘窗', value: 'bay_window' },
      { label: '代收快递', value: 'package_collection' },
      { label: '品牌家电', value: 'brand_appliance' },
      { label: '专属管家', value: 'personal_butler' },
      { label: '定期保洁', value: 'regular_cleaning' },
      { label: '精装修', value: 'luxurious_decoration' },
      { label: '电梯', value: 'elevator' },
    ],
    [
      { label: '洗衣服', value: 'laundry' },
      { label: '热水器', value: 'water_heater' },
      { label: '饮水机', value: 'water_dispenser' },
      { label: '厨房', value: 'kitchen' },
      { label: '停车位', value: 'parking_space' },
      { label: '咖啡机', value: 'coffee_machine' },
      { label: '电视机', value: 'tv' },
      { label: '冰箱', value: 'refrigerator' },
      { label: '微波炉', value: 'microwave' },
      { label: '洗衣房', value: 'laundry_room' },
      { label: '空调', value: 'air_conditioner' },
      { label: '烤箱', value: 'oven' },
      { label: '24小时保安', value: '24h_security' },
      { label: '常规保洁', value: 'regular_cleaning_service' },
      { label: '健身房', value: 'gym' },
      { label: '前台', value: 'reception' },
      { label: '代收快递', value: 'package_delivery' },
      { label: '游泳池', value: 'swimming_pool' },
      { label: '公共WIFI', value: 'public_wifi' },
      { label: '超市', value: 'supermarket' },
      { label: '电梯', value: 'elevator_service' },
    ],
    [
      { label: '主卧', value: 'master_bedroom' },
      { label: '次卧', value: 'second_bedroom' },
      { label: '隔断', value: 'partition' },
    ],
    [
      { label: '美的', value: 'midea' },
      { label: '格力', value: 'gree' },
      { label: '海尔', value: 'haier' },
      { label: 'TCL', value: 'tcl' },
      { label: '长虹', value: 'changhong' },
      { label: '苏泊尔', value: 'supor' },
      { label: '荣声', value: 'rongsheng' },
      { label: '西门子', value: 'siemens' },
      { label: '美菱', value: 'meiling' },
      { label: '松下', value: 'panasonic' },
      { label: '小米', value: 'xiaomi' },
      { label: '海信', value: 'hisense' },
      { label: '米家', value: 'mi_home' },
      { label: '芝华仕', value: 'zhihua' },
      { label: '全友', value: 'quanyou' },
      { label: '林氏木业', value: 'linshi' },
      { label: '丽巢', value: 'lichao' },
    ],
    [
      { label: '不适合儿童', value: 'not_suitable_for_children' },
      { label: '不适合老人', value: 'not_suitable_for_elderly' },
      { label: '禁止带宠物', value: 'no_pets' },
      { label: '不可做饭', value: 'no_cooking' },
      { label: '禁止聚会', value: 'no_parties' },
      { label: '禁止商业拍照', value: 'no_commercial_photography' },
      { label: '不接待外宾', value: 'no_foreign_guests' },
    ],
    [
      { label: '重点巡查房间', value: 'key_inspection_rooms' },
      { label: '高危房间', value: 'high_risk_rooms' },
      { label: '整点到期需复查房间', value: 'review_rooms_at_expiry' },
      { label: '待复查房间', value: 'pending_review_rooms' },
    ],
  ]);
</script>

<style scoped>
  .custom-modal .ant-modal {
    box-shadow: none !important;
  }
  .checkbox-item {
    width: 150px;
  }
  .first-checkbox {
    margin-left: 7px;
  }
</style>

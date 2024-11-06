<template>
  <PageWrapper>
    <div class="bg-white rounded-lg">
      <div class="mt-5 mb-5 flex">
        <Icon icon="bytesize:location" />
        <div>东西湖新创基地（武汉市-江夏区-庙山）</div>
        <div class="ml-auto text-blue-500">管理项目</div>
      </div>
      <div class="bg-gray-100">
        <span class="text-base m-2">B1栋1单元（共10套，10间，出租率90%）</span>
      </div>
      <div class="m-4">
        <h2>1层 （6间）</h2>
        <a-row :gutter="[10, 10]" class="row-container">
          <a-col
            v-for="(value, key) in data.featureList1"
            :key="key"
            :span="getColSpan"
            :xs="12"
            :sm="6"
            :lg="4"
          >
            <div class="max-w-md mx-auto a rounded-lg shadow-lg bg-white">
              <div class="m-3">
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <h2 class="card-title font-semibold">{{ value.title }}</h2>
                  <div class="ml-auto mt-2 sm:mt-0 border p-1 rounded-lg border-blue-500">
                    <span class="text-blue-500">{{ value.type }}</span>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center mt-2">
                  <div class="break-words flex-grow">
                    <div class="text-blue-500 text-xs">{{ value.rent }}</div>
                    <div class="text-xs">{{ value.rentalPeriod }}</div>
                  </div>
                  <div class="ml-auto mt-13 sm:mt-0 flex">
                    <div class="status-circle w-5 h-5" v-if="value.status1">
                      <span class="status-text text-xs">{{ value.status1 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status2">
                      <span class="status-text text-xs">{{ value.status2 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status3">
                      <span class="status-text text-xs">{{ value.status3 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>

        <h2 class="mt-4">2层 （4间）</h2>
        <a-row :gutter="[10, 10]" class="row-container">
          <a-col
            v-for="(value, key) in data.featureList2"
            :key="key"
            :span="getColSpan"
            :xs="12"
            :sm="6"
            :lg="4"
          >
            <div class="max-w-md mx-auto a rounded-lg shadow-lg bg-white">
              <div class="m-3">
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <h2 class="card-title font-semibold">{{ value.title }}</h2>
                  <div class="ml-auto mt-2 sm:mt-0 border p-1 rounded-lg border-blue-500">
                    <span class="text-blue-500">{{ value.type }}</span>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center mt-2">
                  <div class="break-words flex-grow">
                    <div class="text-blue-500 text-xs">{{ value.rent }}</div>
                    <div class="text-xs">{{ value.rentalPeriod }}</div>
                  </div>
                  <div class="ml-auto mt-13 sm:mt-0 flex">
                    <div class="status-circle w-5 h-5" v-if="value.status1">
                      <span class="status-text text-xs">{{ value.status1 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status2">
                      <span class="status-text text-xs">{{ value.status2 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status3">
                      <span class="status-text text-xs">{{ value.status3 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="bg-white rounded-lg">
      <div class="mt-5 mb-5 flex">
        <Icon icon="bytesize:location" />
        <div>东西湖新创基地（武汉市-江夏区-庙山）</div>
        <div class="ml-auto text-blue-500">管理项目</div>
      </div>
      <div class="bg-gray-100">
        <span class="text-base m-2">B1栋1单元（共10套，10间，出租率90%）</span>
      </div>
      <div class="m-4">
        <h2>1层 （6间）</h2>
        <a-row :gutter="[10, 10]" class="row-container">
          <a-col
            v-for="(value, key) in data.featureList1"
            :key="key"
            :span="getColSpan"
            :xs="12"
            :sm="6"
            :lg="4"
          >
            <div class="max-w-md mx-auto a rounded-lg shadow-lg bg-white">
              <div class="m-3">
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <h2 class="card-title font-semibold">{{ value.title }}</h2>
                  <div class="ml-auto mt-2 sm:mt-0 border p-1 rounded-lg border-blue-500">
                    <span class="text-blue-500">{{ value.type }}</span>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center mt-2">
                  <div class="break-words flex-grow">
                    <div class="text-blue-500 text-xs">{{ value.rent }}</div>
                    <div class="text-xs">{{ value.rentalPeriod }}</div>
                  </div>
                  <div class="ml-auto mt-13 sm:mt-0 flex">
                    <div class="status-circle w-5 h-5" v-if="value.status1">
                      <span class="status-text text-xs">{{ value.status1 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status2">
                      <span class="status-text text-xs">{{ value.status2 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status3">
                      <span class="status-text text-xs">{{ value.status3 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>

        <h2 class="mt-4">2层 （4间）</h2>
        <a-row :gutter="[10, 10]" class="row-container">
          <a-col
            v-for="(value, key) in data.featureList2"
            :key="key"
            :span="getColSpan"
            :xs="12"
            :sm="6"
            :lg="4"
          >
            <div class="max-w-md mx-auto a rounded-lg shadow-lg bg-white">
              <div class="m-3">
                <div class="flex flex-col sm:flex-row sm:items-center">
                  <h2 class="card-title font-semibold">{{ value.title }}</h2>
                  <div class="ml-auto mt-2 sm:mt-0 border p-1 rounded-lg border-blue-500">
                    <span class="text-blue-500">{{ value.type }}</span>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row sm:items-center mt-2">
                  <div class="break-words flex-grow">
                    <div class="text-blue-500 text-xs">{{ value.rent }}</div>
                    <div class="text-xs">{{ value.rentalPeriod }}</div>
                  </div>
                  <div class="ml-auto mt-13 sm:mt-0 flex">
                    <div class="status-circle w-5 h-5" v-if="value.status1">
                      <span class="status-text text-xs">{{ value.status1 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status2">
                      <span class="status-text text-xs">{{ value.status2 }}</span>
                    </div>
                    <div class="status-circle w-5 h-5" v-if="value.status3">
                      <span class="status-text text-xs">{{ value.status3 }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { getWorkbenchData } from '/@/api/workbenck';
  import Icon from '/@/components/Icon/src/Icon.vue';

  // 定义响应式数据
  const data = ref({});
  console.log(data);

  // 调用 API 并更新数据
  getWorkbenchData()
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
  const getColSpan = () => {
    // 根据屏幕尺寸动态返回列宽
    const width = window.innerWidth;
    if (width < 576) return 12; // 小于576px时，每行1列
    if (width < 768) return 6; // 小于768px时，每行2列
    return 4; // 大于等于768px时，每行3列
  };
</script>

<style scoped>
  .row-container {
    height: 100%; /* 确保容器高度固定 */
  }

  .max-w-md {
    height: 110px; /* 设置固定高度 */
  }
  .a {
    border-color: #57da10;
    box-shadow: 0 0 5px rgba(3, 230, 3, 0.5);
  }
  .status-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #57da10; /* 圆的边框色 */
    border-radius: 50%; /* 使它变为圆形 */
    background-color: white; /* 圆的背景色 */
  }
  .status-text {
    font-weight: bold;
    color: #57da10; /* 字体颜色 */
  }
</style>

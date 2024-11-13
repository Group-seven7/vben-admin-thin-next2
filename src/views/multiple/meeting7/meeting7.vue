<template>
  <div class="bg-white flex items-center justify-center h-screen flex-col gap-4 max-w-3xl mx-auto">
    <div class="flex items-center justify-between w-2xl p-4 rounded">
      <h1 class="text-2xl font-semibold">资产录入</h1>
      <button class="hover:bg-red-700 font-bold py-2 px-4 rounded"> X </button>
    </div>
    <a-steps :current="1" size="small">
      <a-step>
        <template #title>项目信息</template>
        <template #description>
          <span>请输入项目名称、编号等基本信息</span>
        </template>
      </a-step>
      <a-step title="配置楼栋" />
      <a-step title="配置房间" />
      <a-step title="推广描述" />
    </a-steps>
    <div class="bg-white p-4 rounded space-y-4 w-2xl overflow-auto" style="max-height: 50vh">
      <div>
        <label for="projectName" class="block text-sm font-medium text-gray-700">*项目名称</label>
        <input
          type="text"
          id="projectName"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入项目名称"
        />
      </div>
      <div>
        <label for="projectNumber" class="block text-sm font-medium text-gray-700">项目编号</label>
        <input
          type="text"
          id="projectNumber"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入项目编号"
        />
      </div>
      <div>
        <label for="promotionName" class="block text-sm font-medium text-gray-700"
          >项目推广名称</label
        >
        <input
          type="text"
          id="promotionName"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入项目推广名称"
        />
      </div>
      <div>
        <label for="equityRatio" class="block text-sm font-medium text-gray-700">权益比例</label>
        <input
          type="text"
          id="equityRatio"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入项目比例"
        />
        <span class="text-gray-500">%</span>
      </div>
      <div>
        <label for="projectAddress" class="block text-sm font-medium text-gray-700"
          >*项目地址</label
        >
        <input
          type="text"
          id="projectAddress"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入小区地址"
        />
        <span class="text-gray-500">武汉市 ▼</span>
      </div>
      <div>
        <label for="cityCompany" class="block text-sm font-medium text-gray-700"
          >项目所属城市公司</label
        >
        <input
          type="text"
          id="cityCompany"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入项目所属城市公司"
        />
      </div>
      <div>
        <label for="legalCompany" class="block text-sm font-medium text-gray-700"
          >项目所属法人公司</label
        >
        <input
          type="text"
          id="legalCompany"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="请输入项目所属法人公司"
        />
      </div>
      <div>
        <label for="projectStatus" class="block text-sm font-medium text-gray-700">项目状态</label>
        <select
          id="projectStatus"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        >
          <option value="on_sale">在售</option>
          <!-- Add other options here -->
        </select>
      </div>
      <div>
        <label for="projectDescription" class="block text-sm font-medium text-gray-700"
          >项目描述</label
        >
        <textarea
          id="projectDescription"
          class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          rows="4"
          placeholder="项目规划、引入行业、运营目标..."
        ></textarea>
        <div class="flex items-center justify-between text-gray-500 text-sm">
          <span>0/2000</span>
          <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded">
            +
          </button>
        </div>
      </div>
      <div>
        <label for="projectMap" class="block text-sm font-medium text-gray-700">项目总图</label>
        <button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded">
          +
        </button>
        <div class="text-gray-500 text-sm"> 0/5 </div>
      </div>
    </div>
    <!-- 项目规划指标 -->
    <div class="flex items-center justify-between p-4 rounded w-2xl">
      <h1 class="text-2xl font-semibold">项目规划指标</h1>
    </div>
    <div
      class="bg-white p-4 rounded shadow-lg space-y-4 w-2xl overflow-auto"
      style="max-height: 50vh"
    >
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="用地面积" class="block text-sm font-medium text-gray-700">用地面积</label>
          <input
            type="text"
            id="用地面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入用地面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="建筑密度" class="block text-sm font-medium text-gray-700">建筑密度</label>
          <input
            type="text"
            id="建筑密度"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入建筑密度"
          />
          <span class="text-gray-500">%</span>
        </div>
        <div>
          <label for="车位配比" class="block text-sm font-medium text-gray-700">车位配比</label>
          <input
            type="text"
            id="车位配比"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入车位配比"
          />
        </div>
        <div>
          <label for="总建筑面积" class="block text-sm font-medium text-gray-700">总建筑面积</label>
          <input
            type="text"
            id="总建筑面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入总建筑面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="绿化率" class="block text-sm font-medium text-gray-700">绿化率</label>
          <input
            type="text"
            id="绿化率"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入绿化率"
          />
          <span class="text-gray-500">%</span>
        </div>
        <div>
          <label for="车位数量" class="block text-sm font-medium text-gray-700">车位数量</label>
          <input
            type="text"
            id="车位数量"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入车位数量"
          />
          <span class="text-gray-500">个</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="计容建筑面积" class="block text-sm font-medium text-gray-700"
            >计容建筑面积</label
          >
          <input
            type="text"
            id="计容建筑面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入计容建筑面积"
          />
        </div>
        <div>
          <label for="可售面积" class="block text-sm font-medium text-gray-700">可售面积</label>
          <input
            type="text"
            id="可售面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入可售面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="地上车位数量" class="block text-sm font-medium text-gray-700"
            >地上车位数量</label
          >
          <input
            type="text"
            id="地上车位数量"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入地上车位数量"
          />
        </div>
        <div>
          <label for="容积率" class="block text-sm font-medium text-gray-700">容积率</label>
          <input
            type="text"
            id="容积率"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入容积率"
          />
        </div>
        <div>
          <label for="可租面积" class="block text-sm font-medium text-gray-700">可租面积</label>
          <input
            type="text"
            id="可租面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入可租面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="地下车位数量" class="block text-sm font-medium text-gray-700"
            >地下车位数量</label
          >
          <input
            type="text"
            id="地下车位数量"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入地下车位数量"
          />
          <span class="text-gray-500">个</span>
        </div>
      </div>
    </div>
    <!-- 项目分析信息 -->
    <div class="flex items-center justify-between p-4 rounded w-2xl">
      <h1 class="text-2xl font-semibold">项目信息分析</h1>
    </div>
    <div
      class="bg-white p-4 rounded shadow-lg space-y-4 w-2xl overflow-auto"
      style="max-height: 50vh"
    >
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="用地面积" class="block text-sm font-medium text-gray-700">用地面积</label>
          <input
            type="text"
            id="用地面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入用地面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="建筑密度" class="block text-sm font-medium text-gray-700">建筑密度</label>
          <input
            type="text"
            id="建筑密度"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入建筑密度"
          />
          <span class="text-gray-500">%</span>
        </div>
        <div>
          <label for="车位配比" class="block text-sm font-medium text-gray-700">车位配比</label>
          <input
            type="text"
            id="车位配比"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入车位配比"
          />
        </div>
        <div>
          <label for="总建筑面积" class="block text-sm font-medium text-gray-700">总建筑面积</label>
          <input
            type="text"
            id="总建筑面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入总建筑面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="绿化率" class="block text-sm font-medium text-gray-700">绿化率</label>
          <input
            type="text"
            id="绿化率"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入绿化率"
          />
          <span class="text-gray-500">%</span>
        </div>
        <div>
          <label for="车位数量" class="block text-sm font-medium text-gray-700">车位数量</label>
          <input
            type="text"
            id="车位数量"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入车位数量"
          />
          <span class="text-gray-500">个</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="计容建筑面积" class="block text-sm font-medium text-gray-700"
            >计容建筑面积</label
          >
          <input
            type="text"
            id="计容建筑面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入计容建筑面积"
          />
        </div>
        <div>
          <label for="可售面积" class="block text-sm font-medium text-gray-700">可售面积</label>
          <input
            type="text"
            id="可售面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入可售面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="地上车位数量" class="block text-sm font-medium text-gray-700"
            >地上车位数量</label
          >
          <input
            type="text"
            id="地上车位数量"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入地上车位数量"
          />
        </div>
        <div>
          <label for="容积率" class="block text-sm font-medium text-gray-700">容积率</label>
          <input
            type="text"
            id="容积率"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入容积率"
          />
        </div>
        <div>
          <label for="可租面积" class="block text-sm font-medium text-gray-700">可租面积</label>
          <input
            type="text"
            id="可租面积"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入可租面积"
          />
          <span class="text-gray-500">m²</span>
        </div>
        <div>
          <label for="地下车位数量" class="block text-sm font-medium text-gray-700"
            >地下车位数量</label
          >
          <input
            type="text"
            id="地下车位数量"
            class="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="请输入地下车位数量"
          />
          <span class="text-gray-500">个</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { Step } from 'ant-design-vue';
</script>
<style scoped>
  /* You can add your scoped styles here */
</style>

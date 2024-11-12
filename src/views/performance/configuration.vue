<!--分佣配置列表页面-->
<script setup lang="ts">
  import { ref } from 'vue'
  import { configuration_disposition } from '../../../types/performance'

  // 当前选择的项目
  let current_project = ref<string>('项目一')
  // 选择项目list
  let project_list = ['项目一', '项目二', '项目三', '项目四']
  let project_list_alpha = ['E+SPACE', '软件新城', '创新园区', '测试公寓楼栋']
  // 选择框弹出框状态
  let select_popUp_status = ref<boolean>(false)
  // 弹出框中选择弹出框的状态
  let select_project_popUp_status = ref<boolean>(false)
  // 当前项目
  let select_project_alpha = ref<string>('E+SPACE')
  // 打开选择框
  function open_select_popUp(){
    select_popUp_status.value = !select_popUp_status.value
  }
  // 选择项目
  function select_project_item(index: number){
    select_popUp_status.value = false
    current_project.value = project_list[index]
  }

  // 新雇配置弹出框状态
  let configuration_status = ref<boolean>(false)
  // 租赁提成标准
  let standard_popUp = ref<boolean>(false)
  // 租赁提成标准列表
  let standard_list = ['自主招商', '全民营销', '产业合作部网络渠道', '产业合作部机构推荐', '产业合作部个人推荐', '产业合作部优质企业', '跨区域租赁'];
  // 租赁提成
  let standard_selected_list = ref<string[]>(['自主招商', '全民营销']);
  // 行业内/行业外
  let industry_list = ['行业内', '行业外'];
  // 行业选择框
  let industry_popUp = ref<boolean>(false);
  // 当前选择的行业
  let industry_current = ref<string>('行业内');
  // 签约类型
  let kind_list = ['新签', '续签', '其他'];
  // 当前签约类型
  let kind_current = ref<string>('新签');
  // 签约类型弹出框
  let kind_popUp = ref<boolean>(false)
  // 签约时长
  let duration_list = ['＜1年', '1年≤x ＜2年', '2年≤x＜3年', '≥3年'];
  // 当前签约时长
  let duration_current = ref<string>('＜1年');
  // 签约时长弹出框
  let duration_popUp = ref<boolean>(false)
  
  // 通用配置列表
  let configuration_disposition_list = ref<configuration_disposition[]>([
    {
      status: true,
      content: '以上提成均在押金缴清的情况下发放',
    },
    {
      status: true,
      content: '以上提成均在合同年缴清至少一季度的租金的情况下发放',
    },
    {
      status: true,
      content: '门店下同一角色有多名员工，则员工分摊提成佣金',
    },
    {
      status: true,
      content: '签约人与配置的其他角色为同一人时，不享受签约人的提成',
    },
  ])
  
  function open_configuration_popUp(){
    configuration_status.value = !configuration_status.value
  }
  
  // 打开选择框
  function open_select_project(){
    select_project_popUp_status.value = !select_project_popUp_status.value
  }
  // 选中项目
  function select_project_item_alpha(index: number){
    select_project_alpha.value = project_list_alpha[index]
    select_project_popUp_status.value = false
  }
  // 租赁提成标准弹出框状态
  function open_standard_popUp(){
    standard_popUp.value = !standard_popUp.value
  }

  // 行业选择弹出
  function open_industry_popUp(){
    industry_popUp.value = !industry_popUp.value
  }
  // 选择行业
  function select_industry(index: number){
    industry_current.value = industry_list[index]
    industry_popUp.value = false
  }

  // 签约类型框
  function open_kind_popUp(){
    kind_popUp.value = !kind_popUp.value
  }
  // 选中签约类型
  function select_kind(index: number){
    kind_current.value = kind_list[index]
    kind_popUp.value = false
  }

  // 签约时长弹出框
  function open_duration_popUp(){
    duration_popUp.value = !duration_popUp.value
  }

  // 选择签约时长类型
  function select_duration(index: number){
    duration_current.value = duration_list[index]
    duration_popUp.value = false
  }
</script>
<template>
  <div class="w-full h-full p-1">
    <!--操作栏-->
    <div class="flex flex-row items-center justify-center w-full h-24">
      <!--选择项目-->
      <div class="relative w-48 h-24 mr-auto">
        <!--选择项目标题-->
        <span class="text-xl leading-8">选择项目</span>
        <!--选择项目内容-->
        <div class="flex flex-col justify-center w-48 h-16 align-center">
          <!--选择按钮-->
          <div class="flex flex-row justify-center w-48 h-8 px-1 bg-gray-200 rounded-md align-center" @click="open_select_popUp()">
            <span class="text-xl leading-8 w-46">{{current_project}}</span>
            <span class="text-xl leading-8 iconfont hover:text-blue-600 hover:cursor-pointer">{{'\ue618'}}</span>
          </div>
          <!--弹出框-->
          <div v-if="select_popUp_status" class="absolute w-48 p-1 bg-gray-200 rounded-md top-24">
            <div
              class="flex flex-row justify-start items-center px-1 h-8 rounded-md w-46 hover:bg-blue-300"
              v-for="(item, index) in project_list"
              :key="index"
              @click="select_project_item(index)"
            >
              <span class="text-xl leading-8">{{item}}</span>
            </div>
          </div>
        </div>
      </div>
      <!--新增分佣配置-->
      <div class="h-8 w-36">
        <div
          class="h-8 text-center bg-blue-300 rounded-md w-36 hover:bg-blue-500"
          @click="open_configuration_popUp()"
        >
          <span class="text-xl leading-8">新增分佣配置</span>
        </div>
        <!--弹出框-->
        <div v-if="configuration_status" class="absolute flex flex-col items-center justify-start p-1 bg-gray-200 rounded-md w-150 h-192 right-1 top-18">
          <!--选择项目-->
          <div class="h-24 w-148">
            <!--标题-->
            <span class="text-xl leading-8">选择项目</span>
            <div class="flex flex-col items-start justify-center h-16 w-148">
              <!--选择项目-->
              <div class="flex flex-row items-center justify-between w-48 h-8 px-1 rounded-md bg-gray-50" @click="open_select_project()">
                <span class="text-xl leading-8">{{ select_project_alpha }}</span>
                <span class="text-xl leading-8 iconfont hover:text-blue-600 hover:cursor-pointer">{{'\ue618'}}</span>
              </div>
              <!--弹出框-->
              <div v-if="select_project_popUp_status" class="absolute flex flex-col items-center w-48 p-1 rounded-md top-22 bg-gray-50" @click="">
                <!--弹出框列表-->
                <div class="flex flex-row items-center justify-start h-8 p-1 rounded-md w-46 hover:bg-blue-300" v-for="(item, index) in project_list_alpha" :key="index"
                     @click="select_project_item_alpha(index)"
                >
                  <span class="text-xl leading-8">{{item}}</span>
                </div>
              </div>
            </div>
          </div>
          <!--客户信息-->
          <div class="h-24 w-148 ">
            <span class="text-xl leading-8">客户信息</span>
            <div class="flex flex-row items-center justify-between w-148 -16">
              <!--租赁提成标准-->
              <div class="flex flex-row items-center justify-between h-8 w-72">
                <span class="w-22 h-8 overflow-hidden text-xl leading-8 whitespace-nowrap text-ellipsis">*租赁提成标准</span>
                <!-- 选择 -->
                <div class="flex flex-row items-center justify-start h-8 rounded-md w-50 bg-gray-50">
                  <div class="flex flex-row items-center justify-start h-8 px-1 overflow-hidden w-45 whitespace-nowrap text-ellipsis">
                    <div class="px-1 mr-1 bg-gray-300 rounded-md" v-for="(item, index) in standard_selected_list" :key="index">
                      <span class="leading-6">{{ item }}</span>
                      <span class="ml-1 text-red-600 iconfont hover:text-red-300">{{ '\ue61f' }}</span>
                    </div>
                  </div>
                  <span class="ml-auto mr-1 iconfont hover:text-blue-600 hover:cursor-pointer" @click="open_standard_popUp()">{{ '\ue618' }}</span>
                </div>
                <!-- 弹出框 -->
                <div v-if="standard_popUp" class="absolute flex flex-col items-center justify-start p-1 rounded-md top-42 w-72 bg-gray-50">
                  <span class="px-1 text-xl leading-8 rounded-md w-70 hover:bg-blue-300" v-for="(item, index) in standard_list" :key="index" @click="open_standard_popUp()">{{ item }}</span>
                </div>
              </div>
              <!--行业内/行业外-->
              <div class="flex flex-row items-center justify-between h-8 w-72">
                <span class="w-22 h-8 overflow-hidden text-xl leading-8 whitespace-nowrap text-ellipsis">*行业内/行业外</span>
                <!-- 选择 -->
                <div class="flex flex-row items-center justify-start h-8 rounded-md w-50 bg-gray-50">
                  <span class="leading-8 text-xl px-1">{{ industry_current }}</span>
                  <span class="ml-auto mr-1 iconfont hover:text-blue-600 hover:cursor-pointer" @click="open_industry_popUp()">{{ '\ue618' }}</span>
                </div>
                <!-- 弹出框 -->
                <div v-if="industry_popUp" class="absolute flex flex-col items-center justify-start p-1 rounded-md top-42 w-72 bg-gray-50">
                  <span class="px-1 text-xl leading-8 rounded-md w-70 hover:bg-blue-300" v-for="(item, index) in industry_list" :key="index" @click="select_industry(index)">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 租赁信息 -->
          <div class="h-24 w-148 ">
            <span class="text-xl leading-8">租赁信息</span>
            <div class="flex flex-row items-center justify-between w-148 -16">
              <!--签约类型-->
              <div class="flex flex-row items-center justify-between h-8 w-72">
                <span class="w-22 h-8 overflow-hidden text-xl leading-8 whitespace-nowrap text-ellipsis">*签约类型</span>
                <!-- 选择 -->
                <div class="flex flex-row items-center justify-start h-8 rounded-md w-50 bg-gray-50">
                  <span class="leading-8 text-xl px-1">{{ kind_current }}</span>
                  <span class="ml-auto mr-1 iconfont hover:text-blue-600 hover:cursor-pointer" @click="open_kind_popUp()">{{ '\ue618' }}</span>
                </div>
                <!-- 弹出框 -->
                <div v-if="kind_popUp" class="absolute flex flex-col items-center justify-start p-1 rounded-md top-66 w-72 bg-gray-50">
                  <span class="px-1 text-xl leading-8 rounded-md w-70 hover:bg-blue-300" v-for="(item, index) in kind_list" :key="index" @click="select_kind(index)">{{ item }}</span>
                </div>
              </div>
              <!--签约时长-->
              <div class="flex flex-row items-center justify-between h-8 w-72">
                <span class="w-22 h-8 overflow-hidden text-xl leading-8 whitespace-nowrap text-ellipsis">*签约时长</span>
                <!-- 选择 -->
                <div class="flex flex-row items-center justify-start h-8 rounded-md w-50 bg-gray-50">
                  <span class="leading-8 text-xl px-1">{{ duration_current }}</span>
                  <span class="ml-auto mr-1 iconfont hover:text-blue-600 hover:cursor-pointer" @click="open_duration_popUp()">{{ '\ue618' }}</span>
                </div>
                <!-- 弹出框 -->
                <div v-if="duration_popUp" class="absolute flex flex-col items-center justify-start p-1 rounded-md top-66 w-72 bg-gray-50">
                  <span class="px-1 text-xl leading-8 rounded-md w-70 hover:bg-blue-300" v-for="(item, index) in duration_list" :key="index" @click="select_duration(index)">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 分佣规则 -->
          <div class="w-148 flex flex-col justify-start items-start">
            <span class="text-xl leading-8">分佣规则</span>
            <div class="w-148 h-36 bg-gray-100 rounded-md">
              <div></div>
            </div>
          </div>

          <!-- 通用配置 -->
          <div class="w-148 h-60">
            <span class="leading-8 text-xl">通用配置</span>
            <div class="w-148 h-12 flex flex-row justify-start items-center" v-for="(item, index) in configuration_disposition_list" :key="index">
              <input type="checkbox" class="w-6 h-6 ml-2 rounded-xl" checked="true"/>
              <span class="w-140 ml-1 whitespace-nowrap overflow-hidden text-ellipsis text-xl">{{ item.content }}</span>
            </div>
          </div>
          <!-- 底部确认框 -->
          <div class="w-148 h-8 flex flex-row justify-center items-center">
            <button class="w-24 h-8 rounded-md bg-red-600 text-white text-xl leading-8 hover:bg-red-300">取消</button>
            <button class="w-24 h-8 ml-2 rounded-md bg-blue-400 text-white text-xl leading-8 hover:bg-blue-600">确认</button>
          </div>
        </div>
      </div>

    </div>
    <!--签约业绩提成配置标-->
    <span class="block mt-8 text-xl leading-8">签约业绩提成配置标</span>
    <!--表格-->
    <table class="w-full border table-auto">
      <thead>
      <tr>
        <th class="text-center border-2">租赁提成标准</th>
        <th class="text-center border-2">行业内/行业外</th>
        <th class="text-center border-2">签约类型</th>
        <th class="text-center border-2">签约时长</th>
        <th class="text-center border-2">操作</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-center border-2">0</td>
        <td class="text-center border-2">0</td>
        <td class="text-center border-2">0</td>
        <td class="text-center border-2">0</td>
        <td class="text-center border-2">
          <div class="w-full flex flex-row justify-center items-center">
            <span class="text-blue-300 text-xl hover:text-blue-600 hover:cursor-pointer">编辑</span>
            <span class="text-red-300 text-xl hover:text-red-600 ml-2 hover:cursor-pointer">禁用</span>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped lang="less">

</style>

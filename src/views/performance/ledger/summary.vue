<script setup lang="ts">
import { ref } from 'vue';

// 选择项目列表
let select_project_list = [
  '不限',
  '软件新城',
  '邓甲新城',
  '创新公寓',
  '测试公寓楼栋',
];
// 选择项目 - 默认
let select_project_current = ref<string>('不限');
// 选择项目弹出框状态
let select_project_popUp = ref<boolean>(false);
// 搜索框状态
let search_popUp = ref<boolean>(false);
// 首月租金
let first_month_rent: string[] = ['不限', '≤1000元', '1000-2000元', '2000-3000元', '3000-5000元', '5000-8000', '≥8000元'];
// 签约面积
let contracted_area: string[] = ['不限','≤10㎡', '10-30㎡', '30-50㎡', '50-70㎡', '70-90㎡','90-110㎡', '＞110㎡'];

// 打开选择项目界面
function open_select_project_popUp(){
  // 打开或关闭选择框
  select_project_popUp.value = !select_project_popUp.value;
}
// 选择项目
function select_project(index: number){
  // 关闭选择框
  select_project_popUp.value = !select_project_popUp.value;
  select_project_current.value = select_project_list[index];
}
// 搜索
function open_search(){
  search_popUp.value = true;
}
function close_search(){
  search_popUp.value = false;
}
</script>
<template>
  <div class="w-full h-full box-border flex-col justify-start align-center p-2">
    <!--标题-->
    <span class="h-8 border-l-2 border-black border-solid pl-2 leading-8 text-2xl">租赁提成汇总</span>
    <!--操作栏-->
    <div class="w-full h-24 mt-8 flex flex-row justify-start align-right">
      <!--周期-->
      <div class="w-86 h-24 flex-col justify-start align-center">
        <!--周期标题-->
        <span class="leading-7 text-xl">周期</span>
        <!--周期内容-->
        <div class="w-full h-17 flex flex-row justify-center items-center">
          <!--起始时间-->
          <div class="w-38 h-8 flex flex-row justify-center align-center bg-gray-50 rounded-md">
            <input class="w-38 h-8 bg-gray-50 rounded-md hover:bg-gray-200 px-1 leading-8 text-xl" type="date">
          </div>
          <!--中间文字-->
          <span class="text-center text-2xl mx-auto">至</span>
          <!--结束时间-->
          <div class="w-38 h-8 flex flex-row justify-center align-center bg-gray-50 rounded-md">
            <input class="w-38 h-8 bg-gray-50 rounded-md hover:bg-gray-200 px-1 leading-8 text-xl" type="date">
          </div>
        </div>
      </div>
      <!--搜索框-->
      <div class="w-96 h-10 ml-auto mr-1 rounded-md">
        <div class="w-96 h-10 bg-gray-300 flex flex-row justify-start align-center px-1 rounded-md">
          <span class="iconfont leading-10 text-2xl">{{'\ue62a'}}</span>
          <input class="w-88 leading-10 bg-gray-300 text-2xl" placeholder="分佣人员信息" @focus="open_search()" @blur="close_search()" />
        </div>
        <!--搜索弹出框-->
        <div v-if="search_popUp" class="absolute w-96 h-96 flex flex-col justify-around bg-gray-200 px-1 right-12 top-30 rounded-md">
          <!--签约时间-->
          <div class="w-full h-24">
            <!--签约时间标题-->
            <span class="leading-8 text-xl">签约时间</span>
            <!--签约时间选项-->
            <div class="w-full h-16 flex flex-row justify-start items-center">
              <!--签约 - 开始时间-->
              <div class="w-38 h-8 flex flex-row justify-center align-center bg-gray-50 rounded-md">
                <input class="w-38 h-8 bg-gray-50 rounded-md hover:bg-gray-200 px-1 leading-8 text-xl" type="date">
              </div>
              <!--中间符号-->
              <span class="text-center text-2xl mx-auto">至</span>
              <!--签约 - 结束时间-->
              <div class="w-38 h-8 flex flex-row justify-center align-center bg-gray-50 rounded-md">
                <input class="w-38 h-8 bg-gray-50 rounded-md hover:bg-gray-200 px-1 leading-8 text-xl" type="date">
              </div>
            </div>
          </div>
          <!--首月租金-->
          <div class="w-full h-32">
            <!--首页租金-->
            <span class="leading-8 text-xl">首页租金</span>
            <!--首页租金内容-->
            <div class="w-full h-24 flex flex-row flex-wrap bg-gray-50 rounded-md">
              <div class="w-20 h-8 flex flex-row justify-around align-center m-auto hover:bg-blue-400 bg-blue-100 rounded-md" v-for="(item, index) in first_month_rent" :key="index">
                <span class="leading-8 text-xs">{{item}}</span>
              </div>
            </div>
          </div>
          <!--签约面积-->
          <div class="w-full h-32">
            <!--首页租金-->
            <span class="leading-8 text-xl">首页租金</span>
            <!--首页租金内容-->
            <div class="w-full h-24 flex flex-row flex-wrap bg-gray-50 rounded-md">
              <div class="w-20 h-8 flex flex-row justify-around align-center m-auto hover:bg-blue-400 bg-blue-100 rounded-md" v-for="(item, index) in contracted_area" :key="index">
                <span class="leading-8 text-xs">{{item}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--下载图标-->
      <span class="iconfont text-4xl leading-10 hover:text-blue-300 text-blue-800">{{'\ue630'}}</span>
    </div>
    <!--列表-->
    <table class="w-full table-auto border">
      <thead>
        <tr>
          <th rowspan="2" class="border-2 text-center">序号</th>
          <th rowspan="2" class="border-2 text-center">分佣人员</th>
          <th rowspan="2" class="border-2 text-center">分佣职务</th>
          <th rowspan="2" class="border-2 text-center">房源</th>
          <th colspan="4" class="border-2 text-center">商业内/行业</th>
          <th colspan="2" class="border-2 text-center">行业外</th>
          <th rowspan="2" class="border-2 text-center">提成目标完成时间</th>
          <th rowspan="2" class="border-2 text-center">租赁总提成</th>
          <th rowspan="2" class="border-2 text-center">扣除总额</th>
          <th rowspan="2" class="border-2 text-center">此次发放总额</th>
        </tr>
        <tr>
          <th class="border-2 text-center">3年以上（首月租金）</th>
          <th class="border-2 text-center">提成比例</th>
          <th class="border-2 text-center">3年以内（首月租金）</th>
          <th class="border-2 text-center">提成比例</th>
          <th class="border-2 text-center">签约面积</th>
          <th class="border-2 text-center">提成比例</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border-2 text-center">1</td>
          <td class="border-2 text-center">黄哈哈 - 13111112222</td>
          <td class="border-2 text-center">招商专员</td>
          <td class="border-2 text-center">xxx项目1401</td>
          <td class="border-2 text-center">15000元</td>
          <td class="border-2 text-center">100%</td>
          <td class="border-2 text-center"></td>
          <td class="border-2 text-center"></td>
          <td class="border-2 text-center"></td>
          <td class="border-2 text-center"></td>
          <td class="border-2 text-center">2023-03-01</td>
          <td class="border-2 text-center">15000元</td>
          <td class="border-2 text-center">2000元</td>
          <td class="border-2 text-center">7500元</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!--<style scoped lang="less"></style>-->

<script setup lang="ts">
  import { ref } from 'vue';
  import { history_table } from '../../../../types/performance'

  // 表格数据
  let history_table_data: history_table[] = [
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 1,
      availability: '软件新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 5000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '张三',
      post: '业务经理'
    },
    {
      ordinal: 2,
      availability: '邓甲新城',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 10000,
      issued: 5000,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    },
    {
      ordinal: 3, 
      availability: '创新公寓',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2022-02-01 11:11',
      personnel: '王五',
      post: '业务经理'
    },
    {
      ordinal: 4,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '赵六',
      post: '业务经理'
    },
    {
      ordinal: 5,
      availability: '测试公寓楼栋',
      contract_duration: '2023-01-01 ~ 2023-12-31',
      the_total_commission_amount: 2500,
      issued: 2500,
      release_time: '2023-02-01 11:11',
      personnel: '李四',
      post: '业务经理'
    }
  ]
  
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
    <span class="h-8 border-l-2 border-black border-solid pl-2 leading-8 text-2xl">提成发放记录</span>
    <!--操作栏-->
    <div class="w-full h-24 mt-8 flex flex-row justify-start align-right">
      <!--选择项目-->
      <div class="h-24 w-48 flex-col justify-start align-center">
        <!--选择项目标题-->
        <span class="leading-7 text-xl">选择项目</span>
        <!--选择项目内容-->
        <div class="w-full h-17 relative flex flex-col justify-center">
          <!--选择项目内容-内层-->
          <div class="w-full h-8 flex flex-row justify-center rounded-md backdrop-opacity-25 hover:bg-gray-200 bg-gray-50" @click="open_select_project_popUp()">
            <!--文字内容-->
            <span class="w-38 leading-8 overflow-hidden whitespace-nowrap text-ellipsis text-xl">{{ select_project_current }}</span>
            <!--图标-->
            <span class="iconfont leading-8 hover:text-blue-300 text-xl">{{ '\ue618' }}</span>
          </div>
          <!--弹出框-->
          <div v-show="select_project_popUp" class="w-48 duration-300 absolute top-17 flex flex-col justify-start overflow-hidden pt-1 align-center bg-gray-200 rounded-md">
            <!--弹出框item-->
            <div v-for="(item, index) in select_project_list" :key="index" class="w-46 h-8 mb-1 ml-1 hover:bg-blue-300 rounded-md" @click="select_project(index)">
              <!--文字-->
              <span class="pl-1 pr-1 overflow-hidden whitespace-nowrap text-ellipsis text-xl">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!--搜索框-->
      <div class="w-96 h-10 ml-auto mr-1 rounded-md">
        <div class="w-96 h-10 bg-gray-300 flex flex-row justify-start align-center px-1 rounded-md">
          <span tabindex="0" class="iconfont leading-10 text-2xl">{{'\ue62a'}}</span>
          <input class="w-88 leading-10 bg-gray-300 text-2xl" placeholder="模糊搜索房间号信息" @focus="open_search()" @blur="close_search()" />
        </div>
      </div>

      <!--下载图标-->
      <span class="iconfont text-4xl leading-10 hover:text-blue-300 text-blue-800">{{'\ue630'}}</span>
    </div>
    <!--列表-->
    <table class="w-full table-auto border">
      <thead>
        <tr>
          <th class="border-2 text-center">序号</th>
          <th class="border-2 text-center">房源信息</th>
          <th class="border-2 text-center">合同周期</th>
          <th class="border-2 text-center">总提成金额（元）</th>
          <th class="border-2 text-center">已发放提成金额（元）</th>
          <th class="border-2 text-center">最近发放时间</th>
          <th class="border-2 text-center">分佣人员</th>
          <th class="border-2 text-center">分佣职务</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in history_table_data" :key="index">
          <td class="border-2 text-center">{{ index + 1 }}</td>
          <td class="border-2 text-center">{{ item.availability }}</td>
          <td class="border-2 text-center">{{ item.contract_duration }}</td>
          <td class="border-2 text-center">{{ item.the_total_commission_amount }}</td>
          <td class="border-2 text-center">{{ item.issued }}</td>
          <td class="border-2 text-center">{{ item.release_time }}</td>
          <td class="border-2 text-center">{{ item.personnel }}</td>
          <td class="border-2 text-center">{{ item.post }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!--<style scoped lang="less"></style>-->

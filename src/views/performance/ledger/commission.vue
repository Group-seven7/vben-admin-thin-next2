<script setup lang="ts">
  import aixos from 'axios'
  import {onMounted, ref} from 'vue';
  import { commission_table } from '../../../../types/performance'

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

  // 表格数据
  let commission_table_data = ref<commission_table[]>([
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 1,
      companyName: 'xxx有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1401',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 2,
      companyName: 'yyyy有限公司',
      rentalCommissionStandard: '全民营销',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1402',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '50元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '2500元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '5000元',
      actualReceivedDeposit: '5000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
    {
      serialNumber: 3,
      companyName: 'zzzz有限公司',
      rentalCommissionStandard: '自主招商',
      industry: 'xxx行业',
      roomNumber: '武汉市洪山区万科1期B1栋1403',
      signingTime: '2023-02-03 11:29',
      contractHeader: '50㎡',
      signedArea: '100元/㎡',
      signedUnitPrice: '2023-01-01~2023-12-31（1年）',
      contractPeriod: '5000元/月',
      firstMonthRent: 5000,
      currentRentPaymentAmount: 5000,
      actualPaymentTime: '2023-02-20 11:11:11',
      shouldReceiveDeposit: '10000元',
      actualReceivedDeposit: '10000元',
      businessDevelopmentPersonnel: '黄哈哈',
      totalCommissionDue: '15000元',
      commissionPaidAmount: 0,
      operation: '发放提成',
    },
  ])

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

  onMounted(()=>{
    // aixos.post('performance/ledger/commission').then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
  })
</script>
<template>
  <div class="w-full h-full box-border flex-col justify-start align-center p-2">
    <!--标题-->
    <span class="h-8 border-l-2 border-black border-solid pl-2 leading-8 text-2xl">租赁提成明细</span>
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
      <!--周期-->
      <div class="w-86 h-24 flex-col justify-start align-center ml-24">
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
          <span tabindex="0" class="iconfont leading-10 text-2xl">{{'\ue62a'}}</span>
          <input class="w-88 leading-10 bg-gray-300 text-2xl" placeholder="搜索" @focus="open_search()" @blur="close_search()" />
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
          <th class="border-2 text-center">序号</th>
          <th class="border-2 text-center">企业名称</th>
          <th class="border-2 text-center">租赁提成标准</th>
          <th class="border-2 text-center">所属行业</th>
          <th class="border-2 text-center">房号</th>
          <th class="border-2 text-center">签约时间</th>
          <th class="border-2 text-center">签约面积</th>
          <th class="border-2 text-center">签约单价</th>
          <th class="border-2 text-center">合同起止时间</th>
          <th class="border-2 text-center">首月租金</th>
          <th class="border-2 text-center">本次租金回款金额</th>
          <th class="border-2 text-center">实际到账时间</th>
          <th class="border-2 text-center">应收押金</th>
          <th class="border-2 text-center">实收押金</th>
          <th class="border-2 text-center">招商人员</th>
          <th class="border-2 text-center">应提成总额</th>
          <th class="border-2 text-center">已发放提成金额</th>
          <th class="border-2 text-center">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in commission_table_data" :key="index">
          <td class="border-2 text-center">{{ index + 1 }}</td>
          <td class="border-2 text-center">{{ item.companyName }}</td>
          <td class="border-2 text-center">{{ item.rentalCommissionStandard }}</td>
          <td class="border-2 text-center">{{ item.industry }}</td>
          <td class="border-2 text-center">{{ item.roomNumber }}</td>
          <td class="border-2 text-center">{{ item.signingTime }}</td>
          <td class="border-2 text-center">{{ item.contractHeader }}</td>
          <td class="border-2 text-center">{{ item.signedArea }}</td>
          <td class="border-2 text-center">{{ item.signedUnitPrice }}</td>
          <td class="border-2 text-center">{{ item.contractPeriod }}</td>
          <td class="border-2 text-center">{{ item.firstMonthRent }}元/月</td>
          <!--<td class="border-2 text-center">{{ item.currentRentPaymentAmount }}元</td>-->
          <td class="border-2 text-center">{{ item.actualPaymentTime }}</td>
          <td class="border-2 text-center">{{ item.shouldReceiveDeposit }}</td>
          <td class="border-2 text-center">{{ item.actualReceivedDeposit }}</td>
          <td class="border-2 text-center">{{ item.businessDevelopmentPersonnel }}</td>
          <td class="border-2 text-center">{{ item.totalCommissionDue }}</td>
          <td class="border-2 text-center">{{ item.commissionPaidAmount }}元</td>
          <td class="border-2 text-center text-blue-400 hover:text-blue-800">{{ item.operation }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<!--<style scoped lang="less"></style>-->

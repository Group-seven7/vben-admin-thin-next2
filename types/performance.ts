export type commission_table = {
  serialNumber: number;
  companyName: string;
  rentalCommissionStandard: string;
  industry: string;
  roomNumber: string;
  signingTime: string;
  contractHeader: string;
  signedArea: string;
  signedUnitPrice: string;
  contractPeriod: string;
  firstMonthRent: number;
  currentRentPaymentAmount: number;
  actualPaymentTime: string;
  shouldReceiveDeposit: string;
  actualReceivedDeposit: string;
  businessDevelopmentPersonnel: string;
  totalCommissionDue: string;
  commissionPaidAmount: number;
  operation: string;
};

export type configuration_disposition = {
  status: boolean;
  content: string;
}

export type history_table = {
  ordinal: number; // 序号
  availability: string; // 房源
  contract_duration: string; // 合同周期
  the_total_commission_amount: number; // 总提成金额
  issued: number; // 已发放提成金额
  release_time: string; // 发放时间
  personnel: string; // 发放人员
  post: string; // 岗位
}
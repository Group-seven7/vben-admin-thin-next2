import { MockMethod } from 'vite-plugin-mock';
// import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';
import { resultSuccess } from './_util';

//资产管理字典,以1开头列如1001
export const propertyManagmentDict = {
  1000: '空房',
  1001: '关闭',
  1002: '定',
  1003: '签',
  1004: '欠',
  1005: '收',
  1006: '退',
  1007: '转',
  1008: '换',
};

export default [
  {
    url: '/basic-api/dict',
    timeout: 1000,
    method: 'get',
    response() {
      return resultSuccess({});
    },
  },
] as MockMethod[];

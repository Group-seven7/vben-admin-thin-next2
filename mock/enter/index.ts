import { MockMethod } from 'vite-plugin-mock';
// import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';
import { resultSuccess } from '../_util';
function planningList() {
  return {
    planning: [
      {
        id: 1,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 2,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 3,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 4,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 5,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 6,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 7,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 8,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 9,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 10,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 11,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
      {
        id: 12,
        title: '用地面积',
        placeholder: '请输入用地面积',
        suffix: '㎡',
      },
    ],
  };
}

export default [
  {
    url: '/basic-api/enter',
    timeout: 1000,
    method: 'get',
    response() {
      return resultSuccess({
        ...planningList(),
      });
    },
  },
] as MockMethod[];

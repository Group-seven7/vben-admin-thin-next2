import { defHttp } from '/@/utils/http/axios';

export function getEnterprise() {
  return defHttp.get({ url: '/getEnterprise' });
}

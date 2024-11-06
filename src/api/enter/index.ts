import { defHttp } from '/@/utils/http/axios';

export function getEnterData() {
  return defHttp.get({ url: '/enter' });
}

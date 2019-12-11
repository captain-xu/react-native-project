import utils from '~/utils';

// 获取我的红包详情
export function getMyInfo(args = {}) {
  return utils.getApi(
     '/recycler-api/quotation/document/list',
     args
  );
}

import { request } from '../../utils/request';
import { ILoginParams, ILoginData } from './types';

/* 用户登录接口 */
export const loginApi = (params: ILoginParams) => {
  return request.post<ILoginData>('/distribute/school/login', params);
};

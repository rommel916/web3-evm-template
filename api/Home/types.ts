/** 登录接口参数 */
export interface ILoginParams {
  username: string;
  password: string;
}

/** 登录接口响应 */
export interface ILoginData {
  token: string;
}

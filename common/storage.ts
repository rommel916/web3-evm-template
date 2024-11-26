import { LocalStorage } from '../utils/storage';

/** 管理token */
export const tokenStorage = new LocalStorage<string>('token', '');

/** 用户信息类型 */
export interface IUser {
  name?: string;
  age?: number;
}

/** 管理用户信息 */
export const userStorage = new LocalStorage<IUser>('user', {});

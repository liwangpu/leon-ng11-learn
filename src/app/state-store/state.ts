import { IUser } from '../models';

export const storeKey: string = 'store';

export interface IStore {
    users?: Array<IUser>;
    currentUser?: IUser;
    num1?: number;
    num2?: number;
}
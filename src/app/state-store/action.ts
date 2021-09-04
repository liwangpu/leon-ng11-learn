import { createAction, props } from '@ngrx/store';
import { IUser } from '../models';

export const setUsers = createAction('[store] set users', props<{ users: Array<IUser> }>());
export const setCurrentUsername = createAction('[store] set current user name', props<{ username: string }>());
export const setNumbers = createAction('[store] set numbers', props<{ num1: number, num2: number }>());
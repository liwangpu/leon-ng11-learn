import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as fromAction from './action';
import * as fromState from './state';
import * as _ from 'lodash';

export const _reducer: ActionReducer<fromState.IStore> = createReducer({
    users: [],
    currentUser: {
        id: '0',
        name: 'Rebot',
        age: 0,
        info: 'default'
    },
    num1: 0,
    num2: 0
},
    on(fromAction.setNumbers, (state: fromState.IStore, { num1, num2 }) => {
        return { ...state, num1, num2 } as any;
    }),
    on(fromAction.setUsers, (state: fromState.IStore, { users }) => {
        return { ...state, users } as any;
    }),
    on(fromAction.setCurrentUsername, (state: fromState.IStore, { username }) => {
        let currentUser = { ...state.currentUser };
        currentUser.name = username;
        return { ...state, currentUser } as any;
    })
);

export function reducer(state: any, action: Action): any {
    return _reducer(state, action);
}

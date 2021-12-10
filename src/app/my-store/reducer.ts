import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as fromState from './state';
import * as fromAction from './action';

export const initialState: fromState.IMyStore = {
    version: 0
};

const _stateReducer: ActionReducer<fromState.IMyStore> = createReducer(initialState,
    on(fromAction.setVersion, (state: fromState.IMyStore, { version }) => {
        return { ...state, version }
    })
);

export function stateReducer(state: any, action: any): any {
    return _stateReducer(state, action);
}

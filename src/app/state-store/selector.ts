import { createFeatureSelector, createSelector, createSelectorFactory, MemoizedSelector } from '@ngrx/store';
import * as  fromReducer from './reducer';
import * as fromState from './state';

const selectStoreData: MemoizedSelector<object, fromState.IStore> = createFeatureSelector<fromState.IStore>(fromState.storeKey);

export const selectUsers = createSelector(
    selectStoreData,
    state => state.users
);

export const selectCurrentUser = createSelector(
    selectStoreData,
    state => state.currentUser
);

export const selectNum1 = createSelector(
    selectStoreData,
    state => state.num1
);

export const selectNum2 = createSelector(
    selectStoreData,
    state => state.num2
);

export const selectSumByMethod1 = createSelector(
    selectStoreData,
    state => {
        console.log('calculate sum');
        return state.num1 + state.num2;
    }
);

export const selectSumByMethod2 = createSelector(
    selectNum1,
    selectNum2,
    (num1, num2) => {
        console.log('calculate sum');
        return num1 + num2;
    }
);

// export const 
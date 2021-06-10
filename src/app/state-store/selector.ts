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
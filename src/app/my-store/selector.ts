import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import * as fromState from './state';

export const selectStoreState: MemoizedSelector<fromState.IMyStore, fromState.IMyStore, DefaultProjectorFn<fromState.IMyStore>> = createFeatureSelector<fromState.IMyStore>(fromState.stateStoreKey);

export const selectVersion: MemoizedSelector<fromState.IMyStore, number> = createSelector(
    selectStoreState,
    state => state.version
);
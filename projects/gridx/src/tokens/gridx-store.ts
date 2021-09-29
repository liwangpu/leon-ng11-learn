import { InjectionToken } from '@angular/core';
import * as fromModel from '../models';
import { IFilterView } from '../models';

export interface IGridXStore {
    getFilterViews(): Promise<Array<fromModel.IFilterView>>;
    onQuery(queryParam: fromModel.IQueryParam): Promise<fromModel.IQueryResult>;
    onFilterViewCreate(view: IFilterView): Promise<IFilterView>;
    onFilterViewUpdate(view: IFilterView): Promise<void>;
}

export const GRIDX_STORE: InjectionToken<IGridXStore> = new InjectionToken<IGridXStore>('gridx store');
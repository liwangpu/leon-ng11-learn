import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import * as _ from 'lodash';
import { Observable, pipe, UnaryFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromEnum from '../enums';
import * as fromModel from '../models';
import * as fromUtil from '../utils';

const staticSeqColumn: fromModel.IGridColumn = {
  field: fromEnum.StaticColumnType.seq,
  name: 'seq',
  fieldType: fromEnum.StaticColumnType.seq,
  width: 40
};

const staticOperationColumn: fromModel.IGridColumn = {
  field: fromEnum.StaticColumnType.operation,
  name: 'operation',
  fieldType: fromEnum.StaticColumnType.operation,
  width: 6
};

const contentTableHeightMap: { [key: string]: number } = {
  [fromEnum.ContentRowHeightType.normal]: 34,
  [fromEnum.ContentRowHeightType.compact]: 25,
  [fromEnum.ContentRowHeightType.loose]: 55,
  [fromEnum.ContentRowHeightType.superLoose]: 70,
}

export interface IGridState {
  columns: Array<fromModel.IGridColumn>;
  datas: Array<{ [key: string]: any }>;
  sort?: fromModel.ISortEvent;
  viewAreaSize: number;
  staticColumns?: Array<fromModel.IGridColumn>;
  selectedIds: Array<string>;
  contentTableRowHeight: number;
}

function shadow<T>(): UnaryFunction<Observable<T>, Observable<T>> {
  return pipe(map(i => _.cloneDeep(i)));
}

@Injectable()
export class GridStoreService extends ComponentStore<IGridState> {

  public readonly columns$ = this.select(s => s.columns).pipe(shadow());
  public readonly staticColumns$ = this.select(s => s.staticColumns).pipe(shadow());
  public readonly datas$ = this.select(s => s.datas).pipe(shadow());
  public readonly sort$ = this.select(s => s.sort).pipe(shadow());
  public readonly selectedIds$ = this.select(s => s.selectedIds).pipe(shadow());
  public readonly contentTableRowHeight$ = this.select(s => s.contentTableRowHeight);
  public constructor() {
    super({
      columns: [],
      datas: [],
      selectedIds: [],
      viewAreaSize: 0,
      staticColumns: [staticSeqColumn, staticOperationColumn],
      contentTableRowHeight: contentTableHeightMap[fromEnum.ContentRowHeightType.normal]
    });
  }

  public setColumns(columns: Array<fromModel.IGridColumn>): void {
    this.patchState({ columns: columns || [] });
  }

  public setColumnWidth(field: string, width: number): void {
    let cols = this.get(s => s.columns);
    let col = cols.find(c => c.field === field);
    col.width = width;
    this.patchState({ columns: [...cols] });
  }

  public setDatas(datas: Array<{ [key: string]: any }>): void {
    this.patchState({ datas: [...datas] });
  }

  public sortField(field: string): void {
    let lastSort = this.get(s => s.sort);
    let sort: fromModel.ISortEvent = { field, direction: lastSort?.field === field && lastSort?.direction === 'asc' ? 'desc' : 'asc' };
    this.patchState({ sort: { ...sort } });
  }

  public setViewAreaSize(size: number): void {
    this.patchState({ viewAreaSize: size });
  }

  public toggleSelection(id: string): void {
    let selectedIds = this.get(s => s.selectedIds);
    if (selectedIds.some(sid => sid === id)) {
      fromUtil.ArrayTool.remove(selectedIds, sid => sid === id);
    } else {
      selectedIds.push(id);
    }
    this.patchState({ selectedIds: [...selectedIds] });
  }

  public setRowHeightType(heightType: fromEnum.ContentRowHeightType): void {
    const rowHeight = contentTableHeightMap[heightType];
    this.patchState({ contentTableRowHeight: rowHeight });
  }


}

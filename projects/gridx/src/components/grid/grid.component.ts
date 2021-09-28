import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GridStoreService } from '../../services';
import * as _ from 'lodash';
import * as fromModel from '../../models';
import { SubSink } from 'subsink';
import * as faker from 'faker';
import * as fromToken from '../../tokens';

@Component({
  selector: 'gridx',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    GridStoreService
  ]
})
export class GridComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  public constructor(
    private store: GridStoreService
  ) { }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public ngOnInit(): void {
    const columns: Array<fromModel.IGridColumn> = [
      {
        field: 'name',
        name: '名称',
        fieldType: 'string',
        sort: true,
      },
      {
        field: 'age',
        name: '年纪',
        fieldType: 'number',
        sort: true
      },
      {
        field: 'remark',
        name: '备注',
        fieldType: 'string'
      }
    ];

    columns.forEach(c => {
      c.width = 200;
    });
    const datas = [];
    for (let idx = 0; idx < 15; idx++) {
      datas.push({ id: faker.datatype.uuid(), name: faker.name.findName(), age: faker.datatype.number({ min: 2, max: 35 }), remark: faker.random.words() });
    }
    this.store.setColumns(columns);
    this.store.setDatas(datas);
  }

}

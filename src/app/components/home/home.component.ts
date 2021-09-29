import { Component, OnInit, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ID_PROPERTY, GRIDX_STORE, IGridXStore, IFilterView } from 'gridx';
import { IQueryParam, IQueryResult } from 'projects/gridx/src/models';
import * as faker from 'faker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ID_PROPERTY, useValue: 'id' },
    { provide: GRIDX_STORE, useExisting: forwardRef(() => HomeComponent) },
  ]
})
export class HomeComponent implements IGridXStore, OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public async getFilterViews(): Promise<Array<IFilterView>> {
    let views: Array<IFilterView> = [
      {
        id: 'f1',
        name: 'f1',
        columns: [
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
        ]
      }
    ];
    return views;
  }

  public async onQuery(queryParam: IQueryParam): Promise<IQueryResult<any>> {
    const items = [];
    for (let idx = 0; idx < 15; idx++) {
      items.push({ id: faker.datatype.uuid(), name: faker.name.findName(), age: faker.datatype.number({ min: 2, max: 35 }), remark: faker.random.words() });
    }

    return { items };
  }

  public async onFilterViewCreate(view: IFilterView): Promise<IFilterView> {
    return null;
  }

  public async onFilterViewUpdate(view: IFilterView): Promise<void> {

  }

}

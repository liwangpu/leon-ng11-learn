import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, forwardRef, ViewChild, ElementRef, Injector } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import * as _ from 'lodash';
import * as fromModel from '../../models';
import { SubSink } from 'subsink';
import * as fromToken from '../../tokens';
import * as fromUtil from '../../utils';
import * as fromService from '../../services';

function calculateColumnDefaultWidth(name: string): number {
  return 200;
}

@Component({
  selector: 'gridx',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    fromService.GridStoreService
  ]
})
export class GridComponent implements OnInit, OnDestroy {

  @fromUtil.LazyService(fromToken.GRIDX_STORE)
  private readonly gridxStore: fromToken.IGridXStore;
  @fromUtil.LazyService(fromService.GridStoreService)
  protected readonly store: fromService.GridStoreService;
  private subs = new SubSink();
  public constructor(
    protected injector: Injector
  ) { }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public async ngOnInit(): Promise<void> {
    // const datas = [];
    // for (let idx = 0; idx < 15; idx++) {
    //   datas.push({ id: faker.datatype.uuid(), name: faker.name.findName(), age: faker.datatype.number({ min: 2, max: 35 }), remark: faker.random.words() });
    // }
    // this.store.setColumns(columns);
    // this.store.setDatas(datas);
    let views = await this.gridxStore.getFilterViews();
    this.columnWidthCalculator(views);
    this.store.setViews(views);
    console.log('views:', views);

    this.store.refreshDatas();
  }

  private columnWidthCalculator(views: Array<fromModel.IFilterView>): void {
    // 表格视图,需要明确定义好列的宽度,默认表格会自动根据列标题文字长度计算
    // todo:当前先都设置220先,后面补充细节
    views?.forEach(v => {
      let columns = v.columns;
      columns?.forEach(c => {
        if (!c.width) {
          c.width = calculateColumnDefaultWidth(c.name);
        }
      });
    });
  }

}

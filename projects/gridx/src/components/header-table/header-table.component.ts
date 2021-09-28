import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Injector, ChangeDetectorRef } from '@angular/core';
import { SubSink } from 'subsink';
import * as fromService from '../../services';
import * as fromModel from '../../models';
import * as fromUtil from '../../utils';

@Component({
  selector: 'gridx-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderTableComponent extends fromModel.FundamentalTable implements OnInit, OnDestroy {

  public sort: fromModel.ISortEvent;
  public constructor(
    injector: Injector
  ) {
    super(injector);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.subs.sink = this.store.sort$.subscribe(sort => {
      // console.log('sort:', sort);
      this.sort = sort;
    });
  }


}

import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Injector } from '@angular/core';
import { SubSink } from 'subsink';
import * as fromUtil from '../../utils';
import * as fromService from '../../services';
import * as fromEnum from '../../enums';

@Component({
  selector: 'gridx-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridHeaderComponent implements OnInit {

  private test_normal_row_type: boolean = true;
  @fromUtil.LazyService(fromService.GridStoreService)
  protected readonly store: fromService.GridStoreService;
  @fromUtil.LazyService(ChangeDetectorRef)
  protected readonly cd: ChangeDetectorRef;
  private subs = new SubSink();
  public constructor(
    protected injector: Injector
  ) {
  }

  public ngOnInit(): void {
  }

  public setRowHeightType(): void {
    this.store.setRowHeightType(this.test_normal_row_type ? fromEnum.ContentRowHeightType.loose : fromEnum.ContentRowHeightType.normal);
    this.test_normal_row_type = !this.test_normal_row_type;
  }

}

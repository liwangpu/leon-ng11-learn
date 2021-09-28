import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Inject, Injector, ChangeDetectorRef } from '@angular/core';
import { SubSink } from 'subsink';
import * as fromService from '../../services';
import * as fromModel from '../../models';
import * as fromToken from '../../tokens';
import * as fromUtil from '../../utils';

@Component({
  selector: 'gridx-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentTableComponent extends fromModel.DataTable implements OnInit, OnDestroy {

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
  }

}

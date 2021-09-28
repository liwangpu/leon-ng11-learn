import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding, HostListener, Output, EventEmitter, Injector } from '@angular/core';
import * as fromUtil from '../../../utils';
import * as fromService from '../../../services';

@Component({
  selector: 'gridx-header-table-title-cell',
  templateUrl: './title-cell.component.html',
  styleUrls: ['./title-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleCellComponent implements OnInit {

  @Input()
  public field: string;
  @Input()
  @HostBinding('class.sortable')
  public sortable?: boolean;
  @fromUtil.LazyService(fromService.GridStoreService)
  protected readonly store: fromService.GridStoreService;
  public constructor(
    protected injector: Injector
  ) { }

  public ngOnInit(): void {
  }

  public afterResize(width: number): void {
    // console.log('after resize:', width);
    this.store.setColumnWidth(this.field, width);
  }

  @HostListener('click', ['$event'])
  public onSort(e: Event): void {
    if (!this.sortable) { return; }
    this.store.sortField(this.field);
  }
}

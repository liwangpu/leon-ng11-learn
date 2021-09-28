import { Component, OnInit, ChangeDetectionStrategy, HostListener, HostBinding, OnDestroy, Input, Injector, ChangeDetectorRef } from '@angular/core';
import { SubSink } from 'subsink';
import * as fromUtil from '../../../utils';
import * as fromService from '../../../services';

@Component({
  selector: 'gridx-content-table-selection-cell',
  templateUrl: './selection-cell.component.html',
  styleUrls: ['./selection-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionCellComponent implements OnInit, OnDestroy {

  @Input()
  public id: string;
  @HostBinding('class.selection')
  public selectionMode: boolean;
  @HostBinding('class.active')
  public active: boolean;
  public selected?: boolean;
  @fromUtil.LazyService(fromService.GridStoreService)
  protected readonly store: fromService.GridStoreService;
  @fromUtil.LazyService(ChangeDetectorRef)
  protected readonly cd: ChangeDetectorRef;
  private subs = new SubSink();
  public constructor(
    protected injector: Injector
  ) {
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public ngOnInit(): void {
    this.subs.sink = this.store.selectedIds$.subscribe(ids => {
      this.selectionMode = ids.length > 0;
      this.cd.markForCheck();
    });
  }

  public selectionChange(selected: boolean): void {
    this.selected = selected;
    this.store.toggleSelection(this.id);
  }

  @HostListener('mouseenter', ['$event'])
  public onMouseEnter(event: MouseEvent): void {
    this.active = true;
  }

  @HostListener('mouseleave', ['$event'])
  public onMouseLeave(event: MouseEvent): void {
    this.active = false;
  }

}

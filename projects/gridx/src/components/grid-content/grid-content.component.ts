import { Component, OnInit, ChangeDetectionStrategy, forwardRef, ViewChild, ElementRef, Injector } from '@angular/core';
import * as _ from 'lodash';
import * as fromToken from '../../tokens';
import * as fromUtil from '../../utils';
import * as fromService from '../../services';

@Component({
  selector: 'gridx-content',
  templateUrl: './grid-content.component.html',
  styleUrls: ['./grid-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: fromToken.CELL_RESIZE_FLAG_HANDLER, useExisting: forwardRef(() => GridContentComponent) },
  ]
})
export class GridContentComponent implements fromToken.ICellResizeFlagHandler, OnInit {

  @ViewChild('cellResizeSnapline', { static: false, read: ElementRef })
  private readonly cellResizeSnapline: ElementRef;
  @fromUtil.LazyService(fromService.GridStoreService)
  protected readonly store: fromService.GridStoreService;
  public constructor(
    protected injector: Injector,
    private el: ElementRef
  ) { }

  public ngOnInit(): void {
    const nel: HTMLElement = this.el.nativeElement;
    const nrect = nel.getBoundingClientRect();
    this.store.setViewAreaSize(nrect.width);
  }


  public getSnapline(): ElementRef<any> {
    return this.cellResizeSnapline;
  }

}

import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Inject, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { SubSink } from 'subsink';
import * as fromService from '../../../services';
import * as fromModel from '../../../models';
import * as fromToken from '../../../tokens';

@Component({
  selector: 'gridx-content-table-cell-container',
  templateUrl: './cell-container.component.html',
  styleUrls: ['./cell-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellContainerComponent implements OnInit {

  @Input()
  public field: string;
  @Input()
  public fieldType: string;
  @Input()
  public data: { [key: string]: any };
  @ViewChild('container', { static: true, read: ViewContainerRef })
  private container: ViewContainerRef;
  public constructor(
    private injector: Injector,
    @Inject(fromToken.RENDER_POLICY)
    private renderPolicy: fromToken.IRenderPolicy,
  ) { }

  public ngOnInit(): void {
    const fac = this.renderPolicy.getContentTableCell(this.fieldType);
    const cellMetadata: fromToken.ICellMetadata = {
      field: this.field,
      data: this.data
    };
    const ij = Injector.create({
      providers: [
        { provide: fromToken.CELL_METADATA, useValue: cellMetadata }
      ],
      parent: this.injector
    });
    this.container.createComponent(fac, null, ij);
  }

}

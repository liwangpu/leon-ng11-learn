import { Component, OnInit, ChangeDetectionStrategy, Injector, forwardRef } from '@angular/core';
import { EditableContentCell } from 'gridx';

@Component({
  selector: 'app-default-table-cell',
  templateUrl: './default-table-cell.component.html',
  styleUrls: ['./default-table-cell.component.scss'],
  providers: [
    { provide: EditableContentCell, useExisting: forwardRef(() => DefaultTableCellComponent) }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultTableCellComponent extends EditableContentCell implements OnInit {

  public value: any;
  public constructor(
    injector: Injector
  ) {
    super(injector);
  }

  public ngOnInit(): void {
    // console.log('cell:', this.metadata);
    this.value = this.metadata.data[this.metadata.field];
  }



}

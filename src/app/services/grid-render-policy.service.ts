import { ComponentFactory, ComponentFactoryResolver, Injectable } from '@angular/core';
import { IRenderPolicy } from 'gridx';
import { DefaultTableCellComponent } from '../components/default-table-cell/default-table-cell.component';

@Injectable()
export class GridRenderPolicyService implements IRenderPolicy {

  public constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  public getContentTableCell(fieldType: string): ComponentFactory<any> {
    return this.cfr.resolveComponentFactory(DefaultTableCellComponent);
  }
}

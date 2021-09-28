import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CaretUpFill, CaretDownFill,ColumnHeightOutline } from '@ant-design/icons-angular/icons';
import { HeaderTableComponent } from './components/header-table/header-table.component';
import { TitleCellComponent } from './components/header-table/title-cell/title-cell.component';
import { SortFlagComponent } from './components/header-table/sort-flag/sort-flag.component';
import { ContentTableComponent } from './components/content-table/content-table.component';
import { CellContainerComponent } from './components/content-table/cell-container/cell-container.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GridContentComponent } from './components/grid-content/grid-content.component';
import { CellResizerDirective } from './directives/cell-resizer.directive';
import { SelectionCellComponent } from './components/content-table/selection-cell/selection-cell.component';
import { GridHeaderComponent } from './components/grid-header/grid-header.component';

const icons: Array<IconDefinition> = [CaretUpFill, CaretDownFill,ColumnHeightOutline];

@NgModule({
  declarations: [
    GridComponent,
    HeaderTableComponent,
    TitleCellComponent,
    SortFlagComponent,
    ContentTableComponent,
    CellContainerComponent,
    GridContentComponent,
    CellResizerDirective,
    SelectionCellComponent,
    GridHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule.forChild(icons),
    NzButtonModule,
    NzCheckboxModule
  ],
  exports: [
    GridComponent
  ]
})
export class GridXModule { }

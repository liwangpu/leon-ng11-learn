import { IGridColumn } from "./i-grid-column";
import { ISortEvent } from "./i-sort-event";

export class IFilterView {
      // ID
      id?: string;
      // 视图名称
      name: string;
      // 列设置
      columns: Array<IGridColumn>;
      // 排序配置
      sorts?: Array<ISortEvent>;
      // 允许编辑
      editable?: boolean;
      // 进入持续编辑模式
      persistentEditMode?: boolean;
      // 批量选择
      enableBatch?: boolean;
      // 显示汇总行
      showStatistics?: boolean;
      filter?: any;
}

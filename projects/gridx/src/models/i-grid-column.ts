export interface IGridColumn {
    // 列显示名称
    name: string;
    // 列字段名称
    field: string;
    // 列类型
    fieldType: string;
    // 是否支持排序
    sort?: boolean;
    // 列宽度,单位像素
    width?: number;
    // 是否支持编辑
    editable?: boolean;
    hidden?: boolean;
}

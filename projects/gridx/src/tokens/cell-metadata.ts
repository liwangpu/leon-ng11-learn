import { InjectionToken } from '@angular/core';

export interface ICellMetadata {
    field: string;
    data: { [key: string]: any };
}

export const CELL_METADATA: InjectionToken<ICellMetadata> = new InjectionToken<ICellMetadata>('cell metadata');
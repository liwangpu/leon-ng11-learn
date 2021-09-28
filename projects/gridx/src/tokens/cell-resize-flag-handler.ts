import { ElementRef, InjectionToken } from '@angular/core';

export interface ICellResizeFlagHandler {
    getSnapline(): ElementRef;
}

export const CELL_RESIZE_FLAG_HANDLER: InjectionToken<ICellResizeFlagHandler> = new InjectionToken<ICellResizeFlagHandler>('cell resize flag handler');
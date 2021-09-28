import { ComponentFactory, InjectionToken } from '@angular/core';

export interface IRenderPolicy {
    getContentTableCell(fieldType: string): ComponentFactory<any>;
}


export const RENDER_POLICY: InjectionToken<IRenderPolicy> = new InjectionToken<IRenderPolicy>('render policy');
import { createAction, props } from '@ngrx/store';

export const setVersion = createAction('[my-store] set version', props<{ version: number }>());
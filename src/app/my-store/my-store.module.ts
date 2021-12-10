import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { stateReducer } from './reducer';
import { stateStoreKey } from './state';

@NgModule({
  imports: [
    StoreModule.forFeature(stateStoreKey, stateReducer),
  ]
})
export class MyStoreModule { }

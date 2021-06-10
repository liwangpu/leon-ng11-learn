import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer';
import { storeKey } from './state';

@NgModule({
    imports: [
        StoreModule.forFeature(storeKey, reducer),
    ]
})
export class StateStoreModule { }

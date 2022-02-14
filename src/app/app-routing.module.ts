import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'component-store', loadChildren: () => import('./component-store-learn/component-store-learn.module').then(m => m.ComponentStoreLearnModule) },
    { path: 'data-store', loadChildren: () => import('./data-store-learn/data-store-learn.module').then(m => m.DataStoreLearnModule) },
    { path: 'store', loadChildren: () => import('./store-learn/store-learn.module').then(m => m.StoreLearnModule) }
    // { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

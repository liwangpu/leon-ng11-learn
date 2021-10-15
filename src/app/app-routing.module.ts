import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'component-store', loadChildren: () => import('./component-store-learn/component-store-learn.module').then(m => m.ComponentStoreLearnModule) },
    { path: 'store', loadChildren: () => import('./store-learn/store-learn.module').then(m => m.StoreLearnModule) }
    // { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

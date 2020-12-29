import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'lazy',
        loadChildren: () => import('./lazy-modue-infrastructure/lazy-modue-infrastructure.module').then(m => m.LazyModueInfrastructureModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'lazy' },
    { path: '**', redirectTo: 'lazy' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

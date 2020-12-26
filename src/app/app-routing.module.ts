import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'foo',
        loadChildren: () => import('./foo-infrastructure/foo-infrastructure.module').then(m => m.FooInfrastructureModule)
    },
    {
        path: 'bar',
        loadChildren: () => import('./bar-infrastructure/bar-infrastructure.module').then(m => m.BarInfrastructureModule)
    },
    {
        path: 'baz',
        loadChildren: () => import('./baz-infrastructure/baz-infrastructure.module').then(m => m.BazInfrastructureModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, initialNavigation: 'enabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

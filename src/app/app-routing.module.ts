import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'tutorial',
        loadChildren: () => import('./tutorial/tutorial.module').then(m => m.TutorialModule)
    },
    {
        path: 'ngrx-tutorial',
        loadChildren: () => import('./ngrx-tutorial/ngrx-tutorial.module').then(m => m.NgrxTutorialModule)
    },
    {
        path: 'detection-tutorial',
        loadChildren: () => import('./detection-tutorial/detection-tutorial.module').then(m => m.DetectionTutorialModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'tutorial' },
    { path: '**', redirectTo: 'tutorial' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
